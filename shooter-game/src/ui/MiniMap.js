import { ARENA } from '../utils/Constants.js';

export class MiniMap {
  constructor() {
    this.canvas = document.getElementById('minimap');
    this.ctx = this.canvas.getContext('2d');
    this.size = 150;
    this.scale = this.size / ARENA.SIZE;
  }

  update(playerPos, enemies, coverObjects) {
    const ctx = this.ctx;
    const s = this.scale;
    const half = this.size / 2;

    // Clear with dark background
    ctx.fillStyle = 'rgba(10, 10, 30, 0.85)';
    ctx.fillRect(0, 0, this.size, this.size);

    // Arena border
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(1, 1, this.size - 2, this.size - 2);

    // Grid lines
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < this.size; i += this.size / 6) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, this.size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(this.size, i); ctx.stroke();
    }

    // Cover objects
    ctx.fillStyle = 'rgba(100, 100, 150, 0.4)';
    for (const cover of coverObjects) {
      const cx = half + cover.position.x * s;
      const cz = half + cover.position.z * s;
      ctx.fillRect(cx - 2, cz - 2, 4, 4);
    }

    // Enemies
    for (const enemy of enemies) {
      if (!enemy.active) continue;
      const ex = half + enemy.body.position.x * s;
      const ez = half + enemy.body.position.z * s;

      switch (enemy.name) {
        case 'Grunt': ctx.fillStyle = '#ff2255'; break;
        case 'Shooter': ctx.fillStyle = '#00ccff'; break;
        case 'Tank': ctx.fillStyle = '#22ff88'; break;
        case 'Exploder': ctx.fillStyle = '#ff6600'; break;
        case 'Teleporter': ctx.fillStyle = '#aa44ff'; break;
        default: ctx.fillStyle = '#ff6688';
      }
      ctx.beginPath();
      ctx.arc(ex, ez, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player (with glow effect)
    const px = half + playerPos.x * s;
    const pz = half + playerPos.z * s;

    // Glow
    const gradient = ctx.createRadialGradient(px, pz, 0, px, pz, 6);
    gradient.addColorStop(0, 'rgba(0, 200, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(px, pz, 6, 0, Math.PI * 2);
    ctx.fill();

    // Player dot
    ctx.fillStyle = '#00ccff';
    ctx.beginPath();
    ctx.arc(px, pz, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }
}
