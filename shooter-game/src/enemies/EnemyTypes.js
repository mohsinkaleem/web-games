import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy.js';
import { ENEMIES } from '../utils/Constants.js';
import { distance2D, randomRange } from '../utils/MathUtils.js';

export class Grunt extends Enemy {
  constructor() {
    super(ENEMIES.GRUNT);
    this.leapCooldown = 0;
  }

  update(dt, playerPosition) {
    super.update(dt, playerPosition);
    if (!this.active || this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return;
    if (this.spawnTimer > 0) return;

    const dist = distance2D(this.body.position, playerPosition);
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;

    // Add slight random offset to avoid clumping
    const offsetX = (Math.random() - 0.5) * 2;
    const offsetZ = (Math.random() - 0.5) * 2;

    // Leap attack — close the gap quickly when at medium range
    if (this.leapCooldown > 0) this.leapCooldown -= dt;
    if (dist > 4 && dist < 10 && this.leapCooldown <= 0) {
      this.leapCooldown = randomRange(3, 6);
      this.body.velocity.x = (dirX / len) * this.speed * 2.5;
      this.body.velocity.z = (dirZ / len) * this.speed * 2.5;
      this.body.velocity.y = 5; // Small hop
    } else {
      // Rush toward player
      this.body.velocity.x = ((dirX / len) + offsetX * 0.1) * this.speed;
      this.body.velocity.z = ((dirZ / len) + offsetZ * 0.1) * this.speed;
    }

    // Attack
    if (dist < ENEMIES.GRUNT.attackRange && this.attackCooldown <= 0) {
      this.state = EnemyState.ATTACK;
      this.attackCooldown = ENEMIES.GRUNT.attackCooldown;
      return { type: 'melee', damage: this.damage * this.damageScale };
    }

    this.state = EnemyState.CHASE;
    return null;
  }
}

export class Shooter extends Enemy {
  constructor() {
    super(ENEMIES.SHOOTER);
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 0;
  }

  update(dt, playerPosition) {
    super.update(dt, playerPosition);
    if (!this.active || this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return;
    if (this.spawnTimer > 0) return;

    const dist = distance2D(this.body.position, playerPosition);
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;
    const nx = dirX / len;
    const nz = dirZ / len;

    // Strafe
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeDir *= -1;
      this.strafeTimer = randomRange(1, 3);
    }

    // Maintain preferred range
    if (dist > ENEMIES.SHOOTER.preferredRange + 3) {
      this.body.velocity.x = nx * this.speed;
      this.body.velocity.z = nz * this.speed;
    } else if (dist < ENEMIES.SHOOTER.preferredRange - 3) {
      this.body.velocity.x = -nx * this.speed * 0.5;
      this.body.velocity.z = -nz * this.speed * 0.5;
    } else {
      // Strafe
      this.body.velocity.x = -nz * this.strafeDir * this.speed * 0.7;
      this.body.velocity.z = nx * this.strafeDir * this.speed * 0.7;
    }

    // Attack — fire projectile
    if (this.attackCooldown <= 0 && dist < ENEMIES.SHOOTER.attackRange) {
      this.state = EnemyState.ATTACK;
      this.attackCooldown = ENEMIES.SHOOTER.attackCooldown;
      const dy = (playerPosition.y - this.body.position.y);
      const dirLen3D = Math.sqrt(dirX * dirX + dy * dy + dirZ * dirZ) || 1;
      return {
        type: 'projectile',
        origin: new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z),
        direction: new THREE.Vector3(dirX / dirLen3D, dy / dirLen3D, dirZ / dirLen3D),
        speed: ENEMIES.SHOOTER.projectileSpeed,
        damage: this.damage * this.damageScale,
      };
    }

    this.state = EnemyState.CHASE;
    return null;
  }
}

export class Tank extends Enemy {
  constructor() {
    super(ENEMIES.TANK);
    this.isCharging = false;
    this.chargeTimer = 0;
    this.telegraphTimer = 0;
  }

  update(dt, playerPosition) {
    super.update(dt, playerPosition);
    if (!this.active || this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return;
    if (this.spawnTimer > 0) return;

    const dist = distance2D(this.body.position, playerPosition);
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;
    const nx = dirX / len;
    const nz = dirZ / len;

    // Charge telegraphing
    if (this.telegraphTimer > 0) {
      this.telegraphTimer -= dt;
      this.mesh.material.emissiveIntensity = 1 + Math.sin(this.telegraphTimer * 20) * 0.5;
      this.body.velocity.x *= 0.9;
      this.body.velocity.z *= 0.9;
      if (this.telegraphTimer <= 0) {
        this.isCharging = true;
        this.chargeTimer = 1.0;
        this.chargeDirection = { x: nx, z: nz };
      }
      return null;
    }

    // Charging
    if (this.isCharging) {
      this.chargeTimer -= dt;
      this.body.velocity.x = this.chargeDirection.x * ENEMIES.TANK.chargeSpeed;
      this.body.velocity.z = this.chargeDirection.z * ENEMIES.TANK.chargeSpeed;
      
      if (this.chargeTimer <= 0 || dist < ENEMIES.TANK.chargeDistance) {
        this.isCharging = false;
        this.attackCooldown = ENEMIES.TANK.chargeCooldown;
        this.mesh.material.emissiveIntensity = 0.5;
        if (dist < ENEMIES.TANK.chargeDistance) {
          return { type: 'melee', damage: this.damage * this.damageScale };
        }
      }
      return null;
    }

    // Normal movement — slow approach
    this.body.velocity.x = nx * this.speed;
    this.body.velocity.z = nz * this.speed;

    // Start charge telegraph
    if (dist < ENEMIES.TANK.attackRange && this.attackCooldown <= 0) {
      this.telegraphTimer = 0.8;
      this.state = EnemyState.ATTACK;
      return null;
    }

    // Contact damage
    if (dist < ENEMIES.TANK.chargeDistance) {
      if (this.attackCooldown <= 0) {
        this.attackCooldown = 1.5;
        return { type: 'melee', damage: this.damage * this.damageScale * 0.5 };
      }
    }

    this.state = EnemyState.CHASE;
    return null;
  }
}

export class Exploder extends Enemy {
  constructor() {
    super(ENEMIES.EXPLODER);
    this.pulseTime = 0;
  }

  update(dt, playerPosition) {
    super.update(dt, playerPosition);
    if (!this.active || this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return;
    if (this.spawnTimer > 0) return;

    const dist = distance2D(this.body.position, playerPosition);
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;

    // Pulsing glow that speeds up as it gets closer
    this.pulseTime += dt * (3 + (1 - Math.min(dist / 15, 1)) * 15);
    this.mesh.material.emissiveIntensity = 0.8 + Math.sin(this.pulseTime) * 0.6;
    const s = 1 + Math.sin(this.pulseTime) * 0.08;
    if (this.spawnTimer <= 0) this.mesh.scale.set(s, s, s);

    // Rush toward player (faster than grunt)
    this.body.velocity.x = (dirX / len) * this.speed;
    this.body.velocity.z = (dirZ / len) * this.speed;

    // Explode on contact
    if (dist < ENEMIES.EXPLODER.attackRange) {
      this.die();
      return {
        type: 'explosion',
        position: new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z),
        damage: this.damage * this.damageScale,
        radius: ENEMIES.EXPLODER.explosionRadius,
      };
    }

    this.state = EnemyState.CHASE;
    return null;
  }
}

export class Teleporter extends Enemy {
  constructor() {
    super(ENEMIES.TELEPORTER);
    this.teleportCooldown = 2;
    this.flickerTimer = 0;
    this.isTeleporting = false;
    this.teleportPhase = 0;
  }

  update(dt, playerPosition) {
    super.update(dt, playerPosition);
    if (!this.active || this.state === EnemyState.DYING || this.state === EnemyState.DEAD) return;
    if (this.spawnTimer > 0) return;

    const dist = distance2D(this.body.position, playerPosition);
    const dirX = playerPosition.x - this.body.position.x;
    const dirZ = playerPosition.z - this.body.position.z;
    const len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;

    // Flicker effect
    this.flickerTimer += dt;
    this.mesh.material.opacity = 0.7 + Math.sin(this.flickerTimer * 8) * 0.3;

    // Teleport logic
    if (this.teleportCooldown > 0) this.teleportCooldown -= dt;

    if (this.isTeleporting) {
      this.teleportPhase -= dt;
      this.mesh.material.opacity = this.teleportPhase * 2;
      if (this.teleportPhase <= 0) {
        // Appear near player (behind them if possible)
        const angle = Math.atan2(dirX, dirZ) + Math.PI + (Math.random() - 0.5) * 1.5;
        const tpDist = randomRange(3, ENEMIES.TELEPORTER.teleportRange);
        this.body.position.x = playerPosition.x + Math.sin(angle) * tpDist;
        this.body.position.z = playerPosition.z + Math.cos(angle) * tpDist;
        // Clamp to arena
        const half = 28;
        this.body.position.x = Math.max(-half, Math.min(half, this.body.position.x));
        this.body.position.z = Math.max(-half, Math.min(half, this.body.position.z));
        this.isTeleporting = false;
        this.teleportCooldown = ENEMIES.TELEPORTER.teleportCooldown;
        this.mesh.material.opacity = 1;
      }
      return null;
    }

    // Teleport when at medium range
    if (dist > 6 && dist < 20 && this.teleportCooldown <= 0) {
      this.isTeleporting = true;
      this.teleportPhase = 0.4;
      this.body.velocity.set(0, 0, 0);
      return null;
    }

    // Move toward player
    this.body.velocity.x = (dirX / len) * this.speed;
    this.body.velocity.z = (dirZ / len) * this.speed;

    // Melee attack
    if (dist < ENEMIES.TELEPORTER.attackRange && this.attackCooldown <= 0) {
      this.state = EnemyState.ATTACK;
      this.attackCooldown = ENEMIES.TELEPORTER.attackCooldown;
      // Teleport away after attacking
      this.teleportCooldown = 0.5;
      return { type: 'melee', damage: this.damage * this.damageScale };
    }

    this.state = EnemyState.CHASE;
    return null;
  }
}
