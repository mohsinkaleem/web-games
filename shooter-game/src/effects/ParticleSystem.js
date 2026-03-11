import * as THREE from 'three';
import { EFFECTS } from '../utils/Constants.js';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.maxParticles = EFFECTS.PARTICLE_COUNT;

    // Use InstancedMesh for GPU-efficient particles
    const geom = new THREE.SphereGeometry(0.03, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.instancedMesh = new THREE.InstancedMesh(geom, mat, this.maxParticles);
    this.instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.instancedMesh.frustumCulled = false;
    scene.add(this.instancedMesh);

    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        active: false,
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 0,
        color: new THREE.Color(),
        scale: 1,
        gravity: true,
      });
    }

    this.dummy = new THREE.Object3D();
    this.colorAttr = new THREE.InstancedBufferAttribute(
      new Float32Array(this.maxParticles * 3), 3
    );
    this.instancedMesh.instanceColor = this.colorAttr;
  }

  emit(position, count, options = {}) {
    const {
      color = 0xff8800,
      speed = 5,
      life = 0.5,
      spread = 1,
      gravity = true,
      scale = 1,
      direction = null,
    } = options;

    let spawned = 0;
    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (p.active) continue;

      p.active = true;
      p.position.copy(position);
      p.life = life + Math.random() * life * 0.5;
      p.maxLife = p.life;
      p.color.setHex(color);
      p.scale = scale;
      p.gravity = gravity;

      if (direction) {
        p.velocity.copy(direction).multiplyScalar(speed);
        p.velocity.x += (Math.random() - 0.5) * spread * speed;
        p.velocity.y += (Math.random() - 0.5) * spread * speed;
        p.velocity.z += (Math.random() - 0.5) * spread * speed;
      } else {
        p.velocity.set(
          (Math.random() - 0.5) * speed * spread,
          Math.random() * speed,
          (Math.random() - 0.5) * speed * spread
        );
      }
      spawned++;
    }
  }

  update(dt) {
    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (!p.active) {
        this.dummy.scale.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
        continue;
      }

      p.life -= dt;
      if (p.life <= 0) {
        p.active = false;
        this.dummy.scale.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
        continue;
      }

      // Physics
      if (p.gravity) p.velocity.y -= 15 * dt;
      p.position.addScaledVector(p.velocity, dt);

      // Fade + shrink
      const lifeRatio = p.life / p.maxLife;
      const s = p.scale * lifeRatio;
      this.dummy.position.copy(p.position);
      this.dummy.scale.set(s, s, s);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);

      // Color
      this.colorAttr.setXYZ(i, p.color.r, p.color.g, p.color.b);
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
  }

  reset() {
    for (const p of this.particles) {
      p.active = false;
    }
  }
}
