import { WAVES, ENEMIES } from '../utils/Constants.js';

export class WaveManager {
  constructor(enemyManager) {
    this.enemyManager = enemyManager;
    this.currentWave = 0;
    this.state = 'waiting'; // waiting, spawning, active, breather
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.breatherTimer = 0;
    this.waveAnnouncedCallback = null;
    this.waveClearCallback = null;
    this.totalEnemiesThisWave = 0;
    this.enemiesKilledThisWave = 0;
    this.waveType = 'normal'; // normal, rush, elite, swarm
  }

  onWaveAnnounced(fn) { this.waveAnnouncedCallback = fn; }
  onWaveClear(fn) { this.waveClearCallback = fn; }

  start() {
    this.currentWave = 0;
    this.nextWave();
  }

  nextWave() {
    this.currentWave++;
    this.state = 'breather';
    this.breatherTimer = this.currentWave === 1 ? 1 : WAVES.BREATHER_TIME;
    this.enemiesKilledThisWave = 0;

    // Determine wave type for variety
    if (this.currentWave % WAVES.BOSS_WAVE_INTERVAL === 0) {
      this.waveType = 'boss';
    } else if (this.currentWave > 2 && this.currentWave % 3 === 0) {
      this.waveType = 'rush'; // Lots of fast grunts
    } else if (this.currentWave > 4 && this.currentWave % 4 === 1) {
      this.waveType = 'elite'; // Fewer but stronger enemies
    } else if (this.currentWave > 3 && this.currentWave % 7 === 0) {
      this.waveType = 'swarm'; // Many weak enemies at once
    } else {
      this.waveType = 'normal';
    }

    console.log(`[WaveManager] Wave ${this.currentWave} incoming — type: ${this.waveType}`);

    if (this.waveAnnouncedCallback) {
      this.waveAnnouncedCallback(this.currentWave);
    }
  }

  _getWaveConfig(wave) {
    let grunts = WAVES.BASE_GRUNTS + (wave - 1) * WAVES.GRUNT_INCREMENT;
    let shooters = wave >= WAVES.SHOOTER_UNLOCK_WAVE ? Math.floor((wave - 1) * 1.5) : 0;
    let tanks = wave >= WAVES.TANK_UNLOCK_WAVE ? Math.floor((wave - 3) * 0.8) : 0;
    let exploders = wave >= WAVES.EXPLODER_UNLOCK_WAVE ? Math.floor((wave - 2) * 1.2) : 0;
    let teleporters = wave >= WAVES.TELEPORTER_UNLOCK_WAVE ? Math.floor((wave - 4) * 0.6) : 0;

    // Boss waves
    const isBossWave = wave % WAVES.BOSS_WAVE_INTERVAL === 0;
    const bossCount = isBossWave ? Math.min(3, Math.floor(wave / WAVES.BOSS_WAVE_INTERVAL)) : 0;

    // Health/damage scaling
    const scaleWave = Math.max(0, wave - WAVES.HEALTH_SCALE_START_WAVE);
    let healthScale = 1 + scaleWave * WAVES.HEALTH_SCALE_PER_WAVE;
    let damageScale = 1 + scaleWave * WAVES.HEALTH_SCALE_PER_WAVE * 0.5;

    // Wave type modifiers
    switch (this.waveType) {
      case 'rush':
        grunts = Math.floor(grunts * 2);
        exploders = Math.floor(exploders * 1.5);
        shooters = Math.floor(shooters * 0.5);
        tanks = 0;
        teleporters = Math.floor(teleporters * 0.5);
        break;
      case 'elite':
        grunts = Math.floor(grunts * 0.3);
        shooters = Math.floor(shooters * 0.5);
        tanks = Math.max(tanks, Math.floor(wave / 2));
        teleporters = Math.floor(teleporters * 1.5);
        exploders = 0;
        healthScale *= 1.5;
        damageScale *= 1.3;
        break;
      case 'swarm':
        grunts = Math.floor(grunts * 2.5);
        exploders = Math.floor(exploders * 2);
        shooters = Math.floor(shooters * 1.5);
        healthScale *= 0.6;
        break;
      case 'boss':
        // Boss waves keep normal enemies but add bosses
        break;
    }

    return { grunts, shooters, tanks, exploders, teleporters, bossCount, healthScale, damageScale };
  }

  _startSpawning() {
    const config = this._getWaveConfig(this.currentWave);
    this.spawnQueue = [];

    for (let i = 0; i < config.grunts; i++) {
      this.spawnQueue.push({ type: 'grunt', healthScale: config.healthScale, damageScale: config.damageScale });
    }
    for (let i = 0; i < config.shooters; i++) {
      this.spawnQueue.push({ type: 'shooter', healthScale: config.healthScale, damageScale: config.damageScale });
    }
    for (let i = 0; i < config.tanks; i++) {
      this.spawnQueue.push({ type: 'tank', healthScale: config.healthScale, damageScale: config.damageScale });
    }
    for (let i = 0; i < config.exploders; i++) {
      this.spawnQueue.push({ type: 'exploder', healthScale: config.healthScale, damageScale: config.damageScale });
    }
    for (let i = 0; i < config.teleporters; i++) {
      this.spawnQueue.push({ type: 'teleporter', healthScale: config.healthScale, damageScale: config.damageScale });
    }
    // Boss Tank (extra health)
    for (let i = 0; i < config.bossCount; i++) {
      this.spawnQueue.push({ type: 'tank', healthScale: config.healthScale * 3, damageScale: config.damageScale * 1.5 });
    }

    // Shuffle
    for (let i = this.spawnQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.spawnQueue[i], this.spawnQueue[j]] = [this.spawnQueue[j], this.spawnQueue[i]];
    }

    this.totalEnemiesThisWave = this.spawnQueue.length;
    this.spawnTimer = 0;
    this.state = 'spawning';
  }

  onEnemyKilled() {
    this.enemiesKilledThisWave++;
  }

  update(dt) {
    if (this.state === 'breather') {
      this.breatherTimer -= dt;
      if (this.breatherTimer <= 0) {
        this._startSpawning();
      }
      return;
    }

    if (this.state === 'spawning') {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0 && this.spawnQueue.length > 0) {
        const spawn = this.spawnQueue.shift();
        this.enemyManager.spawn(spawn.type, spawn.healthScale, spawn.damageScale);
        this.spawnTimer = WAVES.SPAWN_STAGGER;
      }
      if (this.spawnQueue.length === 0) {
        this.state = 'active';
      }
      return;
    }

    if (this.state === 'active') {
      if (this.enemyManager.getActiveCount() === 0) {
        if (this.waveClearCallback) {
          this.waveClearCallback(this.currentWave);
        }
        this.nextWave();
      }
    }
  }

  reset() {
    this.currentWave = 0;
    this.state = 'waiting';
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.breatherTimer = 0;
    this.totalEnemiesThisWave = 0;
    this.enemiesKilledThisWave = 0;
    this.waveType = 'normal';
  }
}
