import * as THREE from 'three';
import { Pistol, Shotgun, AssaultRifle, RocketLauncher } from './WeaponTypes.js';

export class WeaponManager {
  constructor(camera, scene) {
    this.camera = camera;
    this.scene = scene;

    // Weapon container attached to camera
    this.container = new THREE.Group();
    camera.three.add(this.container);

    this.weapons = [
      new Pistol(),
      new Shotgun(),
      new AssaultRifle(),
      new RocketLauncher(),
    ];

    for (const weapon of this.weapons) {
      this.container.add(weapon.mesh);
    }

    this.currentIndex = 0;
    this.weapons[0].equip();

    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 100;
  }

  get current() {
    return this.weapons[this.currentIndex];
  }

  switchTo(index) {
    if (index < 0 || index >= this.weapons.length || index === this.currentIndex) return;
    this.weapons[this.currentIndex].holster();
    this.currentIndex = index;
    this.weapons[this.currentIndex].equip();
  }

  handleInput(input) {
    // Number keys
    if (input.isKeyDown('Digit1')) this.switchTo(0);
    if (input.isKeyDown('Digit2')) this.switchTo(1);
    if (input.isKeyDown('Digit3')) this.switchTo(2);
    if (input.isKeyDown('Digit4')) this.switchTo(3);

    // Scroll wheel
    if (input.scrollDelta !== 0) {
      let next = this.currentIndex + Math.sign(input.scrollDelta);
      if (next < 0) next = this.weapons.length - 1;
      if (next >= this.weapons.length) next = 0;
      this.switchTo(next);
    }

    // Reload
    if (input.isKeyDown('KeyR')) {
      this.current.reload();
    }
  }

  fire(enemyMeshes, callback) {
    const weapon = this.current;
    if (!weapon.fire()) return null;

    const results = [];
    const origin = new THREE.Vector3();
    this.camera.three.getWorldPosition(origin);
    const forward = new THREE.Vector3();
    this.camera.three.getWorldDirection(forward);

    if (weapon.type === 'hitscan') {
      const pelletCount = weapon.pellets || 1;
      for (let i = 0; i < pelletCount; i++) {
        const dir = forward.clone();
        // Add spread
        dir.x += (Math.random() - 0.5) * weapon.currentSpread;
        dir.y += (Math.random() - 0.5) * weapon.currentSpread;
        dir.z += (Math.random() - 0.5) * weapon.currentSpread;
        dir.normalize();

        this.raycaster.set(origin, dir);
        const hits = this.raycaster.intersectObjects(enemyMeshes, true);
        if (hits.length > 0) {
          results.push({
            type: 'hit',
            point: hits[0].point,
            object: hits[0].object,
            distance: hits[0].distance,
            direction: dir,
            damage: weapon.damage,
            isHeadshot: false, // calculated by collision manager
          });
        } else {
          // Hit world
          const worldHits = this.raycaster.intersectObjects(this.scene.children, true);
          if (worldHits.length > 0) {
            results.push({
              type: 'world',
              point: worldHits[0].point,
              direction: dir,
            });
          } else {
            results.push({
              type: 'miss',
              direction: dir,
              endPoint: origin.clone().add(dir.multiplyScalar(100)),
            });
          }
        }
      }
    } else if (weapon.type === 'projectile') {
      results.push({
        type: 'projectile',
        origin: origin.clone(),
        direction: forward.clone(),
        speed: weapon.projectileSpeed,
        damage: weapon.damage,
        splashDamage: weapon.splashDamage,
        splashRadius: weapon.splashRadius,
      });
    }

    // Recoil
    this.camera.addRecoil(weapon.recoil);

    return results;
  }

  update(dt, mouseDX, mouseDY) {
    this.current.update(dt, mouseDX, mouseDY);
  }

  reset() {
    for (const w of this.weapons) w.reset();
    this.weapons[this.currentIndex].holster();
    this.currentIndex = 0;
    this.weapons[0].equip();
  }
}
