import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ARENA } from '../utils/Constants.js';
import { randomRange } from '../utils/MathUtils.js';

export class Arena {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.world = physicsWorld;
    this.coverObjects = [];
    this.coverBodies = [];

    this._createGround();
    this._createWalls();
    this._createCover();
    this._createFloorDetails();
  }

  _createGround() {
    // Dark tech-grid floor
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    // Dark base
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 512, 512);
    // Subtle grid
    ctx.strokeStyle = '#2a2a4e';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 512; i += 32) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }
    // Bright accent lines
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.15)';
    ctx.lineWidth = 2;
    for (let i = 0; i <= 512; i += 128) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }
    // Center glow dot at intersections
    ctx.fillStyle = 'rgba(0, 200, 255, 0.3)';
    for (let x = 0; x <= 512; x += 128) {
      for (let y = 0; y <= 512; y += 128) {
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(ARENA.SIZE / 4, ARENA.SIZE / 4);

    const groundGeom = new THREE.PlaneGeometry(ARENA.SIZE, ARENA.SIZE);
    const groundMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.15,
    });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Physics ground
    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(groundBody);
    this.groundBody = groundBody;
  }

  _createWalls() {
    const half = ARENA.SIZE / 2;
    const h = ARENA.WALL_HEIGHT;

    // Neon-accented dark walls
    const neonColors = [0xff2255, 0x00ccff, 0x22ff88, 0xffaa00];
    const positions = [
      { x: 0, z: -half, ry: 0 },
      { x: 0, z: half, ry: Math.PI },
      { x: -half, z: 0, ry: Math.PI / 2 },
      { x: half, z: 0, ry: -Math.PI / 2 },
    ];

    for (let idx = 0; idx < positions.length; idx++) {
      const pos = positions[idx];

      // Main wall body (dark)
      const geom = new THREE.BoxGeometry(ARENA.SIZE, h, 1);
      const wallMat = new THREE.MeshStandardMaterial({
        color: 0x16213e,
        roughness: 0.7,
        metalness: 0.3,
      });
      const wall = new THREE.Mesh(geom, wallMat);
      wall.position.set(pos.x, h / 2, pos.z);
      wall.rotation.y = pos.ry;
      wall.receiveShadow = true;
      this.scene.add(wall);

      // Neon trim at base
      const trimGeom = new THREE.BoxGeometry(ARENA.SIZE, 0.15, 1.05);
      const trimMat = new THREE.MeshStandardMaterial({
        color: neonColors[idx],
        emissive: neonColors[idx],
        emissiveIntensity: 2,
        roughness: 0.2,
      });
      const trim = new THREE.Mesh(trimGeom, trimMat);
      trim.position.set(pos.x, 0.08, pos.z);
      trim.rotation.y = pos.ry;
      this.scene.add(trim);

      // Top neon trim
      const topTrim = trim.clone();
      topTrim.position.y = h;
      this.scene.add(topTrim);

      // Mid accent line
      const midTrim = new THREE.Mesh(
        new THREE.BoxGeometry(ARENA.SIZE, 0.06, 1.03),
        new THREE.MeshStandardMaterial({
          color: neonColors[idx],
          emissive: neonColors[idx],
          emissiveIntensity: 0.8,
          roughness: 0.2,
        })
      );
      midTrim.position.set(pos.x, h * 0.4, pos.z);
      midTrim.rotation.y = pos.ry;
      this.scene.add(midTrim);

      const wallBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(ARENA.SIZE / 2, h / 2, 0.5)),
      });
      wallBody.position.set(pos.x, h / 2, pos.z);
      wallBody.quaternion.setFromEuler(0, pos.ry, 0);
      this.world.addBody(wallBody);
    }
  }

  _createCover() {
    const half = ARENA.SIZE / 2 - 5;
    const coverTypes = [
      { w: 3, h: 2.5, d: 0.5, name: 'wall' },
      { w: 1, h: 3, d: 1, name: 'pillar' },
      { w: 1.5, h: 1.2, d: 1.5, name: 'crate' },
      { w: 2, h: 1.8, d: 2, name: 'block' },
      { w: 0.6, h: 4, d: 0.6, name: 'column' },
    ];

    const coverNeonColors = [
      0xff2255, 0x00ccff, 0x22ff88, 0xffaa00, 0xaa44ff,
      0xff6600, 0x00ffaa, 0xff44aa, 0x44aaff, 0xaaff44,
    ];

    for (let i = 0; i < ARENA.COVER_COUNT; i++) {
      const type = coverTypes[i % coverTypes.length];
      let x, z;
      do {
        x = randomRange(-half, half);
        z = randomRange(-half, half);
      } while (Math.abs(x) < 5 && Math.abs(z) < 5);

      const geom = new THREE.BoxGeometry(type.w, type.h, type.d);
      const neon = coverNeonColors[i % coverNeonColors.length];

      // Dark body with subtle edge glow
      const mat = new THREE.MeshStandardMaterial({
        color: 0x1a1a3e,
        roughness: 0.6,
        metalness: 0.4,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(x, type.h / 2, z);
      mesh.rotation.y = randomRange(0, Math.PI * 2);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.isCover = true;
      this.scene.add(mesh);
      this.coverObjects.push(mesh);

      // Neon edge accent on top
      const edgeGeom = new THREE.BoxGeometry(type.w + 0.05, 0.06, type.d + 0.05);
      const edgeMat = new THREE.MeshStandardMaterial({
        color: neon,
        emissive: neon,
        emissiveIntensity: 1.5,
        roughness: 0.2,
      });
      const edge = new THREE.Mesh(edgeGeom, edgeMat);
      edge.position.set(x, type.h, z);
      edge.rotation.y = mesh.rotation.y;
      this.scene.add(edge);

      const body = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(type.w / 2, type.h / 2, type.d / 2)),
      });
      body.position.set(x, type.h / 2, z);
      body.quaternion.copy(mesh.quaternion);
      this.world.addBody(body);
      this.coverBodies.push(body);
    }
  }

  _createFloorDetails() {
    // Subtle floor glow rings around arena center
    const ringGeom = new THREE.RingGeometry(4.8, 5, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ccff,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    this.scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(9.8, 10, 64),
      new THREE.MeshBasicMaterial({ color: 0xff2255, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
    );
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = 0.01;
    this.scene.add(ring2);
  }
}
