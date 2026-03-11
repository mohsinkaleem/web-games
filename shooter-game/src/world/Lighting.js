import * as THREE from 'three';
import { ARENA } from '../utils/Constants.js';

export class Lighting {
  constructor(scene) {
    this.scene = scene;

    // Dark atmospheric fog
    scene.fog = new THREE.FogExp2(ARENA.FOG_COLOR, 0.012);
    scene.background = new THREE.Color(ARENA.FOG_COLOR);

    // Dim ambient for dark atmosphere
    const ambient = new THREE.AmbientLight(0x1a1a3e, 0.4);
    scene.add(ambient);

    // Hemisphere — cool sky / dark ground
    const hemi = new THREE.HemisphereLight(0x2244aa, 0x111122, 0.5);
    scene.add(hemi);

    // Directional (cold moonlight)
    const dir = new THREE.DirectionalLight(0x8899cc, 0.8);
    dir.position.set(10, 25, 10);
    dir.castShadow = true;
    dir.shadow.mapSize.width = 2048;
    dir.shadow.mapSize.height = 2048;
    dir.shadow.camera.near = 1;
    dir.shadow.camera.far = 60;
    dir.shadow.camera.left = -30;
    dir.shadow.camera.right = 30;
    dir.shadow.camera.top = 30;
    dir.shadow.camera.bottom = -30;
    dir.shadow.bias = -0.001;
    scene.add(dir);

    // Neon colored point lights at corners
    const colors = [0xff2255, 0x00ccff, 0x22ff88, 0xffaa00];
    const half = ARENA.SIZE / 2 - 5;
    const positions = [
      [-half, 6, -half],
      [half, 6, -half],
      [-half, 6, half],
      [half, 6, half],
    ];
    for (let i = 0; i < 4; i++) {
      const light = new THREE.PointLight(colors[i], 3, 45);
      light.position.set(...positions[i]);
      scene.add(light);
    }

    // Center arena spotlight
    const centerSpot = new THREE.SpotLight(0x4488ff, 2, 40, Math.PI / 4, 0.5, 1);
    centerSpot.position.set(0, 15, 0);
    centerSpot.target.position.set(0, 0, 0);
    scene.add(centerSpot);
    scene.add(centerSpot.target);

    // Secondary accent lights at mid-walls
    const midColors = [0xaa00ff, 0xff6600, 0x00ff88, 0xff0066];
    const midPositions = [
      [0, 4, -half + 2],
      [0, 4, half - 2],
      [-half + 2, 4, 0],
      [half - 2, 4, 0],
    ];
    for (let i = 0; i < 4; i++) {
      const light = new THREE.PointLight(midColors[i], 1.5, 25);
      light.position.set(...midPositions[i]);
      scene.add(light);
    }
  }
}
