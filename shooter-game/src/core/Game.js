import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GameState, GameStates } from './GameState.js';
import { InputManager } from './InputManager.js';
import { Clock } from './Clock.js';
import { Camera } from '../player/Camera.js';
import { PlayerController } from '../player/PlayerController.js';
import { Player } from '../player/Player.js';
import { Arena } from '../world/Arena.js';
import { Lighting } from '../world/Lighting.js';
import { Skybox } from '../world/Skybox.js';
import { WeaponManager } from '../weapons/WeaponManager.js';
import { EnemyManager } from '../enemies/EnemyManager.js';
import { WaveManager } from '../systems/WaveManager.js';
import { ScoreManager } from '../systems/ScoreManager.js';
import { PowerUpManager } from '../systems/PowerUpManager.js';
import { DangerZoneManager } from '../systems/DangerZoneManager.js';
import { ParticleSystem } from '../effects/ParticleSystem.js';
import { EffectsManager } from '../effects/EffectsManager.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { MiniMap } from '../ui/MiniMap.js';
import { AudioManager } from '../audio/AudioManager.js';
import { PHYSICS, PLAYER, ULTIMATE } from '../utils/Constants.js';

export class Game {
  constructor(canvas) {
    console.log('[Game] Initializing...');

    // Debug logging
    this._debugTimer = 0;
    this._debugInterval = 2; // Log debug info every 2 seconds
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Post-processing
    this.composer = new EffectComposer(this.renderer);

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
      this.camera.three.aspect = window.innerWidth / window.innerHeight;
      this.camera.three.updateProjectionMatrix();
    });

    // Scene
    this.scene = new THREE.Scene();

    // Physics
    this.physicsWorld = new CANNON.World({
      gravity: new CANNON.Vec3(0, PHYSICS.GRAVITY, 0),
    });
    this.physicsWorld.broadphase = new CANNON.SAPBroadphase(this.physicsWorld);
    this.physicsWorld.allowSleep = true;

    // Core
    this.gameState = new GameState();
    this.input = new InputManager();
    this.clock = new Clock();

    // Camera & Player
    this.camera = new Camera();
    this.scene.add(this.camera.three); // Add camera to scene so its children (weapon viewmodel) render
    this.playerController = new PlayerController(this.camera, this.physicsWorld, this.input);
    this.player = new Player();

    // World
    this.arena = new Arena(this.scene, this.physicsWorld);
    this.lighting = new Lighting(this.scene);
    this.skybox = new Skybox(this.scene);

    // Weapons
    this.weaponManager = new WeaponManager(this.camera, this.scene);

    // Enemies
    this.enemyManager = new EnemyManager(this.scene, this.physicsWorld);

    // Systems
    this.waveManager = new WaveManager(this.enemyManager);
    this.scoreManager = new ScoreManager();
    this.powerUpManager = new PowerUpManager(this.scene);
    this.powerUpManager.setWeaponManager(this.weaponManager);

    // Effects
    this.particleSystem = new ParticleSystem(this.scene);
    this.effects = new EffectsManager(this.scene, this.camera, this.particleSystem);

    // Danger zones
    this.dangerZoneManager = new DangerZoneManager(this.scene);

    // Ultimate ability
    this.ultimateCharge = 0;
    this.ultimateReady = false;

    // Audio
    this.audio = new AudioManager();

    // UI
    this.hud = new HUD();
    this.menu = new Menu();
    this.miniMap = new MiniMap();

    // Ambient floating particles
    this._ambientParticles = [];
    this._initAmbientParticles();

    // Enemy projectiles tracking
    this.enemyProjectiles = [];

    // Rocket projectiles tracking
    this.rocketProjectiles = [];

    this._setupCallbacks();
    this._setupInputHandlers();

    // Setup post-processing passes
    const renderPass = new RenderPass(this.scene, this.camera.three);
    this.composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.6,  // strength
      0.4,  // radius
      0.85  // threshold
    );
    this.composer.addPass(bloomPass);

    console.log('[Game] Initialization complete. Systems ready.');
  }

  _setupCallbacks() {
    // Wave callbacks
    this.waveManager.onWaveAnnounced((wave) => {
      const waveType = this.waveManager.waveType;
      const typeLabel = waveType !== 'normal' ? ` [${waveType.toUpperCase()}]` : '';
      this.hud.announceWave(wave, typeLabel);
      this.hud.updateWave(wave);
      this.audio.playWaveStart();
      this.dangerZoneManager.setWave(wave);
      console.log(`[Game] Wave ${wave} announced${typeLabel}`);
    });
    this.waveManager.onWaveClear((wave) => {
      this.scoreManager.addWaveClearBonus(wave);
    });

    // Score callbacks
    this.scoreManager.onScoreChange = (score) => this.hud.updateScore(score);
    this.scoreManager.onComboChange = (combo) => this.hud.updateCombo(combo);
    this.scoreManager.onMultiKill = (label, count) => {
      this.hud.addKillFeedItem(label);
      this.camera.addShake(count * 0.3, 0.2);
      console.log(`[Game] Multi-kill: ${label} (${count}x)`);
    };

    // Power-up callbacks
    this.powerUpManager.onCollect = (type) => this.audio.playPowerUp();

    // Menu callbacks
    this.menu.onStart = () => this.startGame();
    this.menu.onResume = () => this.resumeGame();
    this.menu.onRestart = () => this.startGame();
  }

  _setupInputHandlers() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (this.gameState.is(GameStates.PLAYING)) {
          this.pauseGame();
        } else if (this.gameState.is(GameStates.PAUSED)) {
          this.resumeGame();
        }
      }
    });
  }

  startGame() {
    console.log('[Game] Starting game...');
    this.audio.init();
    this.audio.startMusic();

    // Reset everything
    this.player.reset();
    this.playerController.reset();
    this.weaponManager.reset();
    this.enemyManager.reset();
    this.waveManager.reset();
    this.scoreManager.reset();
    this.powerUpManager.reset();
    this.effects.reset();
    this.particleSystem.reset();
    this.dangerZoneManager.reset();
    this.ultimateCharge = 0;
    this.ultimateReady = false;

    // Clear projectiles
    for (const p of this.enemyProjectiles) {
      this.scene.remove(p.mesh);
    }
    this.enemyProjectiles = [];
    for (const p of this.rocketProjectiles) {
      this.scene.remove(p.mesh);
      this.physicsWorld.removeBody(p.body);
    }
    this.rocketProjectiles = [];

    this.gameState.set(GameStates.PLAYING);
    this.menu.hideAll();
    this.hud.show();
    this.playerController.lock();
    this.waveManager.start();

    // Initial HUD update
    this.hud.updateHealth(this.player.health, this.player.maxHealth, this.player.shield);
    this.hud.updateScore(0);
    this.hud.updateCombo(1);

    const w = this.weaponManager.current;
    this.hud.updateAmmo(w.currentAmmo, w.reserveAmmo, w.name);
  }

  pauseGame() {
    console.log('[Game] Pausing game');
    this.gameState.set(GameStates.PAUSED);
    this.menu.showPause();
    this.playerController.unlock();
  }

  resumeGame() {
    console.log('[Game] Resuming game');
    this.gameState.set(GameStates.PLAYING);
    this.menu.hideAll();
    this.playerController.lock();
  }

  gameOver() {
    console.log('[Game] Game over! Score:', this.scoreManager.score, 'Wave:', this.waveManager.currentWave);
    this.gameState.set(GameStates.GAMEOVER);
    this.scoreManager.saveHighScore();
    this.menu.showGameOver(
      this.scoreManager.score,
      this.scoreManager.highScore,
      this.waveManager.currentWave
    );
    this.playerController.unlock();
    this.audio.stopMusic();
  }

  update(dt) {
    this.input.update();

    if (!this.gameState.is(GameStates.PLAYING)) {
      this.input.resetFrame();
      return;
    }

    // Periodic debug logging
    this._debugTimer += dt;
    if (this._debugTimer >= this._debugInterval) {
      this._debugTimer = 0;
      const pos = this.playerController.getPosition();
      const vel = this.playerController.body.velocity;
      const sleepState = this.playerController.body.sleepState;
      const activeKeys = Object.entries(this.input.keys).filter(([, v]) => v).map(([k]) => k);
      console.log(
        `[Debug] Pos:(${pos.x.toFixed(1)},${pos.y.toFixed(1)},${pos.z.toFixed(1)})`,
        `Vel:(${vel.x.toFixed(1)},${vel.y.toFixed(1)},${vel.z.toFixed(1)})`,
        `Grounded:${this.playerController.isGrounded}`,
        `Sleep:${sleepState}`,
        `Locked:${this.playerController.isLocked}`,
        `Keys:[${activeKeys.join(',')}]`,
        `Enemies:${this.enemyManager.getActiveCount()}`,
        `Wave:${this.waveManager.currentWave}(${this.waveManager.state})`
      );
    }

    // Physics
    this.physicsWorld.step(PHYSICS.FIXED_TIMESTEP, dt, PHYSICS.MAX_SUB_STEPS);

    // Time slow factor from power-up
    const timeScale = this.powerUpManager.timeSlowFactor;
    const enemyDt = dt * timeScale;

    // Player
    this.playerController.update(dt);
    this.player.update(dt);
    const playerPos = this.playerController.getPosition();

    // Weapons (only handle input when pointer-locked)
    if (this.playerController.isLocked) {
      this.weaponManager.handleInput(this.input);
    }
    this.weaponManager.update(dt, this.input.mouseDX, this.input.mouseDY);

    // Fire weapon (only when pointer-locked)
    if (this.input.isMouseDown(0) && this.playerController.isLocked) {
      const weapon = this.weaponManager.current;
      if (weapon.auto || !weapon.hasFiredThisPress) {
        const results = this.weaponManager.fire(this.enemyManager.getEnemyMeshes(), null);
        if (results) {
          this._handleFireResults(results, playerPos);
          weapon.hasFiredThisPress = true;
        } else if (!weapon.canFire() && weapon.currentAmmo === 0) {
          weapon.reload();
          this.audio.playReload();
        }
      }
    } else {
      this.weaponManager.current.hasFiredThisPress = false;
    }

    // Crosshair spread
    const isMoving = this.input.isKeyDown('KeyW') || this.input.isKeyDown('KeyS') ||
                     this.input.isKeyDown('KeyA') || this.input.isKeyDown('KeyD');
    const isSprinting = this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('ShiftRight');
    this.effects.setCrosshairSpread(
      this.weaponManager.current.currentSpread + (isMoving ? (isSprinting ? 0.04 : 0.02) : 0)
    );

    // Enemies (with time slow)
    const attackResults = this.enemyManager.update(enemyDt, playerPos);
    this._handleEnemyAttacks(attackResults, playerPos);

    // Enemy projectiles
    this._updateEnemyProjectiles(dt, playerPos);

    // Rocket projectiles
    this._updateRocketProjectiles(dt);

    // Danger zones
    const zoneDamage = this.dangerZoneManager.update(dt, playerPos);
    if (zoneDamage) {
      this.player.takeDamage(zoneDamage);
      this.effects.damageVignette(0.5);
      this.camera.addShake(1.5, 0.3);
      this.audio.playPlayerHit();
    }

    // Ultimate ability
    if (this.input.isKeyDown(ULTIMATE.KEY) && this.ultimateReady && this.playerController.isLocked) {
      this._activateUltimate(playerPos);
    }
    this.hud.updateUltimate(this.ultimateCharge, ULTIMATE.KILLS_TO_CHARGE, this.ultimateReady);

    // Ambient particles
    this._updateAmbientParticles(dt);

    // Wave manager
    this.waveManager.update(dt);

    // Score
    this.scoreManager.update(dt);

    // Power-ups
    this.powerUpManager.update(dt, playerPos, this.player, this.playerController);

    // Update HUD
    this.hud.updateHealth(this.player.health, this.player.maxHealth, this.player.shield);
    const w = this.weaponManager.current;
    this.hud.updateAmmo(w.currentAmmo, w.reserveAmmo, w.name);
    this.hud.updatePowerUps(this.powerUpManager.speedBoostTimer, this.powerUpManager.damageBoostTimer, this.powerUpManager.timeSlowTimer, this.player.shield);
    this.hud.updateDash(this.playerController.dashCooldown, PLAYER.DASH_COOLDOWN);
    this.hud.update(dt);

    // Effects
    this.effects.update(dt);
    this.particleSystem.update(dt);

    // Low health vignette
    if (this.player.health < 30 && this.player.health > 0) {
      this.effects.damageVignetteEl.style.opacity = (1 - this.player.health / 30) * 0.3;
    }

    // Mini-map
    this.miniMap.update(playerPos, this.enemyManager.getEnemies(), this.arena.coverObjects);

    // Check death
    if (this.player.isDead) {
      this.gameOver();
    }

    this.input.resetFrame();
    this.input.lateUpdate();
  }

  _initAmbientParticles() {
    const geom = new THREE.BufferGeometry();
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      // Subtle cyan-blue tint
      const c = new THREE.Color().setHSL(0.55 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this._ambientMesh = new THREE.Points(geom, mat);
    this.scene.add(this._ambientMesh);
    this._ambientTime = 0;
  }

  _updateAmbientParticles(dt) {
    this._ambientTime += dt * 0.3;
    const pos = this._ambientMesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.array[i * 3 + 1] += Math.sin(this._ambientTime + i) * 0.003;
      pos.array[i * 3] += Math.cos(this._ambientTime * 0.7 + i * 0.5) * 0.002;
      // Wrap around
      if (pos.array[i * 3 + 1] > 8) pos.array[i * 3 + 1] = 0;
      if (pos.array[i * 3 + 1] < 0) pos.array[i * 3 + 1] = 8;
    }
    pos.needsUpdate = true;
  }

  _activateUltimate(playerPos) {
    this.ultimateCharge = 0;
    this.ultimateReady = false;

    // Shockwave visual
    const ringGeom = new THREE.RingGeometry(0.5, 1.5, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ccff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(playerPos.x, 0.5, playerPos.z);
    this.scene.add(ring);

    // Expanding shockwave animation
    const expandSpeed = 40;
    let elapsed = 0;
    const animate = () => {
      elapsed += 0.016;
      const radius = elapsed * expandSpeed;
      ring.scale.setScalar(radius);
      ring.material.opacity = Math.max(0, 0.8 - elapsed * 2);
      if (elapsed < 0.5) requestAnimationFrame(animate);
      else {
        this.scene.remove(ring);
        ring.geometry.dispose();
        ring.material.dispose();
      }
    };
    requestAnimationFrame(animate);

    // Damage all enemies in radius
    for (const enemy of this.enemyManager.getEnemies()) {
      const dx = playerPos.x - enemy.body.position.x;
      const dz = playerPos.z - enemy.body.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < ULTIMATE.RADIUS) {
        const falloff = 1 - dist / ULTIMATE.RADIUS;
        const killed = enemy.takeDamage(ULTIMATE.DAMAGE * falloff);
        if (killed) {
          this.scoreManager.addKill(enemy.points, false);
          this.waveManager.onEnemyKilled();
          this.hud.addKillFeedItem(`${enemy.name} obliterated`);
          this.powerUpManager.trySpawn(enemy.mesh.position);
        }
      }
    }

    // Screen effects
    this.camera.addShake(3, 0.5);
    this.camera.addFOVPunch(12);
    this.effects.screenFlash(0x00ccff);
    this.audio.playExplosion();
    this.hud.addKillFeedItem('⚡ SHOCKWAVE ACTIVATED ⚡');
  }

  _handleFireResults(results, playerPos) {
    const weapon = this.weaponManager.current;

    // Play weapon sound
    switch (weapon.name) {
      case 'Pistol': this.audio.playPistolShot(); break;
      case 'Shotgun': this.audio.playShotgunShot(); break;
      case 'Assault Rifle': this.audio.playRifleShot(); break;
      case 'Rocket Launcher': this.audio.playRocketShot(); break;
    }

    this.effects.muzzleFlash();

    for (const result of results) {
      if (result.type === 'hit') {
        const enemy = this.enemyManager.findEnemyByMesh(result.object);
        if (enemy) {
          // Check headshot (top 30% of mesh)
          const meshTop = enemy.mesh.position.y + enemy.config.size.y / 2;
          const meshHeadshotLine = meshTop - enemy.config.size.y * 0.3;
          const isHeadshot = result.point.y >= meshHeadshotLine;
          
          const baseDamage = result.damage * this.player.damageMultiplier;
          const damage = isHeadshot ? baseDamage * 2 : baseDamage;

          const killed = enemy.takeDamage(damage);
          this.effects.impact(result.point, true);
          this.effects.hitMarker(killed);

          if (killed) {
            this.audio.playEnemyDeath();
            this.scoreManager.addKill(enemy.points, isHeadshot);
            this.waveManager.onEnemyKilled();
            this.hud.addKillFeedItem(`${enemy.name} eliminated${isHeadshot ? ' (HEADSHOT)' : ''}`);
            this.powerUpManager.trySpawn(enemy.mesh.position);
            // Charge ultimate
            this.ultimateCharge = Math.min(this.ultimateCharge + 1, ULTIMATE.KILLS_TO_CHARGE);
            if (this.ultimateCharge >= ULTIMATE.KILLS_TO_CHARGE && !this.ultimateReady) {
              this.ultimateReady = true;
              this.hud.addKillFeedItem('⚡ ULTIMATE READY [F] ⚡');
            }
          } else {
            this.audio.playEnemyHit();
          }

          // Bullet trail to hit
          const origin = new THREE.Vector3();
          this.camera.three.getWorldPosition(origin);
          this.effects.bulletTrail(origin, result.point);
        }
      } else if (result.type === 'world') {
        this.effects.impact(result.point, false);
        const origin = new THREE.Vector3();
        this.camera.three.getWorldPosition(origin);
        this.effects.bulletTrail(origin, result.point);
      } else if (result.type === 'miss') {
        const origin = new THREE.Vector3();
        this.camera.three.getWorldPosition(origin);
        this.effects.bulletTrail(origin, result.endPoint);
      } else if (result.type === 'projectile') {
        this._spawnRocket(result);
      }
    }
  }

  _spawnRocket(data) {
    const geom = new THREE.SphereGeometry(0.15, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xff4400,
      emissive: 0xff2200,
      emissiveIntensity: 1,
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.copy(data.origin);
    this.scene.add(mesh);

    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(0.15),
    });
    body.position.copy(data.origin);
    body.velocity.set(
      data.direction.x * data.speed,
      data.direction.y * data.speed,
      data.direction.z * data.speed
    );
    body.collisionResponse = false;
    this.physicsWorld.addBody(body);

    // Light
    const light = new THREE.PointLight(0xff4400, 2, 8);
    mesh.add(light);

    this.rocketProjectiles.push({
      mesh,
      body,
      damage: data.damage,
      splashDamage: data.splashDamage,
      splashRadius: data.splashRadius,
      life: 5,
    });
  }

  _updateRocketProjectiles(dt) {
    for (let i = this.rocketProjectiles.length - 1; i >= 0; i--) {
      const rocket = this.rocketProjectiles[i];
      rocket.life -= dt;
      rocket.mesh.position.copy(rocket.body.position);

      // Particle trail
      this.particleSystem.emit(rocket.mesh.position, 1, {
        color: 0xff4400, speed: 1, life: 0.2, spread: 0.3, scale: 0.8
      });

      // Check collisions with enemies
      let exploded = false;
      for (const enemy of this.enemyManager.getEnemies()) {
        const dx = rocket.body.position.x - enemy.body.position.x;
        const dy = rocket.body.position.y - enemy.body.position.y;
        const dz = rocket.body.position.z - enemy.body.position.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.5) {
          this._explodeRocket(rocket);
          exploded = true;
          break;
        }
      }

      // Check world collision (hit ground or walls)
      if (!exploded && (rocket.body.position.y < 0.2 || rocket.life <= 0 ||
          Math.abs(rocket.body.position.x) > 30 || Math.abs(rocket.body.position.z) > 30)) {
        this._explodeRocket(rocket);
        exploded = true;
      }

      if (exploded) {
        this.rocketProjectiles.splice(i, 1);
      }
    }
  }

  _explodeRocket(rocket) {
    const pos = new THREE.Vector3().copy(rocket.body.position);
    this.effects.explosion(pos);
    this.audio.playExplosion();

    // Splash damage
    for (const enemy of this.enemyManager.getEnemies()) {
      const dx = pos.x - enemy.body.position.x;
      const dy = pos.y - enemy.body.position.y;
      const dz = pos.z - enemy.body.position.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < rocket.splashRadius) {
        const falloff = 1 - (dist / rocket.splashRadius);
        const damage = (dist < 1.5 ? rocket.damage : rocket.splashDamage * falloff) * this.player.damageMultiplier;
        const killed = enemy.takeDamage(damage);
        if (killed) {
          this.audio.playEnemyDeath();
          this.scoreManager.addKill(enemy.points, false);
          this.waveManager.onEnemyKilled();
          this.hud.addKillFeedItem(`${enemy.name} eliminated (EXPLOSION)`);
          this.powerUpManager.trySpawn(enemy.mesh.position);
        }
      }
    }

    // Player splash damage
    const playerPos = this.playerController.getPosition();
    const dist = pos.distanceTo(playerPos);
    if (dist < rocket.splashRadius) {
      const falloff = 1 - (dist / rocket.splashRadius);
      this.player.takeDamage(rocket.splashDamage * falloff * 0.3); // reduced self-damage
      this.effects.damageVignette(falloff);
    }

    this.scene.remove(rocket.mesh);
    this.physicsWorld.removeBody(rocket.body);
    rocket.mesh.geometry.dispose();
    rocket.mesh.material.dispose();
  }

  _handleEnemyAttacks(attackResults, playerPos) {
    for (const attack of attackResults) {
      if (attack.type === 'melee') {
        this.player.takeDamage(attack.damage);
        this.audio.playPlayerHit();
        this.effects.damageVignette(attack.damage / 30);
        this.camera.addShake(attack.damage / 15, 0.2);
      } else if (attack.type === 'projectile') {
        this._spawnEnemyProjectile(attack);
        this.audio.playEnemyShoot();
      } else if (attack.type === 'explosion') {
        // Exploder self-destruct
        this.effects.explosion(attack.position);
        this.audio.playExplosion();
        this.waveManager.onEnemyKilled();
        this.scoreManager.addKill(150, false);
        this.hud.addKillFeedItem('Exploder self-destructed!');
        // Damage player if in radius
        const dist = playerPos.distanceTo(attack.position);
        if (dist < attack.radius) {
          const falloff = 1 - dist / attack.radius;
          this.player.takeDamage(attack.damage * falloff);
          this.effects.damageVignette(falloff * 0.5);
          this.camera.addShake(2 * falloff, 0.3);
        }
        // Damage other enemies in blast radius
        for (const enemy of this.enemyManager.getEnemies()) {
          const dx = attack.position.x - enemy.body.position.x;
          const dz = attack.position.z - enemy.body.position.z;
          const d = Math.sqrt(dx * dx + dz * dz);
          if (d < attack.radius && d > 0.5) {
            enemy.takeDamage(attack.damage * (1 - d / attack.radius) * 0.5);
          }
        }
      }
    }
  }

  _spawnEnemyProjectile(data) {
    const geom = new THREE.SphereGeometry(0.12, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff4488 });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.copy(data.origin);
    this.scene.add(mesh);

    this.enemyProjectiles.push({
      mesh,
      direction: data.direction.clone(),
      speed: data.speed,
      damage: data.damage,
      life: 5,
    });
  }

  _updateEnemyProjectiles(dt, playerPos) {
    for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
      const proj = this.enemyProjectiles[i];
      proj.life -= dt;
      proj.mesh.position.addScaledVector(proj.direction, proj.speed * dt);

      // Check player hit
      const dx = proj.mesh.position.x - playerPos.x;
      const dy = proj.mesh.position.y - playerPos.y;
      const dz = proj.mesh.position.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 1) {
        this.player.takeDamage(proj.damage);
        this.audio.playPlayerHit();
        this.effects.damageVignette(proj.damage / 20);
        this.camera.addShake(0.5, 0.15);
        this._removeEnemyProjectile(i);
        continue;
      }

      // Out of bounds or expired
      if (proj.life <= 0 || Math.abs(proj.mesh.position.x) > 35 ||
          Math.abs(proj.mesh.position.z) > 35) {
        this._removeEnemyProjectile(i);
      }
    }
  }

  _removeEnemyProjectile(index) {
    const proj = this.enemyProjectiles[index];
    this.scene.remove(proj.mesh);
    proj.mesh.geometry.dispose();
    proj.mesh.material.dispose();
    this.enemyProjectiles.splice(index, 1);
  }

  render() {
    this.composer.render();
  }
}
