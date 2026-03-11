import * as THREE from 'three';
import { EFFECTS } from '../utils/Constants.js';

export class EffectsManager {
  constructor(scene, camera, particleSystem) {
    this.scene = scene;
    this.camera = camera;
    this.particles = particleSystem;

    // Muzzle flash light
    this.muzzleLight = new THREE.PointLight(0xffaa00, 0, 10);
    camera.three.add(this.muzzleLight);
    this.muzzleLight.position.set(0.3, -0.2, -1);
    this.muzzleFlashTimer = 0;

    // Bullet trails (simple lines)
    this.trails = [];
    this.trailMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffff88, 
      transparent: true, 
      opacity: 0.6 
    });

    // Explosions
    this.explosions = [];

    // Screen effects
    this.damageVignetteEl = document.getElementById('damage-vignette');
    this.hitMarkerEl = document.getElementById('hit-marker');
    this.hitMarkerTimer = 0;
    this.damageVignetteTimer = 0;

    // Crosshair
    this.crosshairEl = document.getElementById('crosshair');
    this.crosshairGap = 4;
    this.targetGap = 4;

    // Screen flash overlay
    this.screenFlashEl = document.getElementById('screen-flash');
    this.screenFlashTimer = 0;
  }

  muzzleFlash() {
    this.muzzleFlashTimer = EFFECTS.MUZZLE_FLASH_DURATION;
    this.muzzleLight.intensity = 3;
  }

  bulletTrail(from, to) {
    const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
    const line = new THREE.Line(geometry, this.trailMaterial.clone());
    this.scene.add(line);
    this.trails.push({ line, timer: EFFECTS.BULLET_TRAIL_DURATION });
  }

  impact(point, isEnemy = false) {
    const color = isEnemy ? 0xff4444 : 0xff8800;
    this.particles.emit(point, 8, {
      color,
      speed: 4,
      life: 0.3,
      spread: 0.8,
      scale: isEnemy ? 1.5 : 1,
    });
  }

  explosion(position) {
    // Expanding sphere
    const geom = new THREE.SphereGeometry(0.5, 8, 8);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(geom, mat);
    sphere.position.copy(position);
    this.scene.add(sphere);

    // Point light
    const light = new THREE.PointLight(0xff4400, 5, 15);
    light.position.copy(position);
    this.scene.add(light);

    this.explosions.push({ sphere, light, timer: 0.4, maxTimer: 0.4 });

    // Particles
    this.particles.emit(position, 30, {
      color: 0xff4400,
      speed: 10,
      life: 0.6,
      spread: 1,
      scale: 2,
    });
    this.particles.emit(position, 15, {
      color: 0xffaa00,
      speed: 6,
      life: 0.8,
      spread: 1,
      scale: 1.5,
    });

    // Camera effects
    this.camera.addShake(2, 0.3);
    this.camera.addFOVPunch(5);
  }

  hitMarker(isKill = false) {
    this.hitMarkerTimer = isKill ? EFFECTS.KILL_MARKER_DURATION : EFFECTS.HIT_MARKER_DURATION;
    this.hitMarkerEl.classList.add('show');
    if (isKill) {
      this.hitMarkerEl.classList.add('kill');
    } else {
      this.hitMarkerEl.classList.remove('kill');
    }
    this.crosshairEl.classList.add('hit');
  }

  damageVignette(intensity = 1) {
    this.damageVignetteTimer = EFFECTS.DAMAGE_VIGNETTE_DURATION;
    this.damageVignetteEl.style.opacity = Math.min(0.6, intensity * 0.3);
  }

  setCrosshairSpread(spread) {
    this.targetGap = 4 + spread * 200;
  }

  screenFlash(color = 0xffffff) {
    if (this.screenFlashEl) {
      const c = new THREE.Color(color);
      this.screenFlashEl.style.backgroundColor = `rgba(${Math.round(c.r*255)}, ${Math.round(c.g*255)}, ${Math.round(c.b*255)}, 0.4)`;
      this.screenFlashEl.style.opacity = '1';
      this.screenFlashTimer = 0.3;
    }
  }

  update(dt) {
    // Muzzle flash
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dt;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleLight.intensity = 0;
      }
    }

    // Bullet trails
    for (let i = this.trails.length - 1; i >= 0; i--) {
      const trail = this.trails[i];
      trail.timer -= dt;
      trail.line.material.opacity = trail.timer / EFFECTS.BULLET_TRAIL_DURATION;
      if (trail.timer <= 0) {
        this.scene.remove(trail.line);
        trail.line.geometry.dispose();
        trail.line.material.dispose();
        this.trails.splice(i, 1);
      }
    }

    // Explosions
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const exp = this.explosions[i];
      exp.timer -= dt;
      const t = 1 - exp.timer / exp.maxTimer;
      exp.sphere.scale.setScalar(1 + t * 8);
      exp.sphere.material.opacity = 1 - t;
      exp.light.intensity = 5 * (1 - t);
      if (exp.timer <= 0) {
        this.scene.remove(exp.sphere);
        this.scene.remove(exp.light);
        exp.sphere.geometry.dispose();
        exp.sphere.material.dispose();
        this.explosions.splice(i, 1);
      }
    }

    // Hit marker
    if (this.hitMarkerTimer > 0) {
      this.hitMarkerTimer -= dt;
      if (this.hitMarkerTimer <= 0) {
        this.hitMarkerEl.classList.remove('show', 'kill');
        this.crosshairEl.classList.remove('hit');
      }
    }

    // Damage vignette
    if (this.damageVignetteTimer > 0) {
      this.damageVignetteTimer -= dt;
      if (this.damageVignetteTimer <= 0) {
        this.damageVignetteEl.style.opacity = 0;
      }
    }

    // Crosshair
    this.crosshairGap += (this.targetGap - this.crosshairGap) * dt * 15;
    const lines = this.crosshairEl.querySelectorAll('.crosshair-line');
    lines[0].style.bottom = `calc(50% + ${this.crosshairGap}px)`;
    lines[1].style.top = `calc(50% + ${this.crosshairGap}px)`;
    lines[2].style.right = `calc(50% + ${this.crosshairGap}px)`;
    lines[3].style.left = `calc(50% + ${this.crosshairGap}px)`;

    // Screen flash
    if (this.screenFlashTimer > 0) {
      this.screenFlashTimer -= dt;
      if (this.screenFlashEl) {
        this.screenFlashEl.style.opacity = String(Math.max(0, this.screenFlashTimer / 0.3));
      }
    }
  }

  reset() {
    // Clean up trails
    for (const trail of this.trails) {
      this.scene.remove(trail.line);
      trail.line.geometry.dispose();
      trail.line.material.dispose();
    }
    this.trails = [];

    // Clean up explosions
    for (const exp of this.explosions) {
      this.scene.remove(exp.sphere);
      this.scene.remove(exp.light);
    }
    this.explosions = [];

    this.muzzleLight.intensity = 0;
    this.damageVignetteEl.style.opacity = 0;
    this.hitMarkerEl.classList.remove('show', 'kill');
    this.crosshairEl.classList.remove('hit');
  }
}
