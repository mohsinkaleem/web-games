import * as THREE from 'three';
import { PLAYER, EFFECTS } from '../utils/Constants.js';
import { lerp, clamp } from '../utils/MathUtils.js';

export class Camera {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
    this.camera.rotation.order = 'YXZ';
    this.camera.position.set(0, PLAYER.HEIGHT, 0);

    // Recoil
    this.recoilPitch = 0;
    this.recoilRecovery = 8;

    // Shake
    this.shakeIntensity = 0;
    this.shakeTimer = 0;

    // FOV punch
    this.baseFOV = 75;
    this.fovPunch = 0;

    // Head bob
    this.bobTime = 0;
    this.bobActive = false;

    // Offsets
    this.offsetX = 0;
    this.offsetY = 0;

    // Head bob Z rotation (stored, not applied directly to camera)
    this.bobZ = 0;

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  addRecoil(amount) {
    this.recoilPitch += amount;
  }

  addShake(intensity, duration) {
    this.shakeIntensity = intensity;
    this.shakeTimer = duration || EFFECTS.SCREEN_SHAKE_DURATION;
  }

  addFOVPunch(amount) {
    this.fovPunch += amount;
  }

  update(dt, isMoving, isSprinting = false) {
    // Recoil recovery
    this.recoilPitch = lerp(this.recoilPitch, 0, dt * this.recoilRecovery);

    // Shake
    if (this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      const t = this.shakeTimer > 0 ? this.shakeIntensity : 0;
      this.offsetX = (Math.random() - 0.5) * t * 0.1;
      this.offsetY = (Math.random() - 0.5) * t * 0.1;
    } else {
      this.offsetX = lerp(this.offsetX, 0, dt * 10);
      this.offsetY = lerp(this.offsetY, 0, dt * 10);
    }

    // FOV punch recovery + sprint FOV
    const targetFOV = isSprinting ? 82 : 75;
    this.baseFOV = lerp(this.baseFOV, targetFOV, dt * 6);
    this.fovPunch = lerp(this.fovPunch, 0, dt * 6);
    this.camera.fov = this.baseFOV + this.fovPunch;
    this.camera.updateProjectionMatrix();

    // Head bob (faster/stronger when sprinting)
    const bobSpeed = isSprinting ? PLAYER.HEAD_BOB_SPEED * 1.4 : PLAYER.HEAD_BOB_SPEED;
    const bobAmount = isSprinting ? PLAYER.HEAD_BOB_AMOUNT * 1.5 : PLAYER.HEAD_BOB_AMOUNT;
    if (isMoving) {
      this.bobTime += dt * bobSpeed;
    } else {
      this.bobTime = lerp(this.bobTime, 0, dt * 4);
    }

    const bobY = Math.sin(this.bobTime) * bobAmount;
    const bobX = Math.cos(this.bobTime * 0.5) * bobAmount * 0.5;

    this.camera.position.y = PLAYER.HEIGHT + bobY + this.offsetY;
    this.bobZ = bobX * 0.3 + this.offsetX;
  }

  get three() {
    return this.camera;
  }
}
