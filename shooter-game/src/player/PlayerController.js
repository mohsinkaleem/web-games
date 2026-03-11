import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PLAYER, PHYSICS } from '../utils/Constants.js';
import { clamp } from '../utils/MathUtils.js';

export class PlayerController {
  constructor(camera, physicsWorld, inputManager) {
    this.camera = camera;
    this.world = physicsWorld;
    this.input = inputManager;

    this.yaw = 0;
    this.pitch = 0;
    this.velocity = new THREE.Vector3();
    this.isGrounded = false;
    this.speedMultiplier = 1;

    // Euler for camera rotation
    this.euler = new THREE.Euler(0, 0, 0, 'YXZ');

    // Sprint & Dash
    this.isSprinting = false;
    this.dashCooldown = 0;
    this.dashTimer = 0;
    this.dashDir = new THREE.Vector3();

    // Physics body — allowSleep MUST be false to prevent WASD from getting stuck
    // When a body sleeps, direct velocity assignments are silently ignored.
    this.body = new CANNON.Body({
      mass: 80,
      shape: new CANNON.Sphere(PLAYER.RADIUS),
      fixedRotation: true,
      linearDamping: 0.05,
      allowSleep: false,
    });
    this.body.position.set(0, PLAYER.HEIGHT, 0);
    physicsWorld.addBody(this.body);

    // Contact detection for grounded
    this._groundedThisFrame = false;
    this.body.addEventListener('collide', (e) => {
      const contactNormal = new CANNON.Vec3();
      const contact = e.contact;
      if (contact.bi === this.body) {
        contact.ni.negate(contactNormal);
      } else {
        contactNormal.copy(contact.ni);
      }
      if (contactNormal.y > 0.5) {
        this.isGrounded = true;
        this._groundedThisFrame = true;
      }
    });

    // Pointer lock
    this.isLocked = false;
    document.addEventListener('pointerlockchange', () => {
      this.isLocked = document.pointerLockElement !== null;
    });

    // Re-lock on click when pointer lock is lost during gameplay
    this._onCanvasClick = () => {
      if (!this.isLocked && this._wantsLock) {
        this.lock();
      }
    };
    document.addEventListener('click', this._onCanvasClick);
    this._wantsLock = false;
  }

  lock() {
    this._wantsLock = true;
    try {
      const result = document.body.requestPointerLock();
      if (result && result.catch) result.catch(() => {});
    } catch (e) {
      // Pointer lock may not be available
    }
  }

  unlock() {
    this._wantsLock = false;
    try {
      if (document.pointerLockElement) document.exitPointerLock();
    } catch (e) {
      // Ignore
    }
  }

  update(dt) {
    // CRITICAL: Force wake the physics body every frame.
    // Even with allowSleep:false, cannon-es can sometimes put bodies to sleep
    // during collision resolution or when velocity is exactly zero.
    if (this.body.sleepState !== CANNON.Body.AWAKE) {
      console.warn('[PlayerController] Body was asleep! Forcing wake-up. sleepState:', this.body.sleepState);
      this.body.wakeUp();
    }

    // Reset grounded state each frame — will be re-set by collision events
    // during the next physics step. This prevents stale isGrounded when
    // the player walks off edges or the body was sleeping.
    this._groundedThisFrame = false;

    // Always sync camera position with physics body
    this.camera.three.position.x = this.body.position.x + this.camera.offsetX;
    this.camera.three.position.z = this.body.position.z;

    // Bounds safety: prevent falling through ground
    if (this.body.position.y < PLAYER.RADIUS) {
      this.body.position.y = PLAYER.RADIUS;
      this.body.velocity.y = Math.max(0, this.body.velocity.y);
      this._groundedThisFrame = true;
    }

    // Mouse look (only with pointer lock)
    if (this.isLocked) {
      this.yaw -= this.input.mouseDX * PLAYER.MOUSE_SENSITIVITY;
      this.pitch -= this.input.mouseDY * PLAYER.MOUSE_SENSITIVITY;
      this.pitch = clamp(this.pitch, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01);
    }

    this.euler.set(this.pitch + this.camera.recoilPitch, this.yaw, this.camera.bobZ);
    this.camera.three.quaternion.setFromEuler(this.euler);

    // Movement direction
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();
    this.camera.three.getWorldDirection(forward);
    forward.y = 0;
    if (forward.lengthSq() < 0.001) {
      // Camera pointing straight up/down — use yaw for forward
      forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    }
    forward.normalize();
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    // Sprint
    this.isSprinting = this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('ShiftRight');
    const sprintMul = this.isSprinting ? PLAYER.SPRINT_MULTIPLIER : 1;
    const moveSpeed = PLAYER.MOVE_SPEED * this.speedMultiplier * sprintMul;
    const moveDir = new THREE.Vector3();

    if (this.input.isKeyDown('KeyW')) moveDir.add(forward);
    if (this.input.isKeyDown('KeyS')) moveDir.sub(forward);
    if (this.input.isKeyDown('KeyA')) moveDir.sub(right);
    if (this.input.isKeyDown('KeyD')) moveDir.add(right);

    // Dash
    if (this.dashCooldown > 0) this.dashCooldown -= dt;
    if (this.dashTimer > 0) {
      this.dashTimer -= dt;
      this.body.velocity.x = this.dashDir.x * PLAYER.DASH_SPEED;
      this.body.velocity.z = this.dashDir.z * PLAYER.DASH_SPEED;
    } else if (this.input.isKeyDown('KeyQ') && this.dashCooldown <= 0 && moveDir.lengthSq() > 0) {
      this.dashDir.copy(moveDir).normalize();
      this.dashTimer = PLAYER.DASH_DURATION;
      this.dashCooldown = PLAYER.DASH_COOLDOWN;
      this.camera.addFOVPunch(8);
    } else {
      // Normal movement with acceleration (allows physics to resolve collisions)
      if (moveDir.lengthSq() > 0) {
        moveDir.normalize();
        const targetVx = moveDir.x * moveSpeed;
        const targetVz = moveDir.z * moveSpeed;
        const accel = PLAYER.ACCELERATION;
        const blendFactor = Math.min(1, accel * dt);
        this.body.velocity.x += (targetVx - this.body.velocity.x) * blendFactor;
        this.body.velocity.z += (targetVz - this.body.velocity.z) * blendFactor;
      } else {
        const decel = Math.max(0, 1 - PLAYER.DECELERATION * dt);
        this.body.velocity.x *= decel;
        this.body.velocity.z *= decel;
      }
    }

    // Update grounded from collision events + bounds check
    if (this._groundedThisFrame) {
      this.isGrounded = true;
    } else if (this.body.velocity.y < -0.5) {
      // If falling and no ground contact this frame, we're airborne
      this.isGrounded = false;
    }

    // Jump
    if (this.input.isKeyDown('Space') && this.isGrounded) {
      this.body.velocity.y = PLAYER.JUMP_FORCE;
      this.isGrounded = false;
    }

    // Update camera
    const isMoving = moveDir.lengthSq() > 0;
    this.camera.update(dt, isMoving, this.isSprinting);

    // Keep camera Y relative to physics body (offset from sphere center to eye level)
    this.camera.three.position.y += this.body.position.y - PLAYER.RADIUS;
  }

  getPosition() {
    return new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
  }

  getDirection() {
    const dir = new THREE.Vector3();
    this.camera.three.getWorldDirection(dir);
    return dir;
  }

  reset() {
    this.body.position.set(0, PLAYER.HEIGHT, 0);
    this.body.velocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.speedMultiplier = 1;
    this.isGrounded = false;
    this.isSprinting = false;
    this.dashCooldown = 0;
    this.dashTimer = 0;
  }
}
