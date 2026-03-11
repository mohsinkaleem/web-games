import * as THREE from 'three';
import { POWERUPS, PLAYER } from '../utils/Constants.js';
import { randomRange } from '../utils/MathUtils.js';

const PowerUpType = {
  HEALTH: 'health',
  AMMO: 'ammo',
  SPEED: 'speed',
  DAMAGE: 'damage',
  SHIELD: 'shield',
  TIMESLOW: 'timeslow',
};

const POWERUP_CONFIGS = {
  [PowerUpType.HEALTH]: { color: 0x22ff22, emissive: 0x004400, label: '+HP' },
  [PowerUpType.AMMO]: { color: 0xffff22, emissive: 0x444400, label: '+AMMO' },
  [PowerUpType.SPEED]: { color: 0x2288ff, emissive: 0x002244, label: 'SPEED' },
  [PowerUpType.DAMAGE]: { color: 0xff2222, emissive: 0x440000, label: 'DMG' },
  [PowerUpType.SHIELD]: { color: 0x44ffff, emissive: 0x004444, label: 'SHIELD' },
  [PowerUpType.TIMESLOW]: { color: 0xffaaff, emissive: 0x440044, label: 'SLOW-MO' },
};

class PowerUp {
  constructor(scene) {
    this.scene = scene;
    this.active = false;
    this.type = null;
    this.lifeTimer = 0;

    const geom = new THREE.BoxGeometry(POWERUPS.SIZE, POWERUPS.SIZE, POWERUPS.SIZE);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x444444,
      emissiveIntensity: 1,
      roughness: 0.3,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.castShadow = true;
    this.mesh.userData.isPowerUp = true;
    this.mesh.userData.powerup = this;
    this.mesh.visible = false;
    scene.add(this.mesh);

    this.baseY = POWERUPS.FLOAT_HEIGHT;
    this.time = 0;
  }

  activate(type, position) {
    this.type = type;
    this.active = true;
    this.lifeTimer = 15; // despawn after 15s
    this.time = Math.random() * Math.PI * 2;

    const config = POWERUP_CONFIGS[type];
    this.mesh.material.color.setHex(config.color);
    this.mesh.material.emissive.setHex(config.emissive);
    this.mesh.position.set(position.x, this.baseY, position.z);
    this.mesh.visible = true;
  }

  update(dt) {
    if (!this.active) return;
    this.time += dt;
    this.lifeTimer -= dt;

    // Bob and rotate
    this.mesh.position.y = this.baseY + Math.sin(this.time * POWERUPS.BOB_SPEED) * POWERUPS.BOB_AMOUNT;
    this.mesh.rotation.y += POWERUPS.ROTATE_SPEED * dt;

    // Flash before despawn
    if (this.lifeTimer < 3) {
      this.mesh.visible = Math.sin(this.lifeTimer * 10) > 0;
    }

    if (this.lifeTimer <= 0) {
      this.deactivate();
    }
  }

  deactivate() {
    this.active = false;
    this.mesh.visible = false;
  }
}

export class PowerUpManager {
  constructor(scene) {
    this.scene = scene;
    this.powerups = [];
    this.activePowerUps = [];
    this.weaponManager = null;

    // Pre-allocate pool
    for (let i = 0; i < 20; i++) {
      this.powerups.push(new PowerUp(scene));
    }

    // Active timed effects
    this.speedBoostTimer = 0;
    this.damageBoostTimer = 0;
    this.timeSlowTimer = 0;
    this.timeSlowFactor = 1;

    // Callbacks
    this.onCollect = null;
  }

  trySpawn(position) {
    if (Math.random() > POWERUPS.DROP_CHANCE) return;

    const types = Object.values(PowerUpType);
    const type = types[Math.floor(Math.random() * types.length)];

    const powerup = this.powerups.find(p => !p.active);
    if (!powerup) return;

    powerup.activate(type, position);
    this.activePowerUps.push(powerup);
  }

  setWeaponManager(wm) {
    this.weaponManager = wm;
  }

  collect(powerup, player, playerController) {
    if (!powerup.active) return;

    switch (powerup.type) {
      case PowerUpType.HEALTH:
        player.heal(POWERUPS.HEALTH_AMOUNT);
        break;
      case PowerUpType.AMMO:
        const weapon = this.weaponManager ? this.weaponManager.current : null;
        if (!weapon) break;
        weapon.addAmmo(weapon.magSize * 2);
        break;
      case PowerUpType.SPEED:
        this.speedBoostTimer = POWERUPS.SPEED_DURATION;
        playerController.speedMultiplier = POWERUPS.SPEED_MULTIPLIER;
        break;
      case PowerUpType.DAMAGE:
        this.damageBoostTimer = POWERUPS.DAMAGE_DURATION;
        player.damageMultiplier = POWERUPS.DAMAGE_MULTIPLIER;
        break;
      case PowerUpType.SHIELD:
        player.shield = (player.shield || 0) + POWERUPS.SHIELD_AMOUNT;
        break;
      case PowerUpType.TIMESLOW:
        this.timeSlowTimer = POWERUPS.TIMESLOW_DURATION;
        this.timeSlowFactor = POWERUPS.TIMESLOW_FACTOR;
        break;
    }

    powerup.deactivate();
    const idx = this.activePowerUps.indexOf(powerup);
    if (idx !== -1) this.activePowerUps.splice(idx, 1);

    if (this.onCollect) this.onCollect(powerup.type);
  }

  update(dt, playerPosition, player, playerController) {
    // Update active powerups
    for (let i = this.activePowerUps.length - 1; i >= 0; i--) {
      const p = this.activePowerUps[i];
      p.update(dt);
      if (!p.active) {
        this.activePowerUps.splice(i, 1);
        continue;
      }

      // Check collection (distance-based)
      const dx = p.mesh.position.x - playerPosition.x;
      const dz = p.mesh.position.z - playerPosition.z;
      if (dx * dx + dz * dz < 2.5) {
        this.collect(p, player, playerController);
      }
    }

    // Timed effects
    if (this.speedBoostTimer > 0) {
      this.speedBoostTimer -= dt;
      if (this.speedBoostTimer <= 0) {
        playerController.speedMultiplier = 1;
      }
    }
    if (this.damageBoostTimer > 0) {
      this.damageBoostTimer -= dt;
      if (this.damageBoostTimer <= 0) {
        player.damageMultiplier = 1;
      }
    }
    if (this.timeSlowTimer > 0) {
      this.timeSlowTimer -= dt;
      if (this.timeSlowTimer <= 0) {
        this.timeSlowFactor = 1;
      }
    }
  }

  reset() {
    for (const p of this.activePowerUps) {
      p.deactivate();
    }
    this.activePowerUps = [];
    this.speedBoostTimer = 0;
    this.damageBoostTimer = 0;
    this.timeSlowTimer = 0;
    this.timeSlowFactor = 1;
  }
}
