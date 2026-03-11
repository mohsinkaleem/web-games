import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { lerp } from '../utils/MathUtils.js';

export const EnemyState = {
  IDLE: 'IDLE',
  CHASE: 'CHASE',
  ATTACK: 'ATTACK',
  DYING: 'DYING',
  DEAD: 'DEAD',
};

export class Enemy {
  constructor(config) {
    this.config = config;
    this.name = config.name;
    this.maxHealth = config.health;
    this.health = config.health;
    this.damage = config.damage;
    this.speed = config.speed;
    this.points = config.points;
    this.state = EnemyState.IDLE;
    this.attackCooldown = 0;
    this.deathTimer = 0;
    this.active = false;
    this.healthScale = 1;
    this.damageScale = 1;

    // Mesh
    const { x, y, z } = config.size;
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshStandardMaterial({
      color: config.color,
      emissive: config.emissive,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 1,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.userData.enemy = this;
    this.mesh.userData.isEnemy = true;

    // Eye/visor glow
    const visorGeom = new THREE.BoxGeometry(x * 0.6, y * 0.12, z * 0.02);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.visor = new THREE.Mesh(visorGeom, visorMat);
    this.visor.position.set(0, y * 0.25, z / 2 + 0.01);
    this.mesh.add(this.visor);

    // Health bar (billboard sprite)
    this.healthBarGroup = new THREE.Group();
    const hbBg = new THREE.Mesh(
      new THREE.PlaneGeometry(x * 1.2, 0.1),
      new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
    );
    this.healthBarGroup.add(hbBg);
    this.healthBarFill = new THREE.Mesh(
      new THREE.PlaneGeometry(x * 1.2, 0.08),
      new THREE.MeshBasicMaterial({ color: config.color, side: THREE.DoubleSide })
    );
    this.healthBarGroup.add(this.healthBarFill);
    this.healthBarGroup.position.y = y / 2 + 0.3;
    this.mesh.add(this.healthBarGroup);
    this.healthBarWidth = x * 1.2;

    // Damage flash
    this.flashTimer = 0;
    this.originalColor = config.color;
    this.originalEmissive = config.emissive;

    // Physics body
    this.body = new CANNON.Body({
      mass: 5,
      shape: new CANNON.Box(new CANNON.Vec3(x / 2, y / 2, z / 2)),
      fixedRotation: true,
      linearDamping: 0.5,
    });
    this.body.userData = { enemy: this };
  }

  activate(position, healthScale = 1, damageScale = 1) {
    this.health = this.maxHealth * healthScale;
    this.healthScale = healthScale;
    this.damageScale = damageScale;
    this.state = EnemyState.CHASE;
    this.active = true;
    this.deathTimer = 0;
    this.attackCooldown = 0;
    this.flashTimer = 0;

    this.body.position.set(position.x, this.config.size.y / 2, position.z);
    this.body.velocity.set(0, 0, 0);
    this.mesh.visible = true;
    this.mesh.scale.set(1, 1, 1);
    this.mesh.material.opacity = 1;
    this.mesh.material.transparent = false;
    this.mesh.material.emissiveIntensity = 0.5;
    this.mesh.material.color.setHex(this.originalColor);
    this.mesh.material.emissive.setHex(this.originalEmissive);

    // Spawn animation
    this.mesh.scale.set(0.01, 0.01, 0.01);
    this.spawnTimer = 0.3;
  }

  takeDamage(amount) {
    if (this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return false;
    this.health -= amount;
    this.flashTimer = 0.1;
    this.mesh.material.emissive.setHex(0xffffff);
    this.mesh.material.emissiveIntensity = 2;

    if (this.health <= 0) {
      this.die();
      return true; // killed
    }
    return false;
  }

  die() {
    this.state = EnemyState.DYING;
    this.deathTimer = 0.3;
    this.body.velocity.set(0, 0, 0);
    this.mesh.material.transparent = true;
  }

  update(dt, playerPosition) {
    if (!this.active) return;

    // Spawn animation
    if (this.spawnTimer > 0) {
      this.spawnTimer -= dt;
      const t = 1 - (this.spawnTimer / 0.3);
      this.mesh.scale.setScalar(t);
      return;
    }

    // Damage flash recovery
    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
      if (this.flashTimer <= 0) {
        this.mesh.material.color.setHex(this.originalColor);
        this.mesh.material.emissive.setHex(this.originalEmissive);
        this.mesh.material.emissiveIntensity = 0.5;
      }
    }

    // Death animation
    if (this.state === EnemyState.DYING) {
      this.deathTimer -= dt;
      const t = this.deathTimer / 0.3;
      this.mesh.scale.setScalar(Math.max(0.01, t));
      this.mesh.material.opacity = Math.max(0, t);
      if (this.deathTimer <= 0) {
        this.state = EnemyState.DEAD;
        this.active = false;
        this.mesh.visible = false;
      }
      return;
    }

    this.attackCooldown -= dt;

    // Sync mesh with physics
    this.mesh.position.copy(this.body.position);
    this.mesh.quaternion.copy(this.body.quaternion);

    // Look at player (Y axis only)
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const angle = Math.atan2(dirX, dirZ);
    this.mesh.rotation.y = angle;

    // Update health bar
    const healthPct = Math.max(0, this.health / (this.maxHealth * this.healthScale));
    this.healthBarFill.scale.x = healthPct;
    this.healthBarFill.position.x = (healthPct - 1) * this.healthBarWidth * 0.5;
    // Billboard health bar toward camera (always face up)
    this.healthBarGroup.rotation.y = -angle;
  }

  deactivate() {
    this.active = false;
    this.state = EnemyState.DEAD;
    this.mesh.visible = false;
    this.body.velocity.set(0, 0, 0);
  }
}
