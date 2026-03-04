// ========================================
// COSMIC DEFENDER - Space Shooter Game
// Built with Phaser 3 — Ultimate Edition
// ========================================

// Sound Manager using Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = 0.3;
    }

    playShoot() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(800, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
        gain.gain.setValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.1);
    }

    playHomingLaunch() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(300, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.15);
        gain.gain.setValueAtTime(this.masterVolume * 0.25, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.15);
    }

    playPlasma() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'square';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(120, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60, this.audioContext.currentTime + 0.25);
        gain.gain.setValueAtTime(this.masterVolume * 0.35, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.25);
    }

    playChainLightning() {
        const t = this.audioContext.currentTime;
        for (let i = 0; i < 3; i++) {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.type = 'sawtooth';
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            osc.frequency.setValueAtTime(1200 - i * 200, t + i * 0.04);
            osc.frequency.exponentialRampToValueAtTime(400, t + i * 0.04 + 0.06);
            gain.gain.setValueAtTime(this.masterVolume * 0.2, t + i * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.04 + 0.06);
            osc.start(t + i * 0.04);
            osc.stop(t + i * 0.04 + 0.06);
        }
    }

    playBomb() {
        const bufferSize = this.audioContext.sampleRate * 0.8;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 0.5);
        }
        const noise = this.audioContext.createBufferSource();
        noise.buffer = buffer;
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.8);
        const gain = this.audioContext.createGain();
        gain.gain.setValueAtTime(this.masterVolume * 0.7, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        noise.start(this.audioContext.currentTime);
        noise.stop(this.audioContext.currentTime + 0.8);
    }

    playExplosion() {
        const bufferSize = this.audioContext.sampleRate * 0.5;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.audioContext.createBufferSource();
        noise.buffer = buffer;
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.5);
        const gain = this.audioContext.createGain();
        gain.gain.setValueAtTime(this.masterVolume * 0.5, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        noise.start(this.audioContext.currentTime);
        noise.stop(this.audioContext.currentTime + 0.5);
    }

    playPowerUp() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(200, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
        gain.gain.setValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.2);
    }

    playHit() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(150, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.15);
        gain.gain.setValueAtTime(this.masterVolume * 0.4, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.15);
    }

    playBossWarning() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'triangle';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(300, this.audioContext.currentTime);
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(this.masterVolume * 0.4, this.audioContext.currentTime + 0.1);
        gain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.3);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.3);
    }

    playComboTier() {
        const t = this.audioContext.currentTime;
        [523, 659, 784].forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.type = 'triangle';
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            osc.frequency.setValueAtTime(freq, t + i * 0.08);
            gain.gain.setValueAtTime(this.masterVolume * 0.25, t + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.08 + 0.2);
            osc.start(t + i * 0.08);
            osc.stop(t + i * 0.08 + 0.2);
        });
    }

    playWeaponSwitch() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(500, this.audioContext.currentTime);
        osc.frequency.setValueAtTime(700, this.audioContext.currentTime + 0.05);
        gain.gain.setValueAtTime(this.masterVolume * 0.2, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.1);
    }

    playLevelUp() {
        const t = this.audioContext.currentTime;
        [392, 494, 587, 784].forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.type = 'triangle';
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            osc.frequency.setValueAtTime(freq, t + i * 0.1);
            gain.gain.setValueAtTime(this.masterVolume * 0.3, t + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.1 + 0.25);
            osc.start(t + i * 0.1);
            osc.stop(t + i * 0.1 + 0.25);
        });
    }

    playMiniBoss() {
        const t = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'square';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(200, t);
        osc.frequency.linearRampToValueAtTime(400, t + 0.2);
        osc.frequency.linearRampToValueAtTime(150, t + 0.4);
        gain.gain.setValueAtTime(this.masterVolume * 0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
        osc.start(t);
        osc.stop(t + 0.5);
    }

    playDash() {
        const t = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(400, t);
        osc.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
        osc.frequency.exponentialRampToValueAtTime(600, t + 0.15);
        gain.gain.setValueAtTime(this.masterVolume * 0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
        osc.start(t);
        osc.stop(t + 0.15);
    }

    playGraze() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(1400, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1800, this.audioContext.currentTime + 0.05);
        gain.gain.setValueAtTime(this.masterVolume * 0.12, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.05);
    }

    playCoinPickup() {
        const t = this.audioContext.currentTime;
        [880, 1100].forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            osc.frequency.setValueAtTime(freq, t + i * 0.06);
            gain.gain.setValueAtTime(this.masterVolume * 0.2, t + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.06 + 0.1);
            osc.start(t + i * 0.06);
            osc.stop(t + i * 0.06 + 0.1);
        });
    }

    playEventWarning() {
        const t = this.audioContext.currentTime;
        for (let i = 0; i < 3; i++) {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.type = 'triangle';
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            osc.frequency.setValueAtTime(600, t + i * 0.15);
            gain.gain.setValueAtTime(this.masterVolume * 0.3, t + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.15 + 0.1);
            osc.start(t + i * 0.15);
            osc.stop(t + i * 0.15 + 0.1);
        }
    }

    playSlowmo() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.frequency.setValueAtTime(300, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.3);
        gain.gain.setValueAtTime(this.masterVolume * 0.2, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.3);
    }
}

const soundManager = new SoundManager();

// ========================================
// WEAPON DEFINITIONS
// ========================================
const WEAPONS = {
    blaster: {
        name: 'Blaster',
        key: '1',
        fireRate: 300,
        color: '#00ff00',
        icon: '🔫',
        unlockScore: 0,
        description: 'Standard rapid-fire blaster'
    },
    spread: {
        name: 'Spread Shot',
        key: '2',
        fireRate: 450,
        color: '#ff6600',
        icon: '🌟',
        unlockScore: 500,
        description: '5-way fan pattern'
    },
    homing: {
        name: 'Homing Missiles',
        key: '3',
        fireRate: 600,
        color: '#ff00ff',
        icon: '🚀',
        unlockScore: 1500,
        description: 'Lock-on guided missiles'
    },
    plasma: {
        name: 'Plasma Cannon',
        key: '4',
        fireRate: 800,
        color: '#00ccff',
        icon: '💠',
        unlockScore: 3000,
        description: 'High-damage area blast'
    },
    chain: {
        name: 'Chain Lightning',
        key: '5',
        fireRate: 500,
        color: '#ffff00',
        icon: '⚡',
        unlockScore: 5000,
        description: 'Arcs between enemies'
    }
};

// ========================================
// COMBO TIERS
// ========================================
const COMBO_TIERS = [
    { threshold: 3, name: 'TRIPLE!', color: '#ffff00', dmgBonus: 0.1, scoreMulti: 2 },
    { threshold: 5, name: 'PENTA KILL!', color: '#ff9900', dmgBonus: 0.2, scoreMulti: 3 },
    { threshold: 10, name: 'UNSTOPPABLE!', color: '#ff3300', dmgBonus: 0.3, scoreMulti: 5 },
    { threshold: 15, name: 'COSMIC FURY!', color: '#ff00ff', dmgBonus: 0.5, scoreMulti: 8 },
    { threshold: 25, name: 'GODLIKE!', color: '#00ffff', dmgBonus: 0.75, scoreMulti: 12 }
];

// ========================================
// LEVEL DEFINITIONS — 15 Levels with themes
// ========================================
const LEVELS = [
    {
        level: 1, name: 'Outer Rim Patrol',
        theme: { bg: 0x000011, tint: 0x3344aa },
        killsRequired: 15, bossHP: 30,
        spawnRate: 900, maxEnemies: 4,
        enemyWeights: { standard: 70, fast: 20, tank: 5, stealth: 5, bomber: 0, healer: 0, splitter: 0, carrier: 0 },
        speedMulti: 0.8, hpMulti: 1.0
    },
    {
        level: 2, name: 'Asteroid Belt',
        theme: { bg: 0x0a0a1a, tint: 0x556677 },
        killsRequired: 20, bossHP: 40,
        spawnRate: 850, maxEnemies: 5,
        enemyWeights: { standard: 55, fast: 30, tank: 8, stealth: 7, bomber: 0, healer: 0, splitter: 0, carrier: 0 },
        speedMulti: 0.9, hpMulti: 1.0
    },
    {
        level: 3, name: 'Nebula Crossing',
        theme: { bg: 0x110022, tint: 0x8844cc },
        killsRequired: 25, bossHP: 55,
        spawnRate: 800, maxEnemies: 6,
        enemyWeights: { standard: 45, fast: 25, tank: 12, stealth: 11, bomber: 7, healer: 0, splitter: 0, carrier: 0 },
        speedMulti: 1.0, hpMulti: 1.0
    },
    {
        level: 4, name: 'Dark Space',
        theme: { bg: 0x050510, tint: 0x2233aa },
        killsRequired: 25, bossHP: 65,
        spawnRate: 750, maxEnemies: 7,
        enemyWeights: { standard: 35, fast: 20, tank: 12, stealth: 22, bomber: 11, healer: 0, splitter: 0, carrier: 0 },
        speedMulti: 1.0, hpMulti: 1.1
    },
    {
        level: 5, name: 'Pirate Sector',
        theme: { bg: 0x1a0a00, tint: 0xcc6622 },
        killsRequired: 30, bossHP: 80,
        spawnRate: 700, maxEnemies: 8,
        enemyWeights: { standard: 30, fast: 25, tank: 15, stealth: 10, bomber: 15, healer: 5, splitter: 0, carrier: 0 },
        speedMulti: 1.1, hpMulti: 1.1
    },
    {
        level: 6, name: 'Ion Storm',
        theme: { bg: 0x001122, tint: 0x22aaff },
        killsRequired: 30, bossHP: 95,
        spawnRate: 650, maxEnemies: 9,
        enemyWeights: { standard: 25, fast: 30, tank: 12, stealth: 10, bomber: 13, healer: 5, splitter: 5, carrier: 0 },
        speedMulti: 1.15, hpMulti: 1.2
    },
    {
        level: 7, name: 'Crimson Void',
        theme: { bg: 0x1a0000, tint: 0xff2233 },
        killsRequired: 35, bossHP: 110,
        spawnRate: 600, maxEnemies: 10,
        enemyWeights: { standard: 20, fast: 20, tank: 18, stealth: 12, bomber: 15, healer: 5, splitter: 5, carrier: 5 },
        speedMulti: 1.2, hpMulti: 1.3
    },
    {
        level: 8, name: 'Quantum Rift',
        theme: { bg: 0x0a001a, tint: 0xaa44ff },
        killsRequired: 35, bossHP: 130,
        spawnRate: 550, maxEnemies: 11,
        enemyWeights: { standard: 18, fast: 22, tank: 15, stealth: 15, bomber: 12, healer: 5, splitter: 8, carrier: 5 },
        speedMulti: 1.25, hpMulti: 1.4
    },
    {
        level: 9, name: 'Galactic Core',
        theme: { bg: 0x111100, tint: 0xffcc00 },
        killsRequired: 40, bossHP: 150,
        spawnRate: 500, maxEnemies: 12,
        enemyWeights: { standard: 15, fast: 20, tank: 15, stealth: 12, bomber: 15, healer: 5, splitter: 10, carrier: 8 },
        speedMulti: 1.3, hpMulti: 1.5
    },
    {
        level: 10, name: 'The Swarm',
        theme: { bg: 0x001a0a, tint: 0x00ff44 },
        killsRequired: 40, bossHP: 175,
        spawnRate: 400, maxEnemies: 15,
        enemyWeights: { standard: 25, fast: 30, tank: 10, stealth: 10, bomber: 10, healer: 3, splitter: 7, carrier: 5 },
        speedMulti: 1.4, hpMulti: 1.3
    },
    {
        level: 11, name: 'Shadow Realm',
        theme: { bg: 0x050505, tint: 0x666688 },
        killsRequired: 45, bossHP: 200,
        spawnRate: 450, maxEnemies: 13,
        enemyWeights: { standard: 10, fast: 15, tank: 15, stealth: 25, bomber: 12, healer: 5, splitter: 10, carrier: 8 },
        speedMulti: 1.35, hpMulti: 1.6
    },
    {
        level: 12, name: 'Supernova',
        theme: { bg: 0x1a0a00, tint: 0xff6600 },
        killsRequired: 45, bossHP: 230,
        spawnRate: 400, maxEnemies: 14,
        enemyWeights: { standard: 10, fast: 15, tank: 18, stealth: 12, bomber: 18, healer: 5, splitter: 12, carrier: 10 },
        speedMulti: 1.45, hpMulti: 1.7
    },
    {
        level: 13, name: 'Dimension X',
        theme: { bg: 0x0f001a, tint: 0xcc00ff },
        killsRequired: 50, bossHP: 260,
        spawnRate: 380, maxEnemies: 15,
        enemyWeights: { standard: 8, fast: 15, tank: 15, stealth: 15, bomber: 15, healer: 5, splitter: 15, carrier: 12 },
        speedMulti: 1.5, hpMulti: 1.8
    },
    {
        level: 14, name: 'Omega Station',
        theme: { bg: 0x0a0a0a, tint: 0xaaaacc },
        killsRequired: 55, bossHP: 300,
        spawnRate: 350, maxEnemies: 16,
        enemyWeights: { standard: 5, fast: 15, tank: 18, stealth: 15, bomber: 15, healer: 5, splitter: 15, carrier: 12 },
        speedMulti: 1.55, hpMulti: 2.0
    },
    {
        level: 15, name: 'Final Frontier',
        theme: { bg: 0x000000, tint: 0xff0044 },
        killsRequired: 999, bossHP: 400,
        spawnRate: 300, maxEnemies: 18,
        enemyWeights: { standard: 5, fast: 12, tank: 18, stealth: 15, bomber: 18, healer: 5, splitter: 15, carrier: 12 },
        speedMulti: 1.7, hpMulti: 2.2
    }
];

// Boss names per level
const BOSS_NAMES = [
    'SCOUT DRONE',
    'ROCK CRAWLER',
    'NEBULA GUARDIAN',
    'SHADOW STALKER',
    'PIRATE KING',
    'STORM BRINGER',
    'BLOOD SENTINEL',
    'QUANTUM WRAITH',
    'CORE DESTROYER',
    'SWARM QUEEN',
    'PHANTOM LORD',
    'NOVA TITAN',
    'DIMENSION RIPPER',
    'OMEGA PRIME',
    'COSMIC OVERLORD'
];

// Game configuration - BIGGER CANVAS
const config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 750,
    parent: 'game',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [MenuScene, GameScene, GameOverScene]
};

const game = new Phaser.Game(config);

// ========================================
// MENU SCENE
// ========================================
function MenuScene() {
    this.scene = new Phaser.Scene('MenuScene');

    this.scene.create = function () {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Create particle texture
        const gfx = this.make.graphics({ x: 0, y: 0, add: false });
        gfx.fillStyle(0xffffff);
        gfx.fillCircle(3, 3, 3);
        gfx.generateTexture('menuParticle', 6, 6);
        gfx.destroy();

        // Animated star background
        this.add.particles(0, 0, 'menuParticle', {
            x: { min: 0, max: width },
            y: { min: -10, max: 0 },
            speedY: { min: 50, max: 150 },
            lifespan: 6000,
            scale: { start: 0.5, end: 0 },
            alpha: { start: 1, end: 0 },
            frequency: 50,
            blendMode: 'ADD'
        });

        // Title with glow effect
        const title = this.add.text(width / 2, height / 4 - 30, 'COSMIC DEFENDER', {
            fontSize: '64px',
            fontFamily: 'Arial Black',
            color: '#00ffff',
            stroke: '#003366',
            strokeThickness: 6,
            shadow: { offsetX: 0, offsetY: 0, color: '#00ffff', blur: 20, fill: true }
        }).setOrigin(0.5);

        this.tweens.add({
            targets: title,
            scaleX: 1.05,
            scaleY: 1.05,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Subtitle
        this.add.text(width / 2, height / 4 + 30, 'ULTIMATE EDITION — 15 Levels of Cosmic Warfare', {
            fontSize: '18px',
            fontFamily: 'Arial',
            color: '#ff6b6b',
            stroke: '#330000',
            strokeThickness: 2
        }).setOrigin(0.5);

        // Level preview text
        const levelPreview = [
            '🌌 15 unique levels across the galaxy',
            '👾 8 enemy types including Splitters & Carriers',
            '🏆 Mini-bosses and epic boss battles',
            '⚡ 5 weapons, 6 power-ups, combo system'
        ];
        levelPreview.forEach((line, i) => {
            this.add.text(width / 2, height / 2 - 60 + i * 28, line, {
                fontSize: '16px', color: '#88aacc', fontFamily: 'Arial'
            }).setOrigin(0.5);
        });

        // Start button
        const startButton = this.add.text(width / 2, height / 2 + 60, 'START GAME', {
            fontSize: '40px',
            fontFamily: 'Arial',
            color: '#ffff00',
            stroke: '#663300',
            strokeThickness: 4,
            backgroundColor: '#003300',
            padding: { x: 30, y: 12 }
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerover', () => {
            startButton.setScale(1.1);
            startButton.setColor('#00ff00');
        });
        startButton.on('pointerout', () => {
            startButton.setScale(1);
            startButton.setColor('#ffff00');
        });
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        // Also start on Enter/Space
        this.input.keyboard.on('keydown-SPACE', () => this.scene.start('GameScene'));
        this.input.keyboard.on('keydown-ENTER', () => this.scene.start('GameScene'));

        // High score display
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        const bestLevel = localStorage.getItem('cosmicDefenderBestLevel') || 1;
        this.add.text(width / 2, height - 140, `High Score: ${highScore}  |  Best Level: ${bestLevel}`, {
            fontSize: '24px', color: '#ff00ff'
        }).setOrigin(0.5);

        // Controls summary
        const controlLines = [
            'Move: WASD / Arrow Keys    Shoot: SPACE / Click    Weapons: 1-5',
            'Bomb: B    Pause: P'
        ];
        controlLines.forEach((line, i) => {
            this.add.text(width / 2, height - 90 + i * 25, line, {
                fontSize: '14px', color: '#aaaaaa'
            }).setOrigin(0.5);
        });
    };

    return this.scene;
}

// ========================================
// MAIN GAME SCENE
// ========================================
function GameScene() {
    this.scene = new Phaser.Scene('GameScene');

    this.scene.preload = function () {
        this.createGraphics();
    };

    this.scene.create = function () {
        this.score = 0;
        this.health = 100;
        this.gameOver = false;
        this.isPaused = false;
        this.enemySpawnTimer = 0;
        this.powerUpTimer = 0;
        this.difficulty = 1;
        this.wave = 1;
        this.enemiesKilled = 0;
        this.levelKills = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.comboTimer = 0;
        this.lastShootTime = 0;
        this.bossActive = false;
        this.bossTimer = 0;
        this.autoFireHeld = false;
        this.totalTime = 0;

        // Level system
        this.currentLevel = 0; // index into LEVELS
        this.levelTransitioning = false;
        this.bossDefeatedThisLevel = false;
        this.miniBossSpawned = false;
        this.miniBossKills = 0; // kills needed before mini-boss

        // Weapon system
        this.currentWeapon = 'blaster';
        this.unlockedWeapons = ['blaster'];
        this.weaponNotifications = {};

        // Bomb system
        this.bombs = 3;

        // Power-up states
        this.rapidFire = false;
        this.multiShot = false;
        this.shield = false;
        this.laserBeam = false;
        this.rapidFireTime = 0;
        this.multiShotTime = 0;
        this.shieldTime = 0;
        this.laserBeamTime = 0;

        // Player speed
        this.playerSpeed = 350;

        // === DASH SYSTEM ===
        this.dashCooldown = 0;
        this.dashCooldownMax = 1500; // 1.5s cooldown
        this.dashDuration = 0;
        this.dashDurationMax = 200; // 200ms dash
        this.isDashing = false;
        this.dashDirection = { x: 0, y: 0 };
        this.dashSpeed = 1200;
        this.dashCharges = 2;
        this.dashChargesMax = 2;
        this.dashRechargeTimer = 0;

        // === GRAZE SYSTEM ===
        this.grazeScore = 0;
        this.grazeMultiplier = 1;
        this.grazeTimer = 0;
        this.grazeRadius = 40; // pixels from player center
        this.grazedBullets = new Set();

        // === EVENT SYSTEM ===
        this.eventTimer = 0;
        this.eventInterval = 25000; // event every 25s
        this.activeEvent = null;
        this.eventDuration = 0;
        this.eventObjects = [];
        this.totalEvents = 0;

        // === SLOW-MO SYSTEM ===
        this.slowmoActive = false;
        this.slowmoTimer = 0;
        this.slowmoFactor = 0.3;
        this.killStreak = 0;
        this.killStreakTimer = 0;

        // === COIN/GEM DROPS ===
        this.coins = null; // will be physics group
        this.gemsCollected = 0;
        this.magnetActive = false;
        this.magnetTime = 0;

        // === FORMATION SYSTEM ===
        this.formationTimer = 0;
        this.formationInterval = 15000;

        // Notification queue (to prevent text clutter)
        this.notificationQueue = [];
        this.activeNotification = null;
        this.notificationTimer = 0;

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Animated background
        this.createStarfield();

        // Create player
        this.player = this.physics.add.sprite(width / 2, height - 100, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);

        // Player trail
        this.playerTrail = this.add.particles(0, 0, 'particle', {
            follow: this.player,
            quantity: 2,
            scale: { start: 0.3, end: 0 },
            alpha: { start: 0.8, end: 0 },
            lifespan: 300,
            blendMode: 'ADD',
            tint: 0x00ffff
        });

        // Groups
        this.bullets = this.physics.add.group();
        this.enemies = this.physics.add.group();
        this.enemyBullets = this.physics.add.group();
        this.powerUps = this.physics.add.group();
        this.explosions = this.add.group();
        this.coins = this.physics.add.group();

        // Collisions
        this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hitPlayer, null, this);
        this.physics.add.overlap(this.player, this.enemyBullets, this.hitPlayerBullet, null, this);
        this.physics.add.overlap(this.player, this.powerUps, this.collectPowerUp, null, this);
        this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

        // ---- COMPACT HUD (top-left panel) ----
        // Semi-transparent HUD background
        this.hudBg = this.add.rectangle(0, 0, 220, 70, 0x000000, 0.5).setOrigin(0, 0).setDepth(100);

        this.scoreText = this.add.text(12, 8, 'Score: 0', {
            fontSize: '18px', color: '#00ff00', fontFamily: 'Arial',
            stroke: '#003300', strokeThickness: 2
        }).setDepth(101);

        this.levelText = this.add.text(12, 30, 'Lv.1 — Outer Rim Patrol', {
            fontSize: '13px', color: '#88ccff', fontFamily: 'Arial',
            stroke: '#002244', strokeThickness: 2
        }).setDepth(101);

        this.waveKillText = this.add.text(12, 48, '0 / 15 kills', {
            fontSize: '12px', color: '#aaaaaa', fontFamily: 'Arial'
        }).setDepth(101);

        // Health bar (top-right, compact)
        const hbX = width - 130;
        this.hudBgRight = this.add.rectangle(width - 230, 0, 230, 55, 0x000000, 0.5).setOrigin(0, 0).setDepth(100);

        this.healthLabel = this.add.text(width - 225, 8, '❤️', {
            fontSize: '14px', color: '#ff4444'
        }).setDepth(101);
        this.healthBarBg = this.add.rectangle(hbX, 12, 160, 12, 0x660000).setOrigin(0, 0).setDepth(101);
        this.healthBar = this.add.rectangle(hbX, 12, 160, 12, 0x00ff00).setOrigin(0, 0).setDepth(101);
        this.healthValText = this.add.text(width - 12, 9, '100', {
            fontSize: '12px', color: '#ffffff', fontFamily: 'Arial'
        }).setOrigin(1, 0).setDepth(101);

        // Bomb icons (top-right, below health)
        this.bombText = this.add.text(width - 225, 30, '💣 ×3', {
            fontSize: '13px', color: '#ff8800', fontFamily: 'Arial',
            stroke: '#663300', strokeThickness: 1
        }).setDepth(101);

        // Weapon display (top-right, compact)
        this.weaponText = this.add.text(width - 130, 30, '🔫 Blaster [1]', {
            fontSize: '12px', color: '#00ff00', fontFamily: 'Arial'
        }).setDepth(101);

        // Power-up indicators (small icons, top-right below weapon)
        this.powerUpText = this.add.text(width - 225, 44, '', {
            fontSize: '11px', color: '#ffff00', fontFamily: 'Arial'
        }).setDepth(101);

        // Combo indicator (small, right side, only shows when active)
        this.comboText = this.add.text(width - 12, 60, '', {
            fontSize: '16px', color: '#ff00ff', fontFamily: 'Arial Black',
            stroke: '#660066', strokeThickness: 3
        }).setOrigin(1, 0).setDepth(101);

        // Graze indicator
        this.grazeText = this.add.text(width / 2, 8, '', {
            fontSize: '14px', color: '#ff88ff', fontFamily: 'Arial',
            stroke: '#440044', strokeThickness: 2
        }).setOrigin(0.5, 0).setDepth(101);

        // Dash charges display (below bomb)
        this.dashText = this.add.text(width - 160, 44, '💨 ×2', {
            fontSize: '11px', color: '#66ccff', fontFamily: 'Arial'
        }).setDepth(101);

        // Event banner (center top, hidden by default)
        this.eventBanner = this.add.text(width / 2, 30, '', {
            fontSize: '18px', color: '#ff4400', fontFamily: 'Arial Black',
            stroke: '#440000', strokeThickness: 3, align: 'center'
        }).setOrigin(0.5).setAlpha(0).setDepth(103);

        // Center notification area (for level-ups, weapon unlocks, etc.)
        this.centerNotifText = this.add.text(width / 2, 70, '', {
            fontSize: '20px', color: '#ffffff', fontFamily: 'Arial Black',
            stroke: '#000000', strokeThickness: 4, align: 'center'
        }).setOrigin(0.5).setAlpha(0).setDepth(102);

        // Boss health bar (hidden by default)
        this.bossHealthBarBg = this.add.rectangle(width / 2, height - 20, 400, 10, 0x660000).setVisible(false).setDepth(100);
        this.bossHealthBar = this.add.rectangle(width / 2, height - 20, 400, 10, 0xff0000).setVisible(false).setDepth(100);
        this.bossNameText = this.add.text(width / 2, height - 35, '', {
            fontSize: '14px', color: '#ff4444', stroke: '#440000', strokeThickness: 2
        }).setOrigin(0.5).setVisible(false).setDepth(101);

        // Level progress bar (bottom of screen)
        this.levelBarBg = this.add.rectangle(0, height - 4, width, 4, 0x222244).setOrigin(0, 0).setDepth(99);
        this.levelBar = this.add.rectangle(0, height - 4, 0, 4, 0x4488ff).setOrigin(0, 0).setDepth(99);

        // --- KEYBOARD INPUT ---
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.bombKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.shiftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        // Weapon switch keys
        this.weaponKeys = {
            ONE: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),
            TWO: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),
            THREE: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),
            FOUR: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),
            FIVE: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE)
        };

        // Mouse shooting
        this.input.on('pointerdown', () => {
            if (!this.isPaused && !this.gameOver) this.shootBullet();
        });

        // Pause overlay
        this.pauseOverlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7).setVisible(false).setDepth(200);
        this.pauseTextObj = this.add.text(width / 2, height / 2, 'PAUSED\nPress P to Continue', {
            fontSize: '48px', color: '#ffffff', align: 'center'
        }).setOrigin(0.5).setVisible(false).setDepth(201);

        // Show level start
        this.showLevelStart();
    };

    // ========================================
    // UPDATE LOOP
    // ========================================
    this.scene.update = function (time, delta) {
        if (this.gameOver) return;

        // Pause toggle
        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            this.isPaused = !this.isPaused;
            this.pauseOverlay.setVisible(this.isPaused);
            this.pauseTextObj.setVisible(this.isPaused);
            if (this.isPaused) this.physics.pause();
            else this.physics.resume();
            return;
        }
        if (this.isPaused) return;
        if (this.levelTransitioning) return;

        // Apply slowmo factor to delta
        const effectiveDelta = this.slowmoActive ? delta * this.slowmoFactor : delta;
        this.totalTime += effectiveDelta;

        // === SLOW-MO UPDATE ===
        if (this.slowmoActive) {
            this.slowmoTimer -= delta; // use real delta for slowmo timer
            if (this.slowmoTimer <= 0) {
                this.slowmoActive = false;
                this.cameras.main.setPostPipeline([]);
                this.time.timeScale = 1;
            }
        }

        // === KILL STREAK TRACKER ===
        if (this.killStreakTimer > 0) {
            this.killStreakTimer -= effectiveDelta;
            if (this.killStreakTimer <= 0) {
                this.killStreak = 0;
            }
        }

        // --- PLAYER MOVEMENT (keyboard) ---
        let vx = 0, vy = 0;
        if (this.cursors.left.isDown || this.wasd.left.isDown) vx = -this.playerSpeed;
        if (this.cursors.right.isDown || this.wasd.right.isDown) vx = this.playerSpeed;
        if (this.cursors.up.isDown || this.wasd.up.isDown) vy = -this.playerSpeed;
        if (this.cursors.down.isDown || this.wasd.down.isDown) vy = this.playerSpeed;

        // Normalize diagonal
        if (vx !== 0 && vy !== 0) {
            vx *= 0.707;
            vy *= 0.707;
        }

        // === DASH MECHANIC ===
        if (this.isDashing) {
            this.dashDuration -= delta;
            this.player.setVelocity(this.dashDirection.x * this.dashSpeed, this.dashDirection.y * this.dashSpeed);
            // Spawn dash trail particles
            if (Math.random() < 0.6) {
                const trail = this.add.circle(this.player.x, this.player.y, 8, 0x00ccff, 0.6);
                this.tweens.add({ targets: trail, alpha: 0, scale: 0, duration: 300, onComplete: () => trail.destroy() });
            }
            if (this.dashDuration <= 0) {
                this.isDashing = false;
                this.player.setAlpha(1);
            }
        } else {
            this.player.setVelocity(vx, vy);
        }

        // Dash recharge
        if (this.dashCharges < this.dashChargesMax) {
            this.dashRechargeTimer += delta;
            if (this.dashRechargeTimer >= this.dashCooldownMax) {
                this.dashCharges = Math.min(this.dashChargesMax, this.dashCharges + 1);
                this.dashRechargeTimer = 0;
                this.dashText.setText('💨 ×' + this.dashCharges);
            }
        }

        // Dash trigger
        if (Phaser.Input.Keyboard.JustDown(this.shiftKey) && this.dashCharges > 0 && !this.isDashing) {
            this.performDash(vx, vy);
        }

        // Constrain vertical position to lower 80% of screen
        const minY = this.cameras.main.height * 0.20;
        const maxY = this.cameras.main.height - 40;
        if (this.player.y < minY) this.player.y = minY;
        if (this.player.y > maxY) this.player.y = maxY;

        // --- WEAPON SWITCHING ---
        const weaponOrder = ['blaster', 'spread', 'homing', 'plasma', 'chain'];
        const keyNames = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
        keyNames.forEach((key, i) => {
            if (Phaser.Input.Keyboard.JustDown(this.weaponKeys[key])) {
                const wName = weaponOrder[i];
                if (this.unlockedWeapons.includes(wName)) {
                    this.currentWeapon = wName;
                    const w = WEAPONS[wName];
                    this.weaponText.setText(`${w.icon} ${w.name} [${w.key}]`);
                    this.weaponText.setColor(w.color);
                    soundManager.playWeaponSwitch();
                }
            }
        });

        // --- CHECK WEAPON UNLOCKS ---
        weaponOrder.forEach(wName => {
            if (!this.unlockedWeapons.includes(wName) && this.score >= WEAPONS[wName].unlockScore) {
                this.unlockedWeapons.push(wName);
                this.showWeaponUnlock(wName);
            }
        });

        // --- SHOOTING (hold space for auto-fire) ---
        const wDef = WEAPONS[this.currentWeapon];
        const shootDelay = this.rapidFire ? Math.floor(wDef.fireRate * 0.5) : wDef.fireRate;
        if (this.spaceKey.isDown && time - this.lastShootTime > shootDelay) {
            this.shootBullet();
            this.lastShootTime = time;
        }

        // --- BOMB ---
        if (Phaser.Input.Keyboard.JustDown(this.bombKey)) {
            this.useBomb();
        }

        // Update starfield
        this.updateStarfield(effectiveDelta);

        // Combo timer decay
        if (this.combo > 0) {
            this.comboTimer -= effectiveDelta;
            if (this.comboTimer <= 0) {
                this.combo = 0;
                this.comboText.setText('');
            }
        }

        // Get current level data
        const lvl = LEVELS[this.currentLevel];

        // Check if level is complete (kills threshold reached + boss not yet spawned)
        if (!this.bossActive && !this.bossDefeatedThisLevel && this.levelKills >= lvl.killsRequired) {
            this.spawnBoss();
        }

        // Spawn mini-boss at halfway point
        if (!this.miniBossSpawned && !this.bossActive && this.levelKills >= Math.floor(lvl.killsRequired * 0.5) && this.currentLevel >= 2) {
            this.spawnMiniBoss();
            this.miniBossSpawned = true;
        }

        // Spawn enemies
        if (!this.bossActive && !this.bossDefeatedThisLevel) {
            this.enemySpawnTimer += effectiveDelta;
            if (this.enemySpawnTimer > lvl.spawnRate && this.enemies.countActive() < lvl.maxEnemies) {
                this.spawnEnemy();
                this.enemySpawnTimer = 0;
            }
        }

        // === FORMATION SPAWNING ===
        if (!this.bossActive && !this.bossDefeatedThisLevel && this.currentLevel >= 1) {
            this.formationTimer += effectiveDelta;
            if (this.formationTimer > this.formationInterval) {
                this.spawnFormation();
                this.formationTimer = 0;
            }
        }

        // === RANDOM EVENTS ===
        if (!this.bossActive && this.currentLevel >= 1) {
            this.eventTimer += effectiveDelta;
            if (this.eventTimer > this.eventInterval && !this.activeEvent) {
                this.triggerRandomEvent();
                this.eventTimer = 0;
            }
        }

        // Update active event
        if (this.activeEvent) {
            this.updateEvent(effectiveDelta);
        }

        // === GRAZE SYSTEM ===
        this.updateGraze(effectiveDelta);

        // === COIN MAGNET ===
        if (this.magnetActive) {
            this.magnetTime -= effectiveDelta;
            if (this.magnetTime <= 0) this.magnetActive = false;
            this.coins.children.entries.forEach(coin => {
                if (!coin.active) return;
                const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, coin.x, coin.y);
                if (dist < 250) {
                    const angle = Phaser.Math.Angle.Between(coin.x, coin.y, this.player.x, this.player.y);
                    coin.setVelocity(Math.cos(angle) * 300, Math.sin(angle) * 300);
                }
            });
        }

        // Spawn power-ups
        this.powerUpTimer += effectiveDelta;
        const powerUpInterval = Math.max(5000, 9000 - this.currentLevel * 200);
        if (this.powerUpTimer > powerUpInterval) {
            this.spawnPowerUp();
            this.powerUpTimer = 0;
        }

        // Update power-up timers
        this.updatePowerUps(effectiveDelta);

        // Clean up off-screen objects
        this.cleanupObjects();

        // Difficulty (legacy, but still used for points calc)
        this.difficulty = Math.min(1 + this.currentLevel, 15);

        // Health bar update
        const healthPercent = this.health / 100;
        this.healthBar.width = 160 * healthPercent;
        if (healthPercent > 0.5) this.healthBar.setFillStyle(0x00ff00);
        else if (healthPercent > 0.25) this.healthBar.setFillStyle(0xffff00);
        else this.healthBar.setFillStyle(0xff0000);
        this.healthValText.setText(Math.max(0, this.health));

        // Update combo display (compact)
        if (this.combo >= 3) {
            const tier = this.getCurrentComboTier();
            if (tier) {
                this.comboText.setText(`${tier.name} ×${this.combo}`);
                this.comboText.setColor(tier.color);
            } else {
                this.comboText.setText('×' + this.combo);
            }
        }

        // Level progress bar
        if (!this.bossDefeatedThisLevel) {
            const progress = Math.min(this.levelKills / lvl.killsRequired, 1);
            this.levelBar.width = this.cameras.main.width * progress;
        }

        // Kill count display
        this.waveKillText.setText(`${this.levelKills} / ${lvl.killsRequired} kills`);

        // Update homing bullets
        this.updateHomingBullets(effectiveDelta);

        // Process notification queue
        this.processNotifications(effectiveDelta);
    };

    // ========================================
    // NOTIFICATION SYSTEM (prevents text clutter)
    // ========================================
    this.scene.queueNotification = function (text, color, duration) {
        this.notificationQueue.push({ text, color: color || '#ffffff', duration: duration || 1500 });
    };

    this.scene.processNotifications = function (delta) {
        if (this.activeNotification) {
            this.notificationTimer -= delta;
            if (this.notificationTimer <= 0) {
                this.activeNotification = null;
                this.tweens.add({
                    targets: this.centerNotifText,
                    alpha: 0, y: this.centerNotifText.y - 20,
                    duration: 300
                });
            }
            return;
        }

        if (this.notificationQueue.length > 0) {
            const notif = this.notificationQueue.shift();
            this.activeNotification = notif;
            this.notificationTimer = notif.duration;
            this.centerNotifText.setText(notif.text);
            this.centerNotifText.setColor(notif.color);
            this.centerNotifText.setAlpha(0);
            this.centerNotifText.y = 70;
            this.tweens.add({
                targets: this.centerNotifText,
                alpha: 1,
                duration: 200
            });
        }
    };

    // ========================================
    // LEVEL SYSTEM
    // ========================================
    this.scene.showLevelStart = function () {
        const lvl = LEVELS[this.currentLevel];
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        this.levelTransitioning = true;

        // Update level text
        this.levelText.setText(`Lv.${lvl.level} — ${lvl.name}`);
        this.waveKillText.setText(`0 / ${lvl.killsRequired} kills`);

        const overlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.8).setDepth(150);
        const title = this.add.text(width / 2, height / 2 - 30, `LEVEL ${lvl.level}`, {
            fontSize: '52px', fontFamily: 'Arial Black', color: '#00ffff',
            stroke: '#003366', strokeThickness: 5
        }).setOrigin(0.5).setDepth(151);
        const subtitle = this.add.text(width / 2, height / 2 + 25, lvl.name.toUpperCase(), {
            fontSize: '24px', fontFamily: 'Arial', color: '#ffcc00',
            stroke: '#664400', strokeThickness: 3
        }).setOrigin(0.5).setDepth(151);

        this.tweens.add({
            targets: [overlay, title, subtitle],
            alpha: 0,
            duration: 800,
            delay: 1800,
            onComplete: () => {
                overlay.destroy();
                title.destroy();
                subtitle.destroy();
                this.levelTransitioning = false;
            }
        });

        if (this.currentLevel > 0) {
            soundManager.playLevelUp();
        }
    };

    this.scene.advanceLevel = function () {
        if (this.currentLevel >= LEVELS.length - 1) return; // Already at max

        this.currentLevel++;
        this.levelKills = 0;
        this.bossDefeatedThisLevel = false;
        this.miniBossSpawned = false;
        this.wave++;

        // Heal player a bit between levels
        this.health = Math.min(100, this.health + 15);
        this.healthValText.setText(this.health);

        // Save best level
        const bestLevel = localStorage.getItem('cosmicDefenderBestLevel') || 1;
        if (this.currentLevel + 1 > bestLevel) {
            localStorage.setItem('cosmicDefenderBestLevel', this.currentLevel + 1);
        }

        // Level progress bar reset
        this.levelBar.width = 0;

        this.showLevelStart();
    };

    // ========================================
    // GRAPHICS
    // ========================================
    this.scene.createGraphics = function () {
        const g = this.make.graphics({ x: 0, y: 0, add: false });

        // Player ship
        g.fillStyle(0x00ffff);
        g.fillTriangle(20, 5, 5, 35, 35, 35);
        g.fillStyle(0x0099ff);
        g.fillRect(15, 25, 10, 12);
        g.fillStyle(0x00ccff);
        g.fillCircle(20, 20, 6);
        g.fillStyle(0xffffff);
        g.fillCircle(20, 20, 3);
        g.fillStyle(0x0088cc);
        g.fillTriangle(5, 35, 0, 30, 5, 25);
        g.fillTriangle(35, 35, 40, 30, 35, 25);
        g.fillStyle(0xff6600);
        g.fillRect(16, 35, 3, 5);
        g.fillRect(21, 35, 3, 5);
        g.generateTexture('player', 40, 40);
        g.clear();

        // Standard bullet
        g.fillStyle(0x00ff00);
        g.fillRect(0, 0, 5, 20);
        g.fillStyle(0xffffff);
        g.fillRect(1.5, 0, 2, 20);
        g.fillStyle(0x88ff88);
        g.fillRect(0, 0, 5, 5);
        g.generateTexture('bullet', 5, 20);
        g.clear();

        // Spread bullet
        g.fillStyle(0xff6600);
        g.fillRect(0, 0, 4, 14);
        g.fillStyle(0xffcc00);
        g.fillRect(1, 0, 2, 14);
        g.generateTexture('bulletSpread', 4, 14);
        g.clear();

        // Homing missile
        g.fillStyle(0xff00ff);
        g.fillTriangle(5, 0, 0, 14, 10, 14);
        g.fillStyle(0xff66ff);
        g.fillCircle(5, 8, 3);
        g.fillStyle(0xff8800);
        g.fillRect(3, 12, 4, 4);
        g.generateTexture('bulletHoming', 10, 16);
        g.clear();

        // Plasma ball
        g.fillStyle(0x00ccff);
        g.fillCircle(10, 10, 10);
        g.fillStyle(0x66eeff);
        g.fillCircle(10, 10, 7);
        g.fillStyle(0xffffff);
        g.fillCircle(10, 10, 4);
        g.generateTexture('bulletPlasma', 20, 20);
        g.clear();

        // Chain lightning bolt
        g.fillStyle(0xffff00);
        g.fillRect(0, 0, 3, 18);
        g.fillStyle(0xffffff);
        g.fillRect(0.5, 0, 2, 18);
        g.fillStyle(0xffff88);
        g.fillRect(0, 0, 3, 4);
        g.generateTexture('bulletChain', 3, 18);
        g.clear();

        // Laser beam
        g.fillStyle(0x00ffff);
        g.fillRect(0, 0, 8, 30);
        g.fillStyle(0xffffff);
        g.fillRect(2, 0, 4, 30);
        g.generateTexture('laser', 8, 30);
        g.clear();

        // Enemy - standard
        g.fillStyle(0xff0000);
        g.fillTriangle(20, 35, 5, 5, 35, 5);
        g.fillStyle(0xff3300);
        g.fillCircle(20, 15, 8);
        g.fillStyle(0xff6600);
        g.fillCircle(20, 15, 5);
        g.fillStyle(0xffff00);
        g.fillCircle(20, 15, 2);
        g.fillStyle(0xcc0000);
        g.fillRect(5, 10, 4, 8);
        g.fillRect(31, 10, 4, 8);
        g.generateTexture('enemy', 40, 40);
        g.clear();

        // Fast enemy
        g.fillStyle(0xff00ff);
        g.fillTriangle(15, 25, 8, 8, 22, 8);
        g.fillStyle(0xff66ff);
        g.fillCircle(15, 12, 5);
        g.fillStyle(0xffccff);
        g.fillCircle(15, 12, 2);
        g.generateTexture('enemyFast', 30, 30);
        g.clear();

        // Tank enemy
        g.fillStyle(0x00ff00);
        g.fillRect(5, 5, 30, 25);
        g.fillStyle(0x00cc00);
        g.fillCircle(20, 17, 8);
        g.fillStyle(0x009900);
        g.fillRect(18, 17, 4, 10);
        g.generateTexture('enemyTank', 40, 35);
        g.clear();

        // Stealth enemy
        g.fillStyle(0x3366ff);
        g.fillTriangle(15, 28, 3, 5, 27, 5);
        g.fillStyle(0x5588ff);
        g.fillCircle(15, 12, 5);
        g.fillStyle(0x99bbff);
        g.fillCircle(15, 12, 2);
        g.generateTexture('enemyStealth', 30, 30);
        g.clear();

        // Bomber enemy
        g.fillStyle(0xff8800);
        g.fillRect(5, 5, 30, 22);
        g.fillStyle(0xffaa00);
        g.fillCircle(20, 16, 7);
        g.fillStyle(0xffcc44);
        g.fillCircle(20, 16, 4);
        g.fillStyle(0xcc6600);
        g.fillRect(8, 22, 6, 6);
        g.fillRect(26, 22, 6, 6);
        g.generateTexture('enemyBomber', 40, 35);
        g.clear();

        // Healer enemy (new) — green cross
        g.fillStyle(0x00cc44);
        g.fillCircle(18, 18, 18);
        g.fillStyle(0x00ff66);
        g.fillCircle(18, 18, 12);
        g.fillStyle(0xffffff);
        g.fillRect(14, 8, 8, 20);
        g.fillRect(8, 14, 20, 8);
        g.generateTexture('enemyHealer', 36, 36);
        g.clear();

        // Splitter enemy (new) — yellow diamond
        g.fillStyle(0xeecc00);
        g.fillTriangle(20, 2, 2, 20, 20, 38);
        g.fillTriangle(20, 2, 38, 20, 20, 38);
        g.fillStyle(0xffee44);
        g.fillCircle(20, 20, 6);
        g.fillStyle(0xffffff);
        g.fillCircle(20, 20, 3);
        g.generateTexture('enemySplitter', 40, 40);
        g.clear();

        // Splitter child (small version)
        g.fillStyle(0xddbb00);
        g.fillTriangle(10, 1, 1, 10, 10, 19);
        g.fillTriangle(10, 1, 19, 10, 10, 19);
        g.fillStyle(0xffee44);
        g.fillCircle(10, 10, 3);
        g.generateTexture('enemySplitterChild', 20, 20);
        g.clear();

        // Carrier enemy (new) — large dark ship
        g.fillStyle(0x664488);
        g.fillRect(5, 5, 50, 35);
        g.fillStyle(0x8866aa);
        g.fillRect(10, 10, 40, 25);
        g.fillStyle(0xaa88cc);
        g.fillCircle(30, 22, 8);
        g.fillStyle(0xffffff);
        g.fillCircle(30, 22, 3);
        g.fillStyle(0x553377);
        g.fillRect(0, 15, 8, 15);
        g.fillRect(52, 15, 8, 15);
        g.generateTexture('enemyCarrier', 60, 45);
        g.clear();

        // Mini-boss
        g.fillStyle(0x884400);
        g.fillRect(10, 15, 60, 40);
        g.fillStyle(0xcc6600);
        g.fillRect(15, 20, 50, 30);
        g.fillStyle(0xff8800);
        g.fillCircle(40, 35, 12);
        g.fillStyle(0xffcc00);
        g.fillCircle(40, 35, 7);
        g.fillStyle(0xffffff);
        g.fillCircle(40, 35, 3);
        g.fillStyle(0x663300);
        g.fillTriangle(10, 15, 0, 8, 10, 30);
        g.fillTriangle(70, 15, 80, 8, 70, 30);
        g.generateTexture('miniBoss', 80, 55);
        g.clear();

        // Boss
        g.fillStyle(0x660000);
        g.fillRect(10, 20, 80, 50);
        g.fillStyle(0xff0000);
        g.fillRect(20, 30, 60, 30);
        g.fillStyle(0xff3300);
        g.fillCircle(50, 45, 15);
        g.fillStyle(0xff6600);
        g.fillCircle(50, 45, 10);
        g.fillStyle(0xffff00);
        g.fillCircle(50, 45, 5);
        g.fillStyle(0x990000);
        g.fillRect(15, 45, 8, 15);
        g.fillRect(77, 45, 8, 15);
        g.fillRect(40, 50, 8, 20);
        g.fillRect(52, 50, 8, 20);
        g.fillStyle(0x330000);
        g.fillTriangle(10, 20, 0, 10, 10, 40);
        g.fillTriangle(90, 20, 100, 10, 90, 40);
        g.generateTexture('boss', 100, 70);
        g.clear();

        // Enemy bullet
        g.fillStyle(0xff00ff);
        g.fillCircle(5, 5, 5);
        g.fillStyle(0xff66ff);
        g.fillCircle(5, 5, 3);
        g.generateTexture('enemyBullet', 10, 10);
        g.clear();

        // Particle
        g.fillStyle(0xffffff);
        g.fillCircle(3, 3, 3);
        g.generateTexture('particle', 6, 6);
        g.clear();

        // Power-ups
        g.fillStyle(0x00ffff);
        g.fillCircle(15, 15, 15);
        g.lineStyle(3, 0xffffff);
        g.strokeCircle(15, 15, 12);
        g.lineStyle(2, 0x00cccc);
        g.strokeCircle(15, 15, 8);
        g.generateTexture('powerupShield', 30, 30);
        g.clear();

        g.fillStyle(0xff00ff);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillTriangle(15, 8, 10, 22, 20, 22);
        g.generateTexture('powerupRapid', 30, 30);
        g.clear();

        g.fillStyle(0xffff00);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillRect(12, 8, 2, 14);
        g.fillRect(16, 8, 2, 14);
        g.fillRect(8, 10, 2, 10);
        g.fillRect(20, 10, 2, 10);
        g.generateTexture('powerupMulti', 30, 30);
        g.clear();

        g.fillStyle(0x00ffcc);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillRect(13, 5, 4, 20);
        g.fillRect(10, 8, 10, 3);
        g.fillRect(10, 17, 10, 3);
        g.generateTexture('powerupLaser', 30, 30);
        g.clear();

        // Bomb powerup
        g.fillStyle(0xff4400);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillCircle(15, 15, 8);
        g.fillStyle(0xff4400);
        g.fillCircle(15, 15, 5);
        g.generateTexture('powerupBomb', 30, 30);
        g.clear();

        // Health powerup
        g.fillStyle(0x00ff66);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillRect(12, 8, 6, 14);
        g.fillRect(8, 12, 14, 6);
        g.generateTexture('powerupHealth', 30, 30);
        g.clear();

        // Magnet powerup
        g.fillStyle(0xff2266);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillRect(7, 8, 4, 10);
        g.fillRect(19, 8, 4, 10);
        g.fillRect(7, 8, 16, 4);
        g.generateTexture('powerupMagnet', 30, 30);
        g.clear();

        // Coin textures
        g.fillStyle(0xcc8844);
        g.fillCircle(8, 8, 8);
        g.fillStyle(0xddaa66);
        g.fillCircle(8, 8, 5);
        g.generateTexture('coinBronze', 16, 16);
        g.clear();

        g.fillStyle(0xaaaacc);
        g.fillCircle(8, 8, 8);
        g.fillStyle(0xddddff);
        g.fillCircle(8, 8, 5);
        g.generateTexture('coinSilver', 16, 16);
        g.clear();

        g.fillStyle(0xddaa00);
        g.fillCircle(10, 10, 10);
        g.fillStyle(0xffdd44);
        g.fillCircle(10, 10, 7);
        g.fillStyle(0xffffff);
        g.fillCircle(10, 10, 3);
        g.generateTexture('coinGold', 20, 20);
        g.clear();
    };

    // ========================================
    // STARFIELD
    // ========================================
    this.scene.createStarfield = function () {
        this.starLayers = [];
        for (let i = 0; i < 3; i++) {
            const layer = this.add.particles(0, 0, 'particle', {
                x: { min: 0, max: this.cameras.main.width },
                y: { min: -10, max: 0 },
                speedY: { min: 30 + i * 30, max: 80 + i * 50 },
                lifespan: 8000,
                scale: { start: 0.3 + i * 0.2, end: 0 },
                alpha: { start: 0.6 + i * 0.2, end: 0 },
                frequency: 100 - i * 20,
                blendMode: 'ADD'
            });
            this.starLayers.push(layer);
        }
    };
    this.scene.updateStarfield = function (_delta) { /* particles auto-scroll */ };

    // ========================================
    // DASH SYSTEM
    // ========================================
    this.scene.performDash = function (vx, vy) {
        this.dashCharges--;
        this.isDashing = true;
        this.dashDuration = this.dashDurationMax;
        this.dashRechargeTimer = 0;

        // Determine dash direction (movement direction or forward if standing still)
        if (vx === 0 && vy === 0) {
            this.dashDirection = { x: 0, y: -1 }; // dash forward by default
        } else {
            const mag = Math.sqrt(vx * vx + vy * vy);
            this.dashDirection = { x: vx / mag, y: vy / mag };
        }

        // Invincibility during dash
        this.player.setAlpha(0.4);

        // Visual burst
        soundManager.playDash();
        this.cameras.main.shake(50, 0.003);
        const burst = this.add.circle(this.player.x, this.player.y, 5, 0x00ccff, 0.7);
        this.tweens.add({ targets: burst, radius: 50, alpha: 0, duration: 200, onComplete: () => burst.destroy() });

        // Afterimage effect
        for (let i = 0; i < 3; i++) {
            this.time.delayedCall(i * 40, () => {
                if (!this.player.active) return;
                const ghost = this.add.sprite(this.player.x, this.player.y, 'player').setScale(1.5).setAlpha(0.4).setTint(0x00ccff);
                this.tweens.add({ targets: ghost, alpha: 0, duration: 200, onComplete: () => ghost.destroy() });
            });
        }

        this.dashText.setText('💨 ×' + this.dashCharges);
    };

    // ========================================
    // GRAZE SYSTEM — near-miss scoring
    // ========================================
    this.scene.updateGraze = function (delta) {
        if (!this.player.active) return;
        const px = this.player.x;
        const py = this.player.y;
        let grazedThisFrame = false;

        this.enemyBullets.children.entries.forEach(bullet => {
            if (!bullet.active) return;
            const bulletId = bullet._id || (bullet._id = Math.random());
            if (this.grazedBullets.has(bulletId)) return;

            const dist = Phaser.Math.Distance.Between(px, py, bullet.x, bullet.y);
            if (dist < this.grazeRadius && dist > 15) {
                this.grazedBullets.add(bulletId);
                grazedThisFrame = true;
                this.grazeScore += 5 * this.grazeMultiplier;
                this.score += 5 * this.grazeMultiplier;
                this.scoreText.setText('Score: ' + this.score);

                // Visual graze sparkle
                const sparkle = this.add.circle(bullet.x, bullet.y, 3, 0xff88ff, 1);
                this.tweens.add({ targets: sparkle, alpha: 0, scale: 3, duration: 200, onComplete: () => sparkle.destroy() });
            }
        });

        if (grazedThisFrame) {
            this.grazeMultiplier = Math.min(5, this.grazeMultiplier + 0.1);
            this.grazeTimer = 2000;
            soundManager.playGraze();
            this.grazeText.setText(`GRAZE ×${this.grazeMultiplier.toFixed(1)}`);
            this.grazeText.setAlpha(1);
        }

        if (this.grazeTimer > 0) {
            this.grazeTimer -= delta;
            if (this.grazeTimer <= 0) {
                this.grazeMultiplier = 1;
                this.grazeText.setAlpha(0);
            }
        }

        // Cleanup old grazed bullets
        if (this.grazedBullets.size > 200) {
            this.grazedBullets.clear();
        }
    };

    // ========================================
    // RANDOM EVENT SYSTEM
    // ========================================
    this.scene.triggerRandomEvent = function () {
        const events = ['asteroidStorm', 'bonusWave', 'empPulse', 'goldRush', 'gravityWell'];
        const event = events[Phaser.Math.Between(0, events.length - 1)];
        this.activeEvent = event;
        this.eventDuration = 8000; // 8 seconds
        this.totalEvents++;

        soundManager.playEventWarning();

        switch (event) {
            case 'asteroidStorm':
                this.queueNotification('☄️ ASTEROID STORM!', '#ff8844', 1500);
                this.eventBanner.setText('☄️ DODGE THE ASTEROIDS!');
                break;
            case 'bonusWave':
                this.queueNotification('⭐ BONUS WAVE! Kill for double points!', '#ffff00', 1500);
                this.eventBanner.setText('⭐ BONUS WAVE — 2× POINTS!');
                break;
            case 'empPulse':
                this.queueNotification('⚡ EMP WAVE! Enemy bullets slowed!', '#44aaff', 1500);
                this.eventBanner.setText('⚡ EMP ACTIVE — BULLETS SLOWED');
                break;
            case 'goldRush':
                this.queueNotification('💰 GOLD RUSH! Coins everywhere!', '#ffdd00', 1500);
                this.eventBanner.setText('💰 GOLD RUSH!');
                break;
            case 'gravityWell':
                this.queueNotification('🌀 GRAVITY WELL! Enemies pulled to center!', '#aa44ff', 1500);
                this.eventBanner.setText('🌀 GRAVITY WELL ACTIVE');
                break;
        }

        this.tweens.add({ targets: this.eventBanner, alpha: 1, duration: 300 });
    };

    this.scene.updateEvent = function (delta) {
        this.eventDuration -= delta;
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        switch (this.activeEvent) {
            case 'asteroidStorm':
                // Spawn falling asteroids (hazards)
                if (Math.random() < 0.04) {
                    const ax = Phaser.Math.Between(30, width - 30);
                    const asteroid = this.enemyBullets.create(ax, -20, 'enemyBullet');
                    asteroid.setScale(2.5);
                    asteroid.setTint(0x886644);
                    asteroid.setVelocity(Phaser.Math.Between(-50, 50), Phaser.Math.Between(150, 300));
                    this.tweens.add({ targets: asteroid, angle: 360, duration: 1000, repeat: -1 });
                }
                break;
            case 'bonusWave':
                // Spawn extra small enemies worth double points
                if (Math.random() < 0.03 && this.enemies.countActive() < 20) {
                    const bx = Phaser.Math.Between(50, width - 50);
                    const bonus = this.enemies.create(bx, -30, 'enemyFast');
                    bonus.health = 1;
                    bonus.points = 30; // double
                    bonus.setScale(0.8);
                    bonus.setTint(0xffff00);
                    bonus.setVelocityY(Phaser.Math.Between(120, 200));
                    bonus.behavior = 0;
                    bonus.shootTimer = 9999;
                    bonus.moveTimer = 0;
                    bonus.isBonusEnemy = true;
                }
                break;
            case 'empPulse':
                // Slow all enemy bullets
                this.enemyBullets.children.entries.forEach(b => {
                    if (!b.active) return;
                    const vel = b.body.velocity;
                    b.setVelocity(vel.x * 0.97, vel.y * 0.97);
                    // Visual crackle
                    if (Math.random() < 0.02) {
                        b.setTint(0x4488ff);
                        this.time.delayedCall(100, () => { if (b.active) b.clearTint(); });
                    }
                });
                break;
            case 'goldRush':
                // Spawn extra coins
                if (Math.random() < 0.06) {
                    this.spawnCoin(Phaser.Math.Between(50, width - 50), -20, 'gold');
                }
                break;
            case 'gravityWell':
                // Pull enemies toward center
                const cx = width / 2;
                const cy = height / 2;
                this.enemies.children.entries.forEach(e => {
                    if (!e.active || e.isBoss || e.isMiniBoss) return;
                    const angle = Phaser.Math.Angle.Between(e.x, e.y, cx, cy);
                    const pull = 30;
                    e.setVelocity(
                        e.body.velocity.x + Math.cos(angle) * pull * 0.03,
                        e.body.velocity.y + Math.sin(angle) * pull * 0.03
                    );
                });
                // Visual vortex
                if (Math.random() < 0.05) {
                    const vx = cx + Phaser.Math.Between(-80, 80);
                    const vy = cy + Phaser.Math.Between(-80, 80);
                    const dot = this.add.circle(vx, vy, 2, 0xaa44ff, 0.6);
                    this.tweens.add({ targets: dot, x: cx, y: cy, alpha: 0, duration: 500, onComplete: () => dot.destroy() });
                }
                break;
        }

        if (this.eventDuration <= 0) {
            this.activeEvent = null;
            this.tweens.add({ targets: this.eventBanner, alpha: 0, duration: 500 });
        }
    };

    // ========================================
    // FORMATION SPAWN SYSTEM
    // ========================================
    this.scene.spawnFormation = function () {
        const width = this.cameras.main.width;
        const formations = ['vShape', 'line', 'circle', 'zigzag'];
        const formation = formations[Phaser.Math.Between(0, formations.length - 1)];
        const count = Phaser.Math.Between(3, 6);
        const lvl = LEVELS[this.currentLevel];

        this.queueNotification('⚔️ FORMATION INCOMING!', '#ff6644', 800);

        switch (formation) {
            case 'vShape':
                for (let i = 0; i < count; i++) {
                    const row = Math.abs(i - Math.floor(count / 2));
                    this.time.delayedCall(row * 150, () => {
                        const x = width / 2 + (i - count / 2) * 60;
                        this.spawnFormationEnemy(x, -30 - row * 30, lvl);
                    });
                }
                break;
            case 'line':
                for (let i = 0; i < count; i++) {
                    this.time.delayedCall(i * 200, () => {
                        const x = width / 2 + (i - count / 2) * 70;
                        this.spawnFormationEnemy(x, -30, lvl);
                    });
                }
                break;
            case 'circle': {
                const cx = width / 2;
                for (let i = 0; i < count; i++) {
                    const angle = (i / count) * Math.PI * 2;
                    this.time.delayedCall(i * 100, () => {
                        const x = cx + Math.cos(angle) * 80;
                        const y = -50 + Math.sin(angle) * 40;
                        this.spawnFormationEnemy(x, y, lvl);
                    });
                }
                break;
            }
            case 'zigzag':
                for (let i = 0; i < count; i++) {
                    this.time.delayedCall(i * 250, () => {
                        const x = (i % 2 === 0) ? width * 0.3 : width * 0.7;
                        this.spawnFormationEnemy(x, -30, lvl);
                    });
                }
                break;
        }
    };

    this.scene.spawnFormationEnemy = function (x, y, lvl) {
        const enemy = this.enemies.create(x, y, 'enemy');
        enemy.health = Math.ceil(1 * lvl.hpMulti);
        enemy.points = 15;
        enemy.setScale(1.1);
        enemy.setTint(0xff4444);
        enemy.setVelocityY(100 * lvl.speedMulti);
        enemy.behavior = 0;
        enemy.shootTimer = Phaser.Math.Between(1500, 3000);
        enemy.moveTimer = 0;
        enemy.isFormation = true;
    };

    // ========================================
    // COIN/GEM DROP SYSTEM
    // ========================================
    this.scene.spawnCoin = function (x, y, type) {
        const texMap = { bronze: 'coinBronze', silver: 'coinSilver', gold: 'coinGold' };
        const valMap = { bronze: 10, silver: 25, gold: 50 };
        const coin = this.coins.create(x, y, texMap[type] || 'coinBronze');
        coin.coinValue = valMap[type] || 10;
        coin.coinType = type;
        coin.setVelocityY(Phaser.Math.Between(40, 90));
        coin.setVelocityX(Phaser.Math.Between(-30, 30));
        this.tweens.add({ targets: coin, angle: 360, duration: 1500, repeat: -1 });
        this.tweens.add({ targets: coin, scale: { from: 0.8, to: 1.2 }, duration: 400, yoyo: true, repeat: -1 });
    };

    this.scene.collectCoin = function (player, coin) {
        const value = coin.coinValue || 10;
        this.score += value;
        this.gemsCollected++;
        this.scoreText.setText('Score: ' + this.score);
        coin.destroy();
        soundManager.playCoinPickup();

        // sparkle effect
        const sparkle = this.add.particles(coin.x, coin.y, 'particle', {
            speed: { min: 30, max: 80 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.5, end: 0 },
            lifespan: 300,
            quantity: 5,
            blendMode: 'ADD',
            tint: coin.coinType === 'gold' ? 0xffdd00 : coin.coinType === 'silver' ? 0xccccff : 0xcc8844
        });
        this.time.delayedCall(300, () => sparkle.destroy());

        // small popup
        const pop = this.add.text(coin.x, coin.y, '+' + value, {
            fontSize: '12px', color: '#ffdd00', stroke: '#664400', strokeThickness: 1
        }).setOrigin(0.5);
        this.tweens.add({ targets: pop, y: pop.y - 20, alpha: 0, duration: 400, onComplete: () => pop.destroy() });
    };

    // ========================================
    // SLOW-MO TRIGGER
    // ========================================
    this.scene.triggerSlowmo = function (duration) {
        if (this.slowmoActive) return;
        this.slowmoActive = true;
        this.slowmoTimer = duration || 800;
        soundManager.playSlowmo();

        // Visual effect — brief desaturation flash
        this.cameras.main.flash(100, 100, 100, 200);
    };

    // ========================================
    // SHOOT BULLET (weapon-dependent)
    // ========================================
    this.scene.shootBullet = function () {
        soundManager.playShoot();
        const px = this.player.x;
        const py = this.player.y;

        // Power-up weapon overrides
        if (this.laserBeam) {
            [-10, 0, 10].forEach(off => {
                const l = this.bullets.create(px + off, py - 20, 'laser');
                l.setVelocityY(-600);
                l.setScale(1.5);
                l.setTint(0x00ffff);
                l.damage = 2;
            });
            this.muzzleFlash(px, py);
            return;
        }
        if (this.multiShot) {
            [-20, 0, 20].forEach(off => {
                const b = this.bullets.create(px + off, py - 20, 'bullet');
                b.setVelocityY(-550);
                b.setScale(1.3);
                b.damage = 1;
            });
            this.muzzleFlash(px, py);
            return;
        }

        // Weapon-based shooting
        switch (this.currentWeapon) {
            case 'blaster':
                this.fireBlaster(px, py);
                break;
            case 'spread':
                this.fireSpread(px, py);
                break;
            case 'homing':
                this.fireHoming(px, py);
                break;
            case 'plasma':
                this.firePlasma(px, py);
                break;
            case 'chain':
                this.fireChain(px, py);
                break;
        }

        this.muzzleFlash(px, py);
    };

    this.scene.fireBlaster = function (px, py) {
        const b = this.bullets.create(px, py - 20, 'bullet');
        b.setVelocityY(-500);
        b.damage = 1;
    };

    this.scene.fireSpread = function (px, py) {
        const angles = [-30, -15, 0, 15, 30];
        angles.forEach(angle => {
            const b = this.bullets.create(px, py - 15, 'bulletSpread');
            const rad = Phaser.Math.DegToRad(angle - 90);
            b.setVelocity(Math.cos(rad) * 450, Math.sin(rad) * 450);
            b.setRotation(rad + Math.PI / 2);
            b.damage = 1;
        });
    };

    this.scene.fireHoming = function (px, py) {
        soundManager.playHomingLaunch();
        const m = this.bullets.create(px, py - 15, 'bulletHoming');
        m.setVelocityY(-350);
        m.damage = 2;
        m.isHoming = true;
        m.homingSpeed = 320;
        m.setScale(1.2);
    };

    this.scene.firePlasma = function (px, py) {
        soundManager.playPlasma();
        const p = this.bullets.create(px, py - 15, 'bulletPlasma');
        p.setVelocityY(-300);
        p.damage = 4;
        p.isPlasma = true;
        p.setScale(1.5);
        this.tweens.add({
            targets: p,
            scaleX: 1.8,
            scaleY: 1.8,
            duration: 200,
            yoyo: true,
            repeat: -1
        });
    };

    this.scene.fireChain = function (px, py) {
        soundManager.playChainLightning();
        const c = this.bullets.create(px, py - 15, 'bulletChain');
        c.setVelocityY(-480);
        c.damage = 1;
        c.isChain = true;
        c.chainCount = 3;
        c.setScale(1.5);
    };

    // ========================================
    // HOMING BULLET UPDATE
    // ========================================
    this.scene.updateHomingBullets = function (_delta) {
        this.bullets.children.entries.forEach(bullet => {
            if (!bullet.active || !bullet.isHoming) return;
            let closest = null;
            let closestDist = Infinity;
            this.enemies.children.entries.forEach(enemy => {
                if (!enemy.active) return;
                const dist = Phaser.Math.Distance.Between(bullet.x, bullet.y, enemy.x, enemy.y);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = enemy;
                }
            });
            if (closest && closestDist < 400) {
                const angle = Phaser.Math.Angle.Between(bullet.x, bullet.y, closest.x, closest.y);
                bullet.setVelocity(
                    Math.cos(angle) * bullet.homingSpeed,
                    Math.sin(angle) * bullet.homingSpeed
                );
                bullet.setRotation(angle + Math.PI / 2);
            }
        });
    };

    // ========================================
    // MUZZLE FLASH
    // ========================================
    this.scene.muzzleFlash = function (px, py) {
        const flash = this.add.particles(px, py - 15, 'particle', {
            speed: { min: 50, max: 100 },
            angle: { min: 260, max: 280 },
            scale: { start: 0.6, end: 0 },
            alpha: { start: 1, end: 0 },
            lifespan: 200,
            quantity: 3,
            blendMode: 'ADD',
            tint: 0x00ff00
        });
        this.time.delayedCall(200, () => flash.destroy());
    };

    // ========================================
    // BOMB
    // ========================================
    this.scene.useBomb = function () {
        if (this.bombs <= 0) return;
        this.bombs--;
        this.bombText.setText('💣 ×' + Math.max(0, this.bombs));
        soundManager.playBomb();

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.cameras.main.flash(800, 255, 255, 255);
        this.cameras.main.shake(500, 0.015);

        const ring = this.add.circle(this.player.x, this.player.y, 10, 0xffffff, 0.6);
        this.tweens.add({
            targets: ring,
            radius: 600,
            alpha: 0,
            duration: 800,
            onComplete: () => ring.destroy()
        });

        this.enemies.children.entries.slice().forEach(enemy => {
            if (!enemy.active) return;
            const pts = (enemy.points || 10) * this.difficulty;
            this.score += pts;
            this.createExplosion(enemy.x, enemy.y, 0xffff00, 15);
            enemy.destroy();
            this.enemiesKilled++;
            this.levelKills++;
        });

        this.enemyBullets.children.entries.slice().forEach(b => b.destroy());
        this.scoreText.setText('Score: ' + this.score);

        this.queueNotification('💥 BOMB! 💥', '#ffffff', 800);
    };

    // ========================================
    // WEAPON UNLOCK NOTIFICATION
    // ========================================
    this.scene.showWeaponUnlock = function (weaponName) {
        const w = WEAPONS[weaponName];
        soundManager.playComboTier();
        this.queueNotification(`🔓 ${w.icon} ${w.name} UNLOCKED! — Press [${w.key}]`, w.color, 2500);
    };

    // ========================================
    // COMBO SYSTEM
    // ========================================
    this.scene.getCurrentComboTier = function () {
        let current = null;
        for (const tier of COMBO_TIERS) {
            if (this.combo >= tier.threshold) current = tier;
        }
        return current;
    };

    // ========================================
    // SPAWN ENEMY (level-aware)
    // ========================================
    this.scene.spawnEnemy = function () {
        const lvl = LEVELS[this.currentLevel];
        const x = Phaser.Math.Between(50, this.cameras.main.width - 50);
        const roll = Phaser.Math.Between(0, 99);
        let enemy;

        // Calculate cumulative weights
        const w = lvl.enemyWeights;
        const cumulative = [];
        let sum = 0;
        const types = ['standard', 'fast', 'tank', 'stealth', 'bomber', 'healer', 'splitter', 'carrier'];
        types.forEach(t => {
            sum += (w[t] || 0);
            cumulative.push({ type: t, threshold: sum });
        });

        let selectedType = 'standard';
        for (const c of cumulative) {
            if (roll < c.threshold) {
                selectedType = c.type;
                break;
            }
        }

        const speedMult = lvl.speedMulti;
        const hpMult = lvl.hpMulti;

        switch (selectedType) {
            case 'standard':
                enemy = this.enemies.create(x, -30, 'enemy');
                enemy.health = Math.ceil(1 * hpMult);
                enemy.points = 10;
                enemy.setScale(1.2);
                break;
            case 'fast':
                enemy = this.enemies.create(x, -30, 'enemyFast');
                enemy.health = Math.ceil(1 * hpMult);
                enemy.points = 15;
                enemy.setScale(1);
                break;
            case 'tank':
                enemy = this.enemies.create(x, -30, 'enemyTank');
                enemy.health = Math.ceil(3 * hpMult);
                enemy.points = 30;
                enemy.setScale(1.3);
                break;
            case 'stealth':
                enemy = this.enemies.create(x, -30, 'enemyStealth');
                enemy.health = Math.ceil(2 * hpMult);
                enemy.points = 25;
                enemy.setScale(1);
                enemy.isStealth = true;
                this.tweens.add({
                    targets: enemy,
                    alpha: { from: 1, to: 0.15 },
                    duration: 1200,
                    yoyo: true,
                    repeat: -1
                });
                break;
            case 'bomber':
                enemy = this.enemies.create(x, -30, 'enemyBomber');
                enemy.health = Math.ceil(2 * hpMult);
                enemy.points = 35;
                enemy.setScale(1.2);
                enemy.isBomber = true;
                break;
            case 'healer':
                enemy = this.enemies.create(x, -30, 'enemyHealer');
                enemy.health = Math.ceil(2 * hpMult);
                enemy.points = 40;
                enemy.setScale(1.1);
                enemy.isHealer = true;
                enemy.healTimer = 0;
                break;
            case 'splitter':
                enemy = this.enemies.create(x, -30, 'enemySplitter');
                enemy.health = Math.ceil(2 * hpMult);
                enemy.points = 30;
                enemy.setScale(1.1);
                enemy.isSplitter = true;
                break;
            case 'carrier':
                enemy = this.enemies.create(x, -30, 'enemyCarrier');
                enemy.health = Math.ceil(5 * hpMult);
                enemy.points = 50;
                enemy.setScale(1.2);
                enemy.isCarrier = true;
                enemy.spawnTimer = 0;
                enemy.spawnCount = 0;
                break;
            default:
                enemy = this.enemies.create(x, -30, 'enemy');
                enemy.health = 1;
                enemy.points = 10;
                enemy.setScale(1.2);
        }

        const behavior = Phaser.Math.Between(0, 3);
        enemy.behavior = behavior;
        enemy.shootTimer = Phaser.Math.Between(1000, 2500);
        enemy.moveTimer = 0;

        const baseSpeed = 80 + this.currentLevel * 5;
        switch (behavior) {
            case 0:
                enemy.setVelocityY((baseSpeed) * speedMult);
                break;
            case 1:
                enemy.setVelocityY((baseSpeed - 10) * speedMult);
                enemy.setVelocityX(120 * speedMult);
                break;
            case 2:
                enemy.setVelocityY((baseSpeed + 40) * speedMult);
                break;
            case 3:
                enemy.setVelocityY((baseSpeed - 20) * speedMult);
                enemy.angle = 0;
                break;
        }
    };

    // ========================================
    // SPAWN MINI-BOSS (mid-level challenge)
    // ========================================
    this.scene.spawnMiniBoss = function () {
        const width = this.cameras.main.width;
        soundManager.playMiniBoss();

        this.queueNotification('⚠️ MINI-BOSS INCOMING!', '#ff8800', 1500);

        this.time.delayedCall(1000, () => {
            const lvl = LEVELS[this.currentLevel];
            const mb = this.enemies.create(width / 2, -40, 'miniBoss');
            mb.health = Math.ceil(15 + this.currentLevel * 5);
            mb.maxHealth = mb.health;
            mb.points = 100;
            mb.isMiniBoss = true;
            mb.setScale(1.3);
            mb.setVelocityY(40);
            mb.shootTimer = 0;
            mb.moveTimer = 0;
        });
    };

    // ========================================
    // SPAWN POWER-UP
    // ========================================
    this.scene.spawnPowerUp = function () {
        const x = Phaser.Math.Between(60, this.cameras.main.width - 60);
        const types = ['shield', 'rapidFire', 'multiShot', 'laserBeam', 'bomb', 'health', 'magnet'];
        const powerType = types[Phaser.Math.Between(0, types.length - 1)];

        const textureMap = {
            shield: 'powerupShield',
            rapidFire: 'powerupRapid',
            multiShot: 'powerupMulti',
            laserBeam: 'powerupLaser',
            bomb: 'powerupBomb',
            health: 'powerupHealth',
            magnet: 'powerupMagnet'
        };

        const powerUp = this.powerUps.create(x, -30, textureMap[powerType]);
        powerUp.setVelocityY(100);
        powerUp.powerType = powerType;

        this.tweens.add({ targets: powerUp, scale: { from: 1, to: 1.4 }, alpha: { from: 1, to: 0.6 }, duration: 600, yoyo: true, repeat: -1 });
        this.tweens.add({ targets: powerUp, angle: 360, duration: 2000, repeat: -1 });
    };

    // ========================================
    // SPAWN BOSS (end of level)
    // ========================================
    this.scene.spawnBoss = function () {
        this.bossActive = true;
        soundManager.playBossWarning();

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const lvl = LEVELS[this.currentLevel];

        // Stop spawning regular enemies
        this.queueNotification('⚠️ WARNING! BOSS APPROACHING ⚠️', '#ff0000', 2000);
        this.cameras.main.flash(2000, 255, 0, 0);

        this.time.delayedCall(2500, () => {
            const boss = this.enemies.create(width / 2, -50, 'boss');
            boss.health = lvl.bossHP;
            boss.maxHealth = boss.health;
            boss.points = 200;
            boss.isBoss = true;
            boss.setScale(1.5 + this.currentLevel * 0.05);
            boss.setVelocityY(30);
            boss.shootTimer = 0;
            boss.moveTimer = 0;
            boss.phase = 1;

            // Show boss health bar at bottom
            const bossName = BOSS_NAMES[this.currentLevel] || 'ALIEN DESTROYER';
            this.bossHealthBarBg.setVisible(true);
            this.bossHealthBar.setVisible(true);
            this.bossHealthBar.width = 400;
            this.bossNameText.setText(bossName);
            this.bossNameText.setVisible(true);
        });
    };

    // ========================================
    // HIT ENEMY (enhanced combo + chain/plasma)
    // ========================================
    this.scene.hitEnemy = function (bullet, enemy) {
        const bulletDamage = bullet.damage || 1;
        const isPlasma = bullet.isPlasma;
        const isChain = bullet.isChain;
        const chainCount = bullet.chainCount || 0;

        bullet.destroy();

        // Plasma AoE
        if (isPlasma) {
            this.createExplosion(bullet.x, bullet.y, 0x00ccff, 25);
            this.enemies.children.entries.forEach(e => {
                if (!e.active || e === enemy) return;
                const dist = Phaser.Math.Distance.Between(bullet.x, bullet.y, e.x, e.y);
                if (dist < 100) {
                    e.health = (e.health || 1) - 2;
                    if (e.health <= 0) {
                        this.killEnemy(e);
                    } else {
                        e.setTint(0xff0000);
                        this.time.delayedCall(100, () => { if (e.active) e.clearTint(); });
                    }
                }
            });
        }

        // Chain lightning arc
        if (isChain && chainCount > 0) {
            let closest = null, closestDist = Infinity;
            this.enemies.children.entries.forEach(e => {
                if (!e.active || e === enemy) return;
                const dist = Phaser.Math.Distance.Between(enemy.x, enemy.y, e.x, e.y);
                if (dist < 200 && dist < closestDist) {
                    closestDist = dist;
                    closest = e;
                }
            });
            if (closest) {
                this.drawLightningArc(enemy.x, enemy.y, closest.x, closest.y);
                const chainBullet = this.bullets.create(closest.x, closest.y - 5, 'bulletChain');
                chainBullet.damage = 1;
                chainBullet.isChain = true;
                chainBullet.chainCount = chainCount - 1;
                chainBullet.setVelocity(0, -20);
                chainBullet.setScale(1.2);
            }
        }

        // Combo damage bonus
        const tier = this.getCurrentComboTier();
        const dmgMulti = tier ? (1 + tier.dmgBonus) : 1;
        const totalDamage = Math.ceil(bulletDamage * dmgMulti);

        enemy.health = (enemy.health || 1) - totalDamage;

        if (enemy.health <= 0) {
            this.killEnemy(enemy);
        } else {
            enemy.setTint(0xff0000);
            this.time.delayedCall(100, () => { if (enemy.active) enemy.clearTint(); });
            if ((enemy.isBoss || enemy.isMiniBoss) && this.bossHealthBar && this.bossHealthBar.visible) {
                const pct = enemy.health / enemy.maxHealth;
                this.bossHealthBar.width = 400 * pct;
            }
        }
    };

    // ========================================
    // KILL ENEMY (extracted for reuse)
    // ========================================
    this.scene.killEnemy = function (enemy) {
        const tier = this.getCurrentComboTier();
        const scoreMulti = tier ? tier.scoreMulti : Math.max(1, Math.floor(this.combo / 2));
        const isBonusWave = this.activeEvent === 'bonusWave';
        const eventMulti = isBonusWave ? 2 : 1;
        const points = (enemy.points || 10) * this.difficulty * eventMulti;
        this.score += points * scoreMulti;
        this.scoreText.setText('Score: ' + this.score);

        // Kill streak tracker
        this.killStreak++;
        this.killStreakTimer = 1500;

        // Trigger slowmo on 3+ rapid kills
        if (this.killStreak >= 3 && !this.slowmoActive) {
            this.triggerSlowmo(600);
            // Big text flash
            const streakText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, `${this.killStreak}× STREAK!`, {
                fontSize: '36px', fontFamily: 'Arial Black', color: '#ff4400',
                stroke: '#440000', strokeThickness: 4
            }).setOrigin(0.5).setDepth(150);
            this.tweens.add({ targets: streakText, scale: 2, alpha: 0, duration: 800, onComplete: () => streakText.destroy() });
        }

        // === COIN DROPS ===
        const dropChance = Math.min(0.8, 0.3 + this.currentLevel * 0.03);
        if (Math.random() < dropChance) {
            let coinType = 'bronze';
            if (enemy.isBoss || enemy.isMiniBoss) coinType = 'gold';
            else if (enemy.points >= 30) coinType = Math.random() < 0.4 ? 'silver' : 'bronze';
            else if (Math.random() < 0.15) coinType = 'silver';

            const numCoins = enemy.isBoss ? 5 : enemy.isMiniBoss ? 3 : 1;
            for (let i = 0; i < numCoins; i++) {
                this.time.delayedCall(i * 50, () => {
                    this.spawnCoin(enemy.x + Phaser.Math.Between(-15, 15), enemy.y + Phaser.Math.Between(-10, 10), coinType);
                });
            }
        }

        // Combo
        const prevTier = this.getCurrentComboTier();
        this.combo++;
        if (this.combo > this.maxCombo) this.maxCombo = this.combo;
        this.comboTimer = 2500;

        // Check for new combo tier
        const newTier = this.getCurrentComboTier();
        if (newTier && newTier !== prevTier) {
            soundManager.playComboTier();
            this.queueNotification(newTier.name, newTier.color, 1200);

            // Cosmic Fury grants temporary shield
            if (newTier.threshold === 15 && !this.shield) {
                this.shield = true;
                this.shieldTime = 3000;
                this.player.setTint(0x00ffff);
                const shield = this.add.circle(this.player.x, this.player.y, 30, 0x00ffff, 0.3);
                shield.setStrokeStyle(3, 0x00ffff);
                this.tweens.add({ targets: shield, alpha: 0.5, scaleX: 1.1, scaleY: 1.1, duration: 500, yoyo: true, repeat: -1 });
                this.shieldCircle = shield;
            }

            // Godlike grants bonus bomb
            if (newTier.threshold === 25 && this.bombs < 5) {
                this.bombs += 1;
                this.bombText.setText('💣 ×' + this.bombs);
            }
        }

        // Small score popup (brief, small text)
        const popTxt = '+' + (points * scoreMulti);
        const scorePopup = this.add.text(enemy.x, enemy.y, popTxt, {
            fontSize: '14px', color: '#ffff00', stroke: '#663300', strokeThickness: 2
        }).setOrigin(0.5);
        this.tweens.add({
            targets: scorePopup, y: scorePopup.y - 30, alpha: 0,
            duration: 600, onComplete: () => scorePopup.destroy()
        });

        // Splitter: spawn 2 smaller enemies on death
        if (enemy.isSplitter) {
            for (let i = 0; i < 2; i++) {
                const child = this.enemies.create(enemy.x + (i === 0 ? -20 : 20), enemy.y, 'enemySplitterChild');
                child.health = 1;
                child.points = 10;
                child.setScale(0.9);
                child.setVelocity(i === 0 ? -60 : 60, 80 + Phaser.Math.Between(0, 40));
                child.behavior = 0;
                child.shootTimer = 9999;
                child.moveTimer = 0;
            }
        }

        // Mini-boss defeat
        if (enemy.isMiniBoss) {
            this.score += 200;
            this.scoreText.setText('Score: ' + this.score);
            this.queueNotification('MINI-BOSS DESTROYED! +200', '#ff8800', 1500);
            this.triggerSlowmo(1000);

            // Hide boss health bar if it was showing for mini-boss
            this.bossHealthBarBg.setVisible(false);
            this.bossHealthBar.setVisible(false);
            this.bossNameText.setVisible(false);
        }

        // Boss defeat
        if (enemy.isBoss) {
            this.bossActive = false;
            this.bossDefeatedThisLevel = true;
            this.bossHealthBarBg.setVisible(false);
            this.bossHealthBar.setVisible(false);
            this.bossNameText.setVisible(false);

            this.score += 500;
            this.health = Math.min(100, this.health + 20);
            this.bombs = Math.min(5, this.bombs + 1);
            this.bombText.setText('💣 ×' + this.bombs);

            this.queueNotification('🏆 BOSS DEFEATED! +500 BONUS', '#00ff00', 2000);
            this.triggerSlowmo(1500);

            // Advance to next level after short delay
            this.time.delayedCall(2500, () => {
                this.advanceLevel();
            });
        }

        enemy.destroy();
        this.enemiesKilled++;
        this.levelKills++;
        const explosionSize = enemy.isBoss ? 40 : enemy.isMiniBoss ? 25 : 15;
        this.createExplosion(enemy.x, enemy.y, enemy.isBoss ? 0xff0000 : enemy.isBonusEnemy ? 0xffff00 : 0xff6600, explosionSize);
        soundManager.playExplosion();
        this.cameras.main.shake(enemy.isBoss ? 300 : 80, enemy.isBoss ? 0.008 : 0.002);
    };

    // ========================================
    // CHAIN LIGHTNING ARC VISUAL
    // ========================================
    this.scene.drawLightningArc = function (x1, y1, x2, y2) {
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00, 1);
        graphics.beginPath();
        graphics.moveTo(x1, y1);
        const segs = 6;
        for (let i = 1; i < segs; i++) {
            const t = i / segs;
            const mx = Phaser.Math.Interpolation.Linear([x1, x2], t) + Phaser.Math.Between(-15, 15);
            const my = Phaser.Math.Interpolation.Linear([y1, y2], t) + Phaser.Math.Between(-15, 15);
            graphics.lineTo(mx, my);
        }
        graphics.lineTo(x2, y2);
        graphics.strokePath();
        this.time.delayedCall(150, () => graphics.destroy());
    };

    // ========================================
    // HIT PLAYER
    // ========================================
    this.scene.hitPlayer = function (player, enemy) {
        if (this.shield || this.isDashing) {
            enemy.destroy();
            this.createExplosion(enemy.x, enemy.y, 0x00ffff, 15);
            soundManager.playExplosion();
            return;
        }
        enemy.destroy();
        this.health -= enemy.isBoss ? 30 : 20;
        this.healthValText.setText(Math.max(0, this.health));
        this.combo = 0;
        this.comboText.setText('');
        this.killStreak = 0;

        soundManager.playHit();
        this.cameras.main.shake(250, 0.012);
        this.cameras.main.flash(250, 255, 0, 0);
        this.tweens.add({ targets: this.player, alpha: 0.3, duration: 100, yoyo: true, repeat: 3 });

        if (this.health <= 0) this.endGame();
    };

    this.scene.hitPlayerBullet = function (player, bullet) {
        if (this.shield || this.isDashing) {
            bullet.destroy();
            this.createExplosion(bullet.x, bullet.y, 0x00ffff, 8);
            return;
        }
        bullet.destroy();
        this.health -= 10;
        this.healthValText.setText(Math.max(0, this.health));

        soundManager.playHit();
        this.cameras.main.shake(100, 0.005);
        this.cameras.main.flash(100, 255, 100, 0);

        if (this.health <= 0) this.endGame();
    };

    // ========================================
    // COLLECT POWER-UP
    // ========================================
    this.scene.collectPowerUp = function (player, powerUp) {
        const type = powerUp.powerType;
        powerUp.destroy();
        soundManager.playPowerUp();
        this.createExplosion(powerUp.x, powerUp.y, 0xffff00, 12);
        this.score += 50;

        switch (type) {
            case 'shield':
                this.shield = true;
                this.shieldTime = 6000;
                this.player.setTint(0x00ffff);
                const s = this.add.circle(this.player.x, this.player.y, 30, 0x00ffff, 0.3);
                s.setStrokeStyle(3, 0x00ffff);
                this.tweens.add({ targets: s, alpha: 0.5, scaleX: 1.1, scaleY: 1.1, duration: 500, yoyo: true, repeat: -1 });
                this.shieldCircle = s;
                break;
            case 'rapidFire':
                this.rapidFire = true;
                this.rapidFireTime = 7000;
                break;
            case 'multiShot':
                this.multiShot = true;
                this.multiShotTime = 7000;
                break;
            case 'laserBeam':
                this.laserBeam = true;
                this.laserBeamTime = 5000;
                this.player.setTint(0x00ffcc);
                break;
            case 'bomb':
                this.bombs = Math.min(5, this.bombs + 1);
                this.bombText.setText('💣 ×' + this.bombs);
                break;
            case 'health':
                this.health = Math.min(100, this.health + 25);
                this.healthValText.setText(this.health);
                break;
            case 'magnet':
                this.magnetActive = true;
                this.magnetTime = 8000;
                break;
        }
        this.updatePowerUpDisplay();
    };

    // ========================================
    // UPDATE POWER-UPS
    // ========================================
    this.scene.updatePowerUps = function (delta) {
        if (this.shield) {
            this.shieldTime -= delta;
            if (this.shieldCircle) {
                this.shieldCircle.x = this.player.x;
                this.shieldCircle.y = this.player.y;
            }
            if (this.shieldTime <= 0) {
                this.shield = false;
                this.player.clearTint();
                if (this.shieldCircle) { this.shieldCircle.destroy(); this.shieldCircle = null; }
            }
        }
        if (this.rapidFire) {
            this.rapidFireTime -= delta;
            if (this.rapidFireTime <= 0) this.rapidFire = false;
        }
        if (this.multiShot) {
            this.multiShotTime -= delta;
            if (this.multiShotTime <= 0) this.multiShot = false;
        }
        if (this.laserBeam) {
            this.laserBeamTime -= delta;
            if (this.laserBeamTime <= 0) {
                this.laserBeam = false;
                if (!this.shield) this.player.clearTint();
            }
        }
        this.updatePowerUpDisplay();
    };

    this.scene.updatePowerUpDisplay = function () {
        const active = [];
        if (this.shield) active.push('🛡️');
        if (this.rapidFire) active.push('⚡');
        if (this.multiShot) active.push('✨');
        if (this.laserBeam) active.push('🔫');
        if (this.magnetActive) active.push('🧲');
        this.powerUpText.setText(active.join(' '));
    };

    // ========================================
    // EXPLOSION
    // ========================================
    this.scene.createExplosion = function (x, y, color, quantity = 20) {
        const particles = this.add.particles(x, y, 'particle', {
            speed: { min: 100, max: 400 },
            angle: { min: 0, max: 360 },
            scale: { start: 1.5, end: 0 },
            alpha: { start: 1, end: 0 },
            lifespan: 800,
            quantity: quantity,
            blendMode: 'ADD',
            tint: color
        });
        const ring = this.add.circle(x, y, 5, color, 0.8);
        this.tweens.add({
            targets: ring, radius: quantity * 2, alpha: 0,
            duration: 500, onComplete: () => ring.destroy()
        });
        this.time.delayedCall(800, () => particles.destroy());
    };

    // ========================================
    // CLEANUP
    // ========================================
    this.scene.cleanupObjects = function () {
        const height = this.cameras.main.height;
        const width = this.cameras.main.width;

        this.bullets.children.entries.forEach(bullet => {
            if (bullet.y < -30 || bullet.y > height + 30 || bullet.x < -30 || bullet.x > width + 30) bullet.destroy();
        });

        this.enemies.children.entries.forEach(enemy => {
            if (enemy.y > height + 100) { enemy.destroy(); return; }

            if (enemy.isBoss) {
                enemy.shootTimer += 16;
                const hpPercent = enemy.health / enemy.maxHealth;

                // Phase determination
                if (hpPercent < 0.3) enemy.phase = 3;
                else if (hpPercent < 0.6) enemy.phase = 2;
                else enemy.phase = 1;

                // Different attack patterns per phase
                const shootInterval = Math.max(200, 600 - this.currentLevel * 15 - (enemy.phase - 1) * 100);
                if (enemy.shootTimer > shootInterval) {
                    switch (enemy.phase) {
                        case 1: {
                            // Standard radial burst
                            const bulletCount = Math.min(12, 8 + Math.floor(this.currentLevel / 3));
                            const angleStep = 360 / bulletCount;
                            for (let angle = 0; angle < 360; angle += angleStep) {
                                const b = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                                const rad = Phaser.Math.DegToRad(angle + (enemy.moveTimer * 0.05));
                                const speed = 150 + this.currentLevel * 5;
                                b.setVelocity(Math.cos(rad) * speed, Math.sin(rad) * speed);
                                b.setScale(1.5);
                            }
                            break;
                        }
                        case 2: {
                            // Targeted spiral + aimed shots at player
                            const spiralCount = 6;
                            for (let i = 0; i < spiralCount; i++) {
                                const b = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                                const angle = (enemy.moveTimer * 0.1) + (i * 60);
                                const rad = Phaser.Math.DegToRad(angle);
                                const speed = 170 + this.currentLevel * 5;
                                b.setVelocity(Math.cos(rad) * speed, Math.sin(rad) * speed);
                                b.setScale(1.3);
                                b.setTint(0xff6600);
                            }
                            // Aimed shot at player
                            if (this.player.active) {
                                const aimAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
                                const ab = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                                ab.setVelocity(Math.cos(aimAngle) * 250, Math.sin(aimAngle) * 250);
                                ab.setScale(2);
                                ab.setTint(0xff0000);
                            }
                            break;
                        }
                        case 3: {
                            // Rage mode: dense spiral + wall of bullets
                            const rageCount = 10;
                            for (let i = 0; i < rageCount; i++) {
                                const b = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                                const angle = (enemy.moveTimer * 0.15) + (i * 36);
                                const rad = Phaser.Math.DegToRad(angle);
                                const speed = 120 + this.currentLevel * 5;
                                b.setVelocity(Math.cos(rad) * speed, Math.sin(rad) * speed);
                                b.setScale(1.2);
                                b.setTint(0xff00ff);
                            }
                            // Wall of bullets downward
                            if (Math.random() < 0.3) {
                                for (let wx = -3; wx <= 3; wx++) {
                                    const wb = this.enemyBullets.create(enemy.x + wx * 40, enemy.y + 40, 'enemyBullet');
                                    wb.setVelocityY(200);
                                    wb.setScale(1.5);
                                    wb.setTint(0xff2222);
                                }
                            }
                            // Screen shake in rage
                            if (Math.random() < 0.1) this.cameras.main.shake(100, 0.003);
                            break;
                        }
                    }
                    enemy.shootTimer = 0;
                    soundManager.playShoot();
                }

                // Boss movement — more aggressive in later phases
                enemy.moveTimer += 16;
                if (enemy.y < 120) {
                    enemy.setVelocityY(30);
                } else {
                    enemy.setVelocityY(0);
                    const moveSpeed = (100 + this.currentLevel * 5) * (1 + (enemy.phase - 1) * 0.3);
                    enemy.setVelocityX(Math.sin(enemy.moveTimer / (400 - enemy.phase * 80)) * moveSpeed);

                    // Phase 3: boss also bobs up and down
                    if (enemy.phase === 3) {
                        enemy.setVelocityY(Math.sin(enemy.moveTimer / 200) * 40);
                    }
                }
            } else if (enemy.isMiniBoss) {
                // Mini-boss: simpler attack pattern
                enemy.shootTimer += 16;
                if (enemy.shootTimer > 800) {
                    for (let angle = -30; angle <= 30; angle += 15) {
                        const b = this.enemyBullets.create(enemy.x, enemy.y + 25, 'enemyBullet');
                        const rad = Phaser.Math.DegToRad(angle + 90);
                        b.setVelocity(Math.cos(rad) * 180, Math.sin(rad) * 180);
                        b.setScale(1.2);
                    }
                    enemy.shootTimer = 0;
                }
                enemy.moveTimer += 16;
                if (enemy.y < 100) {
                    enemy.setVelocityY(40);
                } else {
                    enemy.setVelocityY(0);
                    enemy.setVelocityX(Math.sin(enemy.moveTimer / 400) * 80);
                }

                // Show mini-boss health on boss bar
                if (!this.bossActive) {
                    this.bossHealthBarBg.setVisible(true);
                    this.bossHealthBar.setVisible(true);
                    this.bossNameText.setText('MINI-BOSS');
                    this.bossNameText.setVisible(true);
                    const pct = enemy.health / enemy.maxHealth;
                    this.bossHealthBar.width = 400 * pct;
                }
            } else {
                // Healer: periodically heals nearby enemies
                if (enemy.isHealer) {
                    enemy.healTimer = (enemy.healTimer || 0) + 16;
                    if (enemy.healTimer > 3000) {
                        this.enemies.children.entries.forEach(e => {
                            if (!e.active || e === enemy || e.isBoss || e.isMiniBoss) return;
                            const dist = Phaser.Math.Distance.Between(enemy.x, enemy.y, e.x, e.y);
                            if (dist < 150) {
                                e.health = Math.min((e.health || 1) + 1, 5);
                                // Green flash to show healing
                                e.setTint(0x00ff00);
                                this.time.delayedCall(200, () => { if (e.active) e.clearTint(); });
                            }
                        });
                        enemy.healTimer = 0;
                        // Visual heal pulse
                        const pulse = this.add.circle(enemy.x, enemy.y, 5, 0x00ff66, 0.5);
                        this.tweens.add({
                            targets: pulse, radius: 80, alpha: 0,
                            duration: 600, onComplete: () => pulse.destroy()
                        });
                    }
                }

                // Carrier: periodically spawns small enemies
                if (enemy.isCarrier) {
                    enemy.spawnTimer = (enemy.spawnTimer || 0) + 16;
                    if (enemy.spawnTimer > 4000 && (enemy.spawnCount || 0) < 4 && enemy.y > 50) {
                        const child = this.enemies.create(enemy.x, enemy.y + 20, 'enemyFast');
                        child.health = 1;
                        child.points = 10;
                        child.setScale(0.8);
                        child.setVelocity(Phaser.Math.Between(-80, 80), 100);
                        child.behavior = 0;
                        child.shootTimer = 9999;
                        child.moveTimer = 0;
                        enemy.spawnCount = (enemy.spawnCount || 0) + 1;
                        enemy.spawnTimer = 0;
                    }
                }

                // Bomber cluster shots
                if (enemy.isBomber) {
                    enemy.shootTimer -= 16;
                    if (enemy.shootTimer <= 0 && enemy.y > 50 && enemy.y < height - 100) {
                        [-1, 0, 1].forEach(dir => {
                            const b = this.enemyBullets.create(enemy.x, enemy.y + 15, 'enemyBullet');
                            b.setVelocity(dir * 80, 200);
                            b.setTint(0xff8800);
                        });
                        enemy.shootTimer = Phaser.Math.Between(2000, 3500);
                    }
                }

                // Smart dodge behavior: enemies try to dodge nearby bullets
                if (this.currentLevel >= 3 && enemy.y > 50 && !enemy.isFormation) {
                    let closestBullet = null;
                    let closestDist = 100;
                    this.bullets.children.entries.forEach(b => {
                        if (!b.active) return;
                        const dist = Phaser.Math.Distance.Between(enemy.x, enemy.y, b.x, b.y);
                        if (dist < closestDist) {
                            closestDist = dist;
                            closestBullet = b;
                        }
                    });
                    if (closestBullet && Math.random() < 0.03 * (1 + this.currentLevel * 0.1)) {
                        // Dodge sideways
                        const dodgeDir = (closestBullet.x < enemy.x) ? 1 : -1;
                        enemy.setVelocityX(enemy.body.velocity.x + dodgeDir * 80);
                    }
                }

                // Regular shoot (dive & shoot) — also shoot at player occasionally
                if (enemy.behavior === 2 && !enemy.isBomber) {
                    enemy.shootTimer -= 16;
                    if (enemy.shootTimer <= 0 && enemy.y > 50 && enemy.y < height - 100) {
                        // Aimed shot at player for higher levels
                        if (this.currentLevel >= 4 && this.player.active && Math.random() < 0.4) {
                            const aimAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
                            const b = this.enemyBullets.create(enemy.x, enemy.y + 15, 'enemyBullet');
                            b.setVelocity(Math.cos(aimAngle) * 200, Math.sin(aimAngle) * 200);
                        } else {
                            const b = this.enemyBullets.create(enemy.x, enemy.y + 15, 'enemyBullet');
                            b.setVelocityY(250);
                        }
                        enemy.shootTimer = Phaser.Math.Between(1500, 3000);
                    }
                }

                if (enemy.behavior === 1) {
                    if (enemy.x < 40 || enemy.x > width - 40) enemy.setVelocityX(-enemy.body.velocity.x);
                }

                if (enemy.behavior === 3) {
                    enemy.moveTimer += 16;
                    enemy.angle += 3;
                    enemy.setVelocityX(Math.sin(Phaser.Math.DegToRad(enemy.angle)) * 50);
                }
            }
        });

        this.enemyBullets.children.entries.forEach(bullet => {
            if (bullet.y > height + 30 || bullet.y < -30 || bullet.x < -30 || bullet.x > width + 30) bullet.destroy();
        });

        this.powerUps.children.entries.forEach(p => {
            if (p.y > height + 60) p.destroy();
        });

        // Cleanup coins
        this.coins.children.entries.forEach(c => {
            if (c.y > height + 60) c.destroy();
        });
    };

    // ========================================
    // END GAME
    // ========================================
    this.scene.endGame = function () {
        this.gameOver = true;
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        if (this.score > highScore) localStorage.setItem('cosmicDefenderHighScore', this.score);

        const bestLevel = localStorage.getItem('cosmicDefenderBestLevel') || 1;
        if (this.currentLevel + 1 > bestLevel) {
            localStorage.setItem('cosmicDefenderBestLevel', this.currentLevel + 1);
        }

        this.createExplosion(this.player.x, this.player.y, 0x00ffff, 50);
        soundManager.playExplosion();
        this.cameras.main.shake(500, 0.02);
        this.cameras.main.flash(1000, 255, 255, 255);
        this.player.destroy();

        this.time.delayedCall(1500, () => {
            this.scene.start('GameOverScene', {
                score: this.score,
                level: this.currentLevel + 1,
                levelName: LEVELS[this.currentLevel].name,
                wave: this.wave,
                combo: this.maxCombo,
                kills: this.enemiesKilled,
                weapon: this.currentWeapon,
                time: Math.floor(this.totalTime / 1000),
                gems: this.gemsCollected,
                grazeScore: this.grazeScore,
                events: this.totalEvents
            });
        });
    };

    return this.scene;
}

// ========================================
// GAME OVER SCENE
// ========================================
function GameOverScene() {
    this.scene = new Phaser.Scene('GameOverScene');

    this.scene.init = function (data) {
        this.finalScore = data.score || 0;
        this.finalLevel = data.level || 1;
        this.finalLevelName = data.levelName || 'Outer Rim Patrol';
        this.finalWave = data.wave || 1;
        this.maxCombo = data.combo || 0;
        this.totalKills = data.kills || 0;
        this.lastWeapon = data.weapon || 'blaster';
        this.playTime = data.time || 0;
        this.gemsCollected = data.gems || 0;
        this.grazeScore = data.grazeScore || 0;
        this.totalEvents = data.events || 0;
    };

    this.scene.create = function () {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Create particle texture for this scene
        const gfx = this.make.graphics({ x: 0, y: 0, add: false });
        gfx.fillStyle(0xffffff);
        gfx.fillCircle(3, 3, 3);
        gfx.generateTexture('goParticle', 6, 6);
        gfx.destroy();

        this.add.particles(0, 0, 'goParticle', {
            x: { min: 0, max: width }, y: { min: -10, max: 0 },
            speedY: { min: 50, max: 150 }, lifespan: 6000,
            scale: { start: 0.5, end: 0 }, alpha: { start: 1, end: 0 },
            frequency: 50, blendMode: 'ADD'
        });

        this.add.text(width / 2, 70, 'GAME OVER', {
            fontSize: '64px', fontFamily: 'Arial Black', color: '#ff0000',
            stroke: '#660000', strokeThickness: 6,
            shadow: { offsetX: 0, offsetY: 0, color: '#ff0000', blur: 30, fill: true }
        }).setOrigin(0.5);

        // Format time
        const mins = Math.floor(this.playTime / 60);
        const secs = this.playTime % 60;
        const timeStr = `${mins}m ${secs}s`;

        // Stats panel
        const stats = [
            { text: `Final Score: ${this.finalScore}`, color: '#00ff00', size: '32px' },
            { text: `Level Reached: ${this.finalLevel} — ${this.finalLevelName}`, color: '#88ccff', size: '20px' },
            { text: `Enemies Destroyed: ${this.totalKills}  |  Gems: ${this.gemsCollected}`, color: '#ffff00', size: '18px' },
            { text: `Max Combo: ×${this.maxCombo}  |  Graze Bonus: +${this.grazeScore}`, color: '#ffff00', size: '18px' },
            { text: `Favorite Weapon: ${WEAPONS[this.lastWeapon]?.icon || '🔫'} ${WEAPONS[this.lastWeapon]?.name || 'Blaster'}`, color: '#ffff00', size: '18px' },
            { text: `Survival Time: ${timeStr}  |  Events: ${this.totalEvents}`, color: '#aaaacc', size: '18px' }
        ];

        stats.forEach((stat, i) => {
            this.add.text(width / 2, 150 + i * 35, stat.text, {
                fontSize: stat.size, color: stat.color, stroke: '#003300', strokeThickness: i === 0 ? 4 : 2
            }).setOrigin(0.5);
        });

        // High score
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        const isNew = this.finalScore >= highScore && this.finalScore > 0;

        if (isNew) {
            const newHS = this.add.text(width / 2, 380, '🏆 NEW HIGH SCORE! 🏆', {
                fontSize: '28px', color: '#ffff00', stroke: '#663300', strokeThickness: 3
            }).setOrigin(0.5);
            this.tweens.add({ targets: newHS, scaleX: 1.1, scaleY: 1.1, duration: 500, yoyo: true, repeat: -1 });
        }

        const bestLevel = localStorage.getItem('cosmicDefenderBestLevel') || 1;
        this.add.text(width / 2, 420, `High Score: ${highScore}  |  Best Level: ${bestLevel}`, {
            fontSize: '20px', color: '#ff00ff'
        }).setOrigin(0.5);

        // Buttons
        const retryButton = this.add.text(width / 2, height - 140, 'PLAY AGAIN  [SPACE]', {
            fontSize: '32px', color: '#00ff00', stroke: '#003300', strokeThickness: 4,
            backgroundColor: '#001100', padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();

        retryButton.on('pointerover', () => { retryButton.setScale(1.1); retryButton.setColor('#00ffff'); });
        retryButton.on('pointerout', () => { retryButton.setScale(1); retryButton.setColor('#00ff00'); });
        retryButton.on('pointerdown', () => this.scene.start('GameScene'));

        const menuButton = this.add.text(width / 2, height - 85, 'MAIN MENU  [ESC]', {
            fontSize: '28px', color: '#ffff00', stroke: '#663300', strokeThickness: 3,
            backgroundColor: '#331100', padding: { x: 15, y: 8 }
        }).setOrigin(0.5).setInteractive();

        menuButton.on('pointerover', () => menuButton.setScale(1.1));
        menuButton.on('pointerout', () => menuButton.setScale(1));
        menuButton.on('pointerdown', () => this.scene.start('MenuScene'));

        // Keyboard shortcuts
        this.input.keyboard.on('keydown-SPACE', () => this.scene.start('GameScene'));
        this.input.keyboard.on('keydown-ENTER', () => this.scene.start('GameScene'));
        this.input.keyboard.on('keydown-ESC', () => this.scene.start('MenuScene'));
    };

    return this.scene;
}
