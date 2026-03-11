import * as THREE from 'three';
import { DANGER_ZONES, ARENA } from '../utils/Constants.js';
import { randomRange } from '../utils/MathUtils.js';

export class DangerZoneManager {
  constructor(scene) {
    this.scene = scene;
    this.zones = [];
    this.spawnTimer = DANGER_ZONES.INTERVAL;
    this.currentWave = 0;
  }

  setWave(wave) {
    this.currentWave = wave;
  }

  update(dt, playerPosition) {
    if (this.currentWave < DANGER_ZONES.MIN_WAVE) return null;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = DANGER_ZONES.INTERVAL - Math.min(this.currentWave * 0.3, 4);
      this._spawnZone(playerPosition);
    }

    let damage = 0;
    for (let i = this.zones.length - 1; i >= 0; i--) {
      const zone = this.zones[i];
      zone.timer -= dt;

      if (zone.phase === 'warning') {
        // Pulsing warning ring
        const t = 1 - zone.timer / DANGER_ZONES.WARNING_TIME;
        zone.ring.material.opacity = 0.15 + Math.sin(t * 20) * 0.1;
        zone.ring.scale.setScalar(1 + Math.sin(t * 10) * 0.03);

        if (zone.timer <= 0) {
          zone.phase = 'active';
          zone.timer = DANGER_ZONES.ACTIVE_TIME;
          zone.ring.material.color.setHex(0xff2200);
          zone.ring.material.emissive.setHex(0xff2200);
          zone.ring.material.emissiveIntensity = 2;
          zone.ring.material.opacity = 0.5;
          zone.light.intensity = 8;
          zone.light.color.setHex(0xff2200);
        }
      } else if (zone.phase === 'active') {
        zone.ring.material.opacity = 0.5 * (zone.timer / DANGER_ZONES.ACTIVE_TIME);
        zone.light.intensity = 8 * (zone.timer / DANGER_ZONES.ACTIVE_TIME);

        // Check player damage
        if (!zone.damaged) {
          const dx = playerPosition.x - zone.position.x;
          const dz = playerPosition.z - zone.position.z;
          if (Math.sqrt(dx * dx + dz * dz) < DANGER_ZONES.RADIUS) {
            damage += DANGER_ZONES.DAMAGE;
            zone.damaged = true;
          }
        }

        if (zone.timer <= 0) {
          this.scene.remove(zone.ring);
          this.scene.remove(zone.light);
          zone.ring.geometry.dispose();
          zone.ring.material.dispose();
          this.zones.splice(i, 1);
        }
      }
    }

    return damage > 0 ? damage : null;
  }

  _spawnZone(playerPosition) {
    const half = ARENA.SIZE / 2 - 5;
    // Spawn near but not on top of player
    let x, z;
    do {
      x = randomRange(-half, half);
      z = randomRange(-half, half);
    } while (
      Math.sqrt((x - playerPosition.x) ** 2 + (z - playerPosition.z) ** 2) < 5 ||
      Math.sqrt((x - playerPosition.x) ** 2 + (z - playerPosition.z) ** 2) > 20
    );

    const geom = new THREE.RingGeometry(DANGER_ZONES.RADIUS - 0.3, DANGER_ZONES.RADIUS, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: 0xff4400,
      emissiveIntensity: 1,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(geom, mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.05, z);
    this.scene.add(ring);

    const light = new THREE.PointLight(0xff6600, 2, DANGER_ZONES.RADIUS * 2);
    light.position.set(x, 1, z);
    this.scene.add(light);

    this.zones.push({
      position: { x, z },
      ring,
      light,
      phase: 'warning',
      timer: DANGER_ZONES.WARNING_TIME,
      damaged: false,
    });
  }

  reset() {
    for (const zone of this.zones) {
      this.scene.remove(zone.ring);
      this.scene.remove(zone.light);
      zone.ring.geometry.dispose();
      zone.ring.material.dispose();
    }
    this.zones = [];
    this.spawnTimer = DANGER_ZONES.INTERVAL;
    this.currentWave = 0;
  }
}
