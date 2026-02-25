// ========================================
// COSMIC DEFENDER - Space Shooter Game
// Built with Phaser 3 — Enhanced Edition
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

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
        const title = this.add.text(width / 2, height / 4 - 10, 'COSMIC DEFENDER', {
            fontSize: '56px',
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
        this.add.text(width / 2, height / 4 + 40, 'ENHANCED EDITION', {
            fontSize: '18px',
            fontFamily: 'Arial',
            color: '#ff6b6b',
            stroke: '#330000',
            strokeThickness: 2
        }).setOrigin(0.5);

        // Start button
        const startButton = this.add.text(width / 2, height / 2 + 20, 'START GAME', {
            fontSize: '36px',
            fontFamily: 'Arial',
            color: '#ffff00',
            stroke: '#663300',
            strokeThickness: 4,
            backgroundColor: '#003300',
            padding: { x: 20, y: 10 }
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
        this.add.text(width / 2, height - 120, `High Score: ${highScore}`, {
            fontSize: '24px', color: '#ff00ff'
        }).setOrigin(0.5);

        // Controls summary
        const controlLines = [
            'Move: WASD / Arrow Keys    Shoot: SPACE / Click    Weapons: 1-5',
            'Bomb: B    Pause: P'
        ];
        controlLines.forEach((line, i) => {
            this.add.text(width / 2, height - 70 + i * 25, line, {
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
        this.combo = 0;
        this.maxCombo = 0;
        this.comboTimer = 0;
        this.lastShootTime = 0;
        this.bossActive = false;
        this.bossTimer = 0;
        this.autoFireHeld = false;

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
        this.playerSpeed = 300;

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

        // Collisions
        this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hitPlayer, null, this);
        this.physics.add.overlap(this.player, this.enemyBullets, this.hitPlayerBullet, null, this);
        this.physics.add.overlap(this.player, this.powerUps, this.collectPowerUp, null, this);

        // ---- UI ----
        this.scoreText = this.add.text(20, 20, 'Score: 0', {
            fontSize: '24px', color: '#00ff00', fontFamily: 'Arial',
            stroke: '#003300', strokeThickness: 3
        });

        this.healthText = this.add.text(20, 50, 'Health: 100', {
            fontSize: '24px', color: '#ff0000', fontFamily: 'Arial',
            stroke: '#330000', strokeThickness: 3
        });

        this.waveText = this.add.text(20, 80, 'Wave: 1', {
            fontSize: '20px', color: '#ffff00', fontFamily: 'Arial',
            stroke: '#663300', strokeThickness: 2
        });

        this.bombText = this.add.text(20, 110, 'Bombs: 💣💣💣', {
            fontSize: '18px', color: '#ff8800', fontFamily: 'Arial',
            stroke: '#663300', strokeThickness: 2
        });

        this.comboText = this.add.text(width / 2, 80, '', {
            fontSize: '28px', color: '#ff00ff', fontFamily: 'Arial Black',
            stroke: '#660066', strokeThickness: 4
        }).setOrigin(0.5);

        // Health bar
        this.healthBarBg = this.add.rectangle(width - 120, 30, 200, 20, 0x660000);
        this.healthBar = this.add.rectangle(width - 120, 30, 200, 20, 0x00ff00);

        // Weapon display
        this.weaponText = this.add.text(width / 2, height - 30, '🔫 Blaster [1]', {
            fontSize: '16px', color: '#00ff00', fontFamily: 'Arial',
            stroke: '#003300', strokeThickness: 2,
            backgroundColor: '#001100',
            padding: { x: 10, y: 4 }
        }).setOrigin(0.5);

        // Power-up indicators
        this.powerUpText = this.add.text(width / 2, 20, '', {
            fontSize: '18px', color: '#ffff00', fontFamily: 'Arial',
            stroke: '#663300', strokeThickness: 3
        }).setOrigin(0.5);

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
        this.pauseOverlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7).setVisible(false);
        this.pauseTextObj = this.add.text(width / 2, height / 2, 'PAUSED\nPress P to Continue', {
            fontSize: '48px', color: '#ffffff', align: 'center'
        }).setOrigin(0.5).setVisible(false);
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
        this.player.setVelocity(vx, vy);

        // Constrain vertical position to lower 75% of screen
        const minY = this.cameras.main.height * 0.25;
        const maxY = this.cameras.main.height - 30;
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
        this.updateStarfield(delta);

        // Combo timer decay
        if (this.combo > 0) {
            this.comboTimer -= delta;
            if (this.comboTimer <= 0) {
                this.combo = 0;
                this.comboText.setText('');
            }
        }

        // Boss spawning
        if (!this.bossActive && this.enemiesKilled > 0 && this.enemiesKilled % 20 === 0) {
            this.bossTimer += delta;
            if (this.bossTimer > 3000) {
                this.spawnBoss();
                this.bossTimer = 0;
                this.wave++;
                this.waveText.setText('Wave: ' + this.wave);
            }
        }

        // Spawn enemies
        if (!this.bossActive) {
            this.enemySpawnTimer += delta;
            const spawnRate = Math.max(800 - (this.difficulty * 40), 300);
            if (this.enemySpawnTimer > spawnRate) {
                this.spawnEnemy();
                this.enemySpawnTimer = 0;
            }
        }

        // Spawn power-ups
        this.powerUpTimer += delta;
        if (this.powerUpTimer > 8000) {
            this.spawnPowerUp();
            this.powerUpTimer = 0;
        }

        // Update power-up timers
        this.updatePowerUps(delta);

        // Clean up off-screen objects
        this.cleanupObjects();

        // Difficulty
        this.difficulty = Math.min(1 + Math.floor(this.score / 400), 12);

        // Health bar
        const healthPercent = this.health / 100;
        this.healthBar.width = 200 * healthPercent;
        this.healthBar.x = this.cameras.main.width - 220 + (100 * healthPercent);
        if (healthPercent > 0.5) this.healthBar.setFillStyle(0x00ff00);
        else if (healthPercent > 0.25) this.healthBar.setFillStyle(0xffff00);
        else this.healthBar.setFillStyle(0xff0000);

        // Update combo display
        if (this.combo >= 3) {
            const tier = this.getCurrentComboTier();
            if (tier) {
                this.comboText.setText(`${tier.name} x${this.combo}`);
                this.comboText.setColor(tier.color);
            } else {
                this.comboText.setText('COMBO x' + this.combo + '!');
            }
            this.comboText.setScale(1 + Math.sin(time / 100) * 0.1);
        }

        // Update homing bullets
        this.updateHomingBullets(delta);
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

        // Stealth enemy (new)
        g.fillStyle(0x3366ff);
        g.fillTriangle(15, 28, 3, 5, 27, 5);
        g.fillStyle(0x5588ff);
        g.fillCircle(15, 12, 5);
        g.fillStyle(0x99bbff);
        g.fillCircle(15, 12, 2);
        g.generateTexture('enemyStealth', 30, 30);
        g.clear();

        // Bomber enemy (new)
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

        // Bomb powerup (new)
        g.fillStyle(0xff4400);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillCircle(15, 15, 8);
        g.fillStyle(0xff4400);
        g.fillCircle(15, 15, 5);
        g.generateTexture('powerupBomb', 30, 30);
        g.clear();

        // Health powerup (new)
        g.fillStyle(0x00ff66);
        g.fillCircle(15, 15, 15);
        g.fillStyle(0xffffff);
        g.fillRect(12, 8, 6, 14);
        g.fillRect(8, 12, 14, 6);
        g.generateTexture('powerupHealth', 30, 30);
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
        this.bombText.setText('Bombs: ' + '💣'.repeat(Math.max(0, this.bombs)));
        soundManager.playBomb();

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.cameras.main.flash(800, 255, 255, 255);
        this.cameras.main.shake(500, 0.015);

        const ring = this.add.circle(this.player.x, this.player.y, 10, 0xffffff, 0.6);
        this.tweens.add({
            targets: ring,
            radius: 500,
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
        });

        this.enemyBullets.children.entries.slice().forEach(b => b.destroy());
        this.scoreText.setText('Score: ' + this.score);

        const bombTxt = this.add.text(width / 2, height / 2, '💥 BOMB! 💥', {
            fontSize: '48px', color: '#ffffff', fontFamily: 'Arial Black',
            stroke: '#ff4400', strokeThickness: 6
        }).setOrigin(0.5);
        this.tweens.add({
            targets: bombTxt,
            alpha: 0, scaleX: 2, scaleY: 2,
            duration: 1200,
            onComplete: () => bombTxt.destroy()
        });
    };

    // ========================================
    // WEAPON UNLOCK NOTIFICATION
    // ========================================
    this.scene.showWeaponUnlock = function (weaponName) {
        const w = WEAPONS[weaponName];
        soundManager.playComboTier();
        const txt = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 60,
            `🔓 NEW WEAPON UNLOCKED!\n${w.icon} ${w.name} — Press [${w.key}]\n${w.description}`, {
            fontSize: '22px', color: w.color, fontFamily: 'Arial Black',
            stroke: '#000000', strokeThickness: 4, align: 'center',
            backgroundColor: '#111122', padding: { x: 16, y: 10 }
        }).setOrigin(0.5);
        this.tweens.add({
            targets: txt,
            alpha: 0, y: txt.y - 80,
            duration: 3500,
            onComplete: () => txt.destroy()
        });
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
    // SPAWN ENEMY
    // ========================================
    this.scene.spawnEnemy = function () {
        const x = Phaser.Math.Between(50, this.cameras.main.width - 50);
        const roll = Phaser.Math.Between(0, 100);
        let enemy;

        if (roll < 45) {
            // Normal (45%)
            enemy = this.enemies.create(x, -30, 'enemy');
            enemy.health = 1;
            enemy.points = 10;
            enemy.setScale(1.2);
        } else if (roll < 70) {
            // Fast (25%)
            enemy = this.enemies.create(x, -30, 'enemyFast');
            enemy.health = 1;
            enemy.points = 15;
            enemy.setScale(1);
        } else if (roll < 82) {
            // Tank (12%)
            enemy = this.enemies.create(x, -30, 'enemyTank');
            enemy.health = 3;
            enemy.points = 30;
            enemy.setScale(1.3);
        } else if (roll < 93) {
            // Stealth (11%) — fades in and out
            enemy = this.enemies.create(x, -30, 'enemyStealth');
            enemy.health = 2;
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
        } else {
            // Bomber (7%) — shoots clusters
            enemy = this.enemies.create(x, -30, 'enemyBomber');
            enemy.health = 2;
            enemy.points = 35;
            enemy.setScale(1.2);
            enemy.isBomber = true;
        }

        const behavior = Phaser.Math.Between(0, 3);
        enemy.behavior = behavior;
        enemy.shootTimer = Phaser.Math.Between(1000, 2500);
        enemy.moveTimer = 0;

        switch (behavior) {
            case 0:
                enemy.setVelocityY(80 + this.difficulty * 8);
                break;
            case 1:
                enemy.setVelocityY(70 + this.difficulty * 7);
                enemy.setVelocityX(120);
                break;
            case 2:
                enemy.setVelocityY(120 + this.difficulty * 12);
                break;
            case 3:
                enemy.setVelocityY(60 + this.difficulty * 6);
                enemy.angle = 0;
                break;
        }
    };

    // ========================================
    // SPAWN POWER-UP
    // ========================================
    this.scene.spawnPowerUp = function () {
        const x = Phaser.Math.Between(60, this.cameras.main.width - 60);
        const types = ['shield', 'rapidFire', 'multiShot', 'laserBeam', 'bomb', 'health'];
        const powerType = types[Phaser.Math.Between(0, types.length - 1)];

        const textureMap = {
            shield: 'powerupShield',
            rapidFire: 'powerupRapid',
            multiShot: 'powerupMulti',
            laserBeam: 'powerupLaser',
            bomb: 'powerupBomb',
            health: 'powerupHealth'
        };

        const powerUp = this.powerUps.create(x, -30, textureMap[powerType]);
        powerUp.setVelocityY(100);
        powerUp.powerType = powerType;

        this.tweens.add({ targets: powerUp, scale: { from: 1, to: 1.4 }, alpha: { from: 1, to: 0.6 }, duration: 600, yoyo: true, repeat: -1 });
        this.tweens.add({ targets: powerUp, angle: 360, duration: 2000, repeat: -1 });
    };

    // ========================================
    // SPAWN BOSS
    // ========================================
    this.scene.spawnBoss = function () {
        this.bossActive = true;
        soundManager.playBossWarning();

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const warningText = this.add.text(width / 2, height / 2, 'WARNING!\nBOSS APPROACHING', {
            fontSize: '48px', fontFamily: 'Arial Black', color: '#ff0000',
            align: 'center', stroke: '#660000', strokeThickness: 6
        }).setOrigin(0.5);
        this.tweens.add({
            targets: warningText, alpha: { from: 1, to: 0 }, scale: { from: 1, to: 1.5 },
            duration: 2000, onComplete: () => warningText.destroy()
        });
        this.cameras.main.flash(2000, 255, 0, 0);

        this.time.delayedCall(2000, () => {
            const boss = this.enemies.create(width / 2, -50, 'boss');
            boss.health = 30 + (this.wave * 10);
            boss.maxHealth = boss.health;
            boss.points = 200;
            boss.isBoss = true;
            boss.setScale(1.5);
            boss.setVelocityY(30);
            boss.shootTimer = 0;
            boss.moveTimer = 0;
            boss.phase = 1;

            this.bossHealthBarBg = this.add.rectangle(width / 2, 120, 400, 15, 0x660000);
            this.bossHealthBar = this.add.rectangle(width / 2, 120, 400, 15, 0xff0000);
            this.bossNameText = this.add.text(width / 2, 100, 'ALIEN DESTROYER', {
                fontSize: '20px', color: '#ff0000', stroke: '#660000', strokeThickness: 3
            }).setOrigin(0.5);
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
            if (enemy.isBoss && this.bossHealthBar) {
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
        const points = (enemy.points || 10) * this.difficulty;
        this.score += points * scoreMulti;
        this.scoreText.setText('Score: ' + this.score);

        // Combo
        const prevTier = this.getCurrentComboTier();
        this.combo++;
        if (this.combo > this.maxCombo) this.maxCombo = this.combo;
        this.comboTimer = 2500;

        // Check for new combo tier
        const newTier = this.getCurrentComboTier();
        if (newTier && newTier !== prevTier) {
            soundManager.playComboTier();
            const tierTxt = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2,
                newTier.name, {
                fontSize: '42px', color: newTier.color, fontFamily: 'Arial Black',
                stroke: '#000000', strokeThickness: 5
            }).setOrigin(0.5);
            this.tweens.add({
                targets: tierTxt, alpha: 0, scaleX: 2, scaleY: 2, y: tierTxt.y - 60,
                duration: 1500, onComplete: () => tierTxt.destroy()
            });

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
                this.bombText.setText('Bombs: ' + '💣'.repeat(this.bombs));
            }
        }

        // Score popup
        const popTxt = '+' + (points * scoreMulti);
        const scorePopup = this.add.text(enemy.x, enemy.y, popTxt, {
            fontSize: '20px', color: '#ffff00', stroke: '#663300', strokeThickness: 3
        }).setOrigin(0.5);
        this.tweens.add({
            targets: scorePopup, y: scorePopup.y - 50, alpha: 0,
            duration: 1000, onComplete: () => scorePopup.destroy()
        });

        // Boss defeat
        if (enemy.isBoss) {
            this.bossActive = false;
            if (this.bossHealthBar) this.bossHealthBar.destroy();
            if (this.bossHealthBarBg) this.bossHealthBarBg.destroy();
            if (this.bossNameText) this.bossNameText.destroy();

            this.score += 500;
            this.health = Math.min(100, this.health + 20);
            this.bombs = Math.min(5, this.bombs + 1);
            this.bombText.setText('Bombs: ' + '💣'.repeat(this.bombs));

            const victoryText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2,
                'BOSS DEFEATED!\n+500 BONUS  +💣', {
                fontSize: '36px', color: '#00ff00', stroke: '#003300', strokeThickness: 4, align: 'center'
            }).setOrigin(0.5);
            this.tweens.add({
                targets: victoryText, alpha: 0, y: victoryText.y - 100,
                duration: 2000, onComplete: () => victoryText.destroy()
            });
        }

        enemy.destroy();
        this.enemiesKilled++;
        this.createExplosion(enemy.x, enemy.y, enemy.isBoss ? 0xff0000 : 0xff6600, enemy.isBoss ? 40 : 20);
        soundManager.playExplosion();
        this.cameras.main.shake(enemy.isBoss ? 300 : 100, enemy.isBoss ? 0.008 : 0.003);
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
        if (this.shield) {
            enemy.destroy();
            this.createExplosion(enemy.x, enemy.y, 0x00ffff, 15);
            soundManager.playExplosion();
            return;
        }
        enemy.destroy();
        this.health -= enemy.isBoss ? 30 : 20;
        this.healthText.setText('Health: ' + this.health);
        this.combo = 0;
        this.comboText.setText('');

        soundManager.playHit();
        this.cameras.main.shake(250, 0.012);
        this.cameras.main.flash(250, 255, 0, 0);
        this.tweens.add({ targets: this.player, alpha: 0.3, duration: 100, yoyo: true, repeat: 3 });

        if (this.health <= 0) this.endGame();
    };

    this.scene.hitPlayerBullet = function (player, bullet) {
        if (this.shield) {
            bullet.destroy();
            this.createExplosion(bullet.x, bullet.y, 0x00ffff, 8);
            return;
        }
        bullet.destroy();
        this.health -= 10;
        this.healthText.setText('Health: ' + this.health);

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
        this.createExplosion(powerUp.x, powerUp.y, 0xffff00, 15);
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
                this.bombText.setText('Bombs: ' + '💣'.repeat(this.bombs));
                break;
            case 'health':
                this.health = Math.min(100, this.health + 25);
                this.healthText.setText('Health: ' + this.health);
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
        if (this.shield) active.push('🛡️ SHIELD');
        if (this.rapidFire) active.push('⚡ RAPID');
        if (this.multiShot) active.push('✨ MULTI');
        if (this.laserBeam) active.push('🔫 LASER');
        this.powerUpText.setText(active.join(' | '));
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
                if (enemy.shootTimer > 500) {
                    for (let angle = 0; angle < 360; angle += 45) {
                        const b = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                        const rad = Phaser.Math.DegToRad(angle);
                        b.setVelocity(Math.cos(rad) * 150, Math.sin(rad) * 150);
                        b.setScale(1.5);
                    }
                    enemy.shootTimer = 0;
                    soundManager.playShoot();
                }
                enemy.moveTimer += 16;
                if (enemy.y < 100) {
                    enemy.setVelocityY(30);
                } else {
                    enemy.setVelocityY(0);
                    enemy.setVelocityX(Math.sin(enemy.moveTimer / 300) * 100);
                }
            } else {
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

                // Regular shoot (dive & shoot)
                if (enemy.behavior === 2 && !enemy.isBomber) {
                    enemy.shootTimer -= 16;
                    if (enemy.shootTimer <= 0 && enemy.y > 50 && enemy.y < height - 100) {
                        const b = this.enemyBullets.create(enemy.x, enemy.y + 15, 'enemyBullet');
                        b.setVelocityY(250);
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
    };

    // ========================================
    // END GAME
    // ========================================
    this.scene.endGame = function () {
        this.gameOver = true;
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        if (this.score > highScore) localStorage.setItem('cosmicDefenderHighScore', this.score);

        this.createExplosion(this.player.x, this.player.y, 0x00ffff, 50);
        soundManager.playExplosion();
        this.cameras.main.shake(500, 0.02);
        this.cameras.main.flash(1000, 255, 255, 255);
        this.player.destroy();

        this.time.delayedCall(1500, () => {
            this.scene.start('GameOverScene', {
                score: this.score,
                wave: this.wave,
                combo: this.maxCombo,
                kills: this.enemiesKilled,
                weapon: this.currentWeapon
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
        this.finalWave = data.wave || 1;
        this.maxCombo = data.combo || 0;
        this.totalKills = data.kills || 0;
        this.lastWeapon = data.weapon || 'blaster';
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

        this.add.text(width / 2, 80, 'GAME OVER', {
            fontSize: '64px', fontFamily: 'Arial Black', color: '#ff0000',
            stroke: '#660000', strokeThickness: 6,
            shadow: { offsetX: 0, offsetY: 0, color: '#ff0000', blur: 30, fill: true }
        }).setOrigin(0.5);

        // Stats panel
        const stats = [
            `Final Score: ${this.finalScore}`,
            `Wave Reached: ${this.finalWave}`,
            `Enemies Destroyed: ${this.totalKills}`,
            `Max Combo: x${this.maxCombo}`,
            `Favorite Weapon: ${WEAPONS[this.lastWeapon]?.icon || '🔫'} ${WEAPONS[this.lastWeapon]?.name || 'Blaster'}`
        ];

        stats.forEach((line, i) => {
            const color = i === 0 ? '#00ff00' : '#ffff00';
            const size = i === 0 ? '36px' : '22px';
            this.add.text(width / 2, 170 + i * 38, line, {
                fontSize: size, color: color, stroke: '#003300', strokeThickness: i === 0 ? 4 : 2
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

        this.add.text(width / 2, 420, `High Score: ${highScore}`, {
            fontSize: '24px', color: '#ff00ff'
        }).setOrigin(0.5);

        // Buttons
        const retryButton = this.add.text(width / 2, height - 130, 'PLAY AGAIN  [SPACE]', {
            fontSize: '32px', color: '#00ff00', stroke: '#003300', strokeThickness: 4,
            backgroundColor: '#001100', padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();

        retryButton.on('pointerover', () => { retryButton.setScale(1.1); retryButton.setColor('#00ffff'); });
        retryButton.on('pointerout', () => { retryButton.setScale(1); retryButton.setColor('#00ff00'); });
        retryButton.on('pointerdown', () => this.scene.start('GameScene'));

        const menuButton = this.add.text(width / 2, height - 75, 'MAIN MENU  [ESC]', {
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