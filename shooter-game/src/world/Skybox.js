import * as THREE from 'three';

export class Skybox {
  constructor(scene) {
    // Dark cyberpunk sky
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#000011');
    gradient.addColorStop(0.15, '#0a0a2e');
    gradient.addColorStop(0.3, '#16213e');
    gradient.addColorStop(0.5, '#1a1a3e');
    gradient.addColorStop(0.7, '#0f3460');
    gradient.addColorStop(0.85, '#16213e');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 2, 512);

    const texture = new THREE.CanvasTexture(canvas);
    const skyGeom = new THREE.SphereGeometry(100, 16, 16);
    const skyMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const sky = new THREE.Mesh(skyGeom, skyMat);
    scene.add(sky);
  }
}
