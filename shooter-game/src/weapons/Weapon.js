import * as THREE from 'three';
import { lerp } from '../utils/MathUtils.js';

export class Weapon {
  constructor(config) {
    this.name = config.name;
    this.damage = config.damage;
    this.fireRate = config.fireRate;
    this.maxAmmo = config.maxAmmo;
    this.magSize = config.magSize;
    this.reloadTime = config.reloadTime;
    this.spread = config.spread;
    this.baseSpread = config.spread;
    this.spreadIncrease = config.spreadIncrease || 0;
    this.maxSpread = config.maxSpread || config.spread;
    this.auto = config.auto || false;
    this.recoil = config.recoil || 0;
    this.pellets = config.pellets || 1;

    this.currentAmmo = config.magSize === Infinity ? Infinity : config.magSize;
    this.reserveAmmo = config.ammo === Infinity ? Infinity : config.ammo;
    this.cooldownTimer = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.currentSpread = config.spread;
    this.hasFiredThisPress = false;

    // Viewmodel
    this.mesh = this._createMesh(config.color);
    this.mesh.visible = false;
    this.baseMeshPos = new THREE.Vector3(0.35, -0.3, -0.6);
    this.mesh.position.copy(this.baseMeshPos);

    // Sway
    this.swayOffset = new THREE.Vector3();
    this.targetSwayOffset = new THREE.Vector3();
  }

  _createMesh(color) {
    const group = new THREE.Group();

    // Main body
    const bodyGeom = new THREE.BoxGeometry(0.08, 0.09, 0.45);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a3e,
      roughness: 0.3,
      metalness: 0.7,
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    group.add(body);

    // Top rail
    const railGeom = new THREE.BoxGeometry(0.04, 0.02, 0.3);
    const railMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.2, metalness: 0.8 });
    const rail = new THREE.Mesh(railGeom, railMat);
    rail.position.set(0, 0.055, -0.05);
    group.add(rail);

    // Grip
    const gripGeom = new THREE.BoxGeometry(0.06, 0.13, 0.06);
    const gripMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8, metalness: 0.1 });
    const grip = new THREE.Mesh(gripGeom, gripMat);
    grip.position.set(0, -0.1, 0.08);
    group.add(grip);

    // Barrel
    const barrelGeom = new THREE.CylinderGeometry(0.018, 0.022, 0.22, 8);
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0x444455, roughness: 0.2, metalness: 0.9 });
    const barrel = new THREE.Mesh(barrelGeom, barrelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.32);
    group.add(barrel);

    // Accent line (weapon color)
    const accentGeom = new THREE.BoxGeometry(0.085, 0.015, 0.2);
    const accentMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });
    const accent = new THREE.Mesh(accentGeom, accentMat);
    accent.position.set(0, -0.035, 0);
    group.add(accent);

    // Muzzle tip glow
    const muzzleGeom = new THREE.CylinderGeometry(0.01, 0.02, 0.03, 6);
    const muzzleMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 1.5,
      roughness: 0.1,
    });
    const muzzle = new THREE.Mesh(muzzleGeom, muzzleMat);
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(0, 0.02, -0.44);
    group.add(muzzle);

    return group;
  }

  canFire() {
    return this.cooldownTimer <= 0 && !this.reloading &&
      (this.currentAmmo > 0 || this.currentAmmo === Infinity);
  }

  fire() {
    if (!this.canFire()) return false;
    if (this.currentAmmo !== Infinity) this.currentAmmo--;
    this.cooldownTimer = this.fireRate;
    this.currentSpread = Math.min(this.currentSpread + this.spreadIncrease, this.maxSpread);

    // Viewmodel kick
    this.mesh.position.z = this.baseMeshPos.z + 0.05;

    return true;
  }

  reload() {
    if (this.reloading || this.currentAmmo === this.magSize ||
      this.reserveAmmo === 0 || this.magSize === Infinity) return;
    this.reloading = true;
    this.reloadTimer = this.reloadTime;
  }

  addAmmo(amount) {
    if (this.reserveAmmo === Infinity) return;
    this.reserveAmmo = Math.min(this.reserveAmmo + amount, this.maxAmmo);
  }

  update(dt, mouseDX, mouseDY) {
    // Cooldown
    if (this.cooldownTimer > 0) this.cooldownTimer -= dt;

    // Reload
    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        const needed = this.magSize - this.currentAmmo;
        if (this.reserveAmmo === Infinity) {
          this.currentAmmo = this.magSize;
        } else {
          const toLoad = Math.min(needed, this.reserveAmmo);
          this.currentAmmo += toLoad;
          this.reserveAmmo -= toLoad;
        }
        this.reloading = false;
      }
    }

    // Spread recovery
    if (this.spreadIncrease > 0) {
      this.currentSpread = lerp(this.currentSpread, this.baseSpread, dt * 5);
    }

    // Viewmodel recovery
    this.mesh.position.z = lerp(this.mesh.position.z, this.baseMeshPos.z, dt * 15);
    this.mesh.position.y = lerp(this.mesh.position.y, this.baseMeshPos.y + (this.reloading ? -0.1 : 0), dt * 8);

    // Sway
    this.targetSwayOffset.x = -(mouseDX || 0) * 0.0002;
    this.targetSwayOffset.y = -(mouseDY || 0) * 0.0002;
    this.swayOffset.lerp(this.targetSwayOffset, dt * 8);
    this.mesh.position.x = this.baseMeshPos.x + this.swayOffset.x;
  }

  equip() {
    this.mesh.visible = true;
    this.mesh.position.set(this.baseMeshPos.x, this.baseMeshPos.y - 0.3, this.baseMeshPos.z);
  }

  holster() {
    this.mesh.visible = false;
  }

  reset() {
    this.currentAmmo = this.magSize === Infinity ? Infinity : this.magSize;
    this.reserveAmmo = this.maxAmmo === Infinity ? Infinity : this.maxAmmo;
    this.cooldownTimer = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.currentSpread = this.baseSpread;
  }
}
