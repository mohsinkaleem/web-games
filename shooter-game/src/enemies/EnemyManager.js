import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ObjectPool } from '../utils/ObjectPool.js';
import { Grunt, Shooter, Tank, Exploder, Teleporter } from './EnemyTypes.js';
import { ARENA } from '../utils/Constants.js';
import { randomRange } from '../utils/MathUtils.js';

export class EnemyManager {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.world = physicsWorld;
    this.enemies = []; // all active enemies
    this.enemyMeshes = []; // for raycasting

    // Separate pools for each type
    this.pools = {
      grunt: new ObjectPool(
        () => this._createEnemy('grunt'),
        (e) => this._resetEnemy(e),
        20
      ),
      shooter: new ObjectPool(
        () => this._createEnemy('shooter'),
        (e) => this._resetEnemy(e),
        10
      ),
      tank: new ObjectPool(
        () => this._createEnemy('tank'),
        (e) => this._resetEnemy(e),
        5
      ),
      exploder: new ObjectPool(
        () => this._createEnemy('exploder'),
        (e) => this._resetEnemy(e),
        15
      ),
      teleporter: new ObjectPool(
        () => this._createEnemy('teleporter'),
        (e) => this._resetEnemy(e),
        8
      ),
    };
  }

  _createEnemy(type) {
    let enemy;
    switch (type) {
      case 'grunt': enemy = new Grunt(); break;
      case 'shooter': enemy = new Shooter(); break;
      case 'tank': enemy = new Tank(); break;
      case 'exploder': enemy = new Exploder(); break;
      case 'teleporter': enemy = new Teleporter(); break;
    }
    this.scene.add(enemy.mesh);
    enemy.mesh.visible = false;
    this.world.addBody(enemy.body);
    enemy.body.sleep();
    return enemy;
  }

  _resetEnemy(enemy) {
    enemy.deactivate();
    enemy.body.sleep();
    enemy.body.position.set(0, -10, 0);
  }

  spawn(type, healthScale = 1, damageScale = 1) {
    const enemy = this.pools[type].get();
    const pos = this._getSpawnPosition();
    enemy.activate(pos, healthScale, damageScale);
    enemy.body.wakeUp();
    this.enemies.push(enemy);
    this.enemyMeshes.push(enemy.mesh);
    return enemy;
  }

  _getSpawnPosition() {
    const half = ARENA.SIZE / 2 - 2;
    const side = Math.floor(Math.random() * 4);
    let x, z;
    switch (side) {
      case 0: x = randomRange(-half, half); z = -half; break;
      case 1: x = randomRange(-half, half); z = half; break;
      case 2: x = -half; z = randomRange(-half, half); break;
      case 3: x = half; z = randomRange(-half, half); break;
    }
    return { x, z };
  }

  update(dt, playerPosition) {
    const attackResults = [];
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      const result = enemy.update(dt, playerPosition);
      if (result) attackResults.push(result);

      if (!enemy.active) {
        // Remove from active list
        this.enemies.splice(i, 1);
        const meshIdx = this.enemyMeshes.indexOf(enemy.mesh);
        if (meshIdx !== -1) this.enemyMeshes.splice(meshIdx, 1);

        // Return to pool
        const type = enemy.name.toLowerCase();
        this.pools[type].release(enemy);
      }
    }
    return attackResults;
  }

  getActiveCount() {
    return this.enemies.length;
  }

  getEnemyMeshes() {
    return this.enemyMeshes;
  }

  getEnemies() {
    return this.enemies;
  }

  findEnemyByMesh(mesh) {
    // Walk up to parent to find the enemy mesh
    let obj = mesh;
    while (obj) {
      if (obj.userData && obj.userData.enemy) return obj.userData.enemy;
      obj = obj.parent;
    }
    return null;
  }

  reset() {
    for (const enemy of [...this.enemies]) {
      enemy.deactivate();
      const type = enemy.name.toLowerCase();
      const idx = this.enemies.indexOf(enemy);
      if (idx !== -1) this.enemies.splice(idx, 1);
      const meshIdx = this.enemyMeshes.indexOf(enemy.mesh);
      if (meshIdx !== -1) this.enemyMeshes.splice(meshIdx, 1);
      this.pools[type].release(enemy);
    }
    this.enemies = [];
    this.enemyMeshes = [];
  }
}
