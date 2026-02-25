// ========================================
// COSMIC DEFENDER - Space Shooter Game
// Built with Phaser 3
// ========================================

// Sound Manager using Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = 0.3;
    }
    
    playShoot() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
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
        
        const gainNode = this.audioContext.createGain();
        gainNode.gain.setValueAtTime(this.masterVolume * 0.5, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        noise.start(this.audioContext.currentTime);
        noise.stop(this.audioContext.currentTime + 0.5);
    }
    
    playPowerUp() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }
    
    playHit() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.15);
        
        gainNode.gain.setValueAtTime(this.masterVolume * 0.4, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.15);
    }
    
    playBossWarning() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'triangle';
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.4, this.audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }
}

const soundManager = new SoundManager();

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
    
    this.scene.create = function() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Animated star background
        this.stars = this.add.particles(0, 0, 'particle', {
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
        const title = this.add.text(width / 2, height / 3, 'COSMIC DEFENDER', {
            fontSize: '56px',
            fontFamily: 'Arial Black',
            color: '#00ffff',
            stroke: '#003366',
            strokeThickness: 6,
            shadow: {
                offsetX: 0,
                offsetY: 0,
                color: '#00ffff',
                blur: 20,
                fill: true
            }
        }).setOrigin(0.5);
        
        // Pulsing animation for title
        this.tweens.add({
            targets: title,
            scaleX: 1.05,
            scaleY: 1.05,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        
        // Start button
        const startButton = this.add.text(width / 2, height / 2 + 50, 'START GAME', {
            fontSize: '36px',
            fontFamily: 'Arial',
            color: '#ffff00',
            stroke: '#663300',
            strokeThickness: 4,
            backgroundColor: '#003300',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();
        
        // Button hover effect
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
        
        // High score display
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        this.add.text(width / 2, height - 80, `High Score: ${highScore}`, {
            fontSize: '24px',
            color: '#ff00ff'
        }).setOrigin(0.5);
        
        // Instructions
        this.add.text(width / 2, height - 40, 'Move: MOUSE | Shoot: CLICK/SPACE | Pause: P', {
            fontSize: '16px',
            color: '#aaaaaa'
        }).setOrigin(0.5);
    };
    
    return this.scene;
}

// ========================================
// MAIN GAME SCENE
// ========================================
function GameScene() {
    this.scene = new Phaser.Scene('GameScene');
    
    this.scene.preload = function() {
        // Create graphics for game objects
        this.createGraphics();
    };
    
    this.scene.create = function() {
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
        this.comboTimer = 0;
        this.lastShootTime = 0;
        this.bossActive = false;
        this.bossTimer = 0;
        
        // Power-up states
        this.rapidFire = false;
        this.multiShot = false;
        this.shield = false;
        this.laserBeam = false;
        this.rapidFireTime = 0;
        this.multiShotTime = 0;
        this.shieldTime = 0;
        this.laserBeamTime = 0;
        
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Animated background with parallax stars
        this.createStarfield();
        
        // Create player
        this.player = this.physics.add.sprite(width / 2, height - 100, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);
        
        // Player trail effect
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
        
        // UI
        this.scoreText = this.add.text(20, 20, 'Score: 0', {
            fontSize: '24px',
            color: '#00ff00',
            fontFamily: 'Arial',
            stroke: '#003300',
            strokeThickness: 3
        });
        
        this.healthText = this.add.text(20, 50, 'Health: 100', {
            fontSize: '24px',
            color: '#ff0000',
            fontFamily: 'Arial',
            stroke: '#330000',
            strokeThickness: 3
        });
        
        this.waveText = this.add.text(20, 80, 'Wave: 1', {
            fontSize: '20px',
            color: '#ffff00',
            fontFamily: 'Arial',
            stroke: '#663300',
            strokeThickness: 2
        });
        
        this.comboText = this.add.text(width / 2, 60, '', {
            fontSize: '28px',
            color: '#ff00ff',
            fontFamily: 'Arial Black',
            stroke: '#660066',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        // Health bar
        this.healthBarBg = this.add.rectangle(width - 120, 30, 200, 20, 0x660000);
        this.healthBar = this.add.rectangle(width - 120, 30, 200, 20, 0x00ff00);
        
        // Power-up indicators
        this.powerUpText = this.add.text(width / 2, 20, '', {
            fontSize: '18px',
            color: '#ffff00',
            fontFamily: 'Arial',
            stroke: '#663300',
            strokeThickness: 3
        }).setOrigin(0.5);
        
        // Input
        this.input.on('pointermove', (pointer) => {
            if (!this.isPaused) {
                this.player.x = Phaser.Math.Clamp(pointer.x, 30, width - 30);
            }
        });
        
        this.input.on('pointerdown', () => {
            if (!this.isPaused) {
                this.shootBullet();
            }
        });
        
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        
        // Pause overlay
        this.pauseOverlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);
        this.pauseOverlay.setVisible(false);
        this.pauseText = this.add.text(width / 2, height / 2, 'PAUSED\nPress P to Continue', {
            fontSize: '48px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5).setVisible(false);
    };
    
    this.scene.update = function(time, delta) {
        if (this.gameOver) return;
        
        // Pause toggle
        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            this.isPaused = !this.isPaused;
            this.pauseOverlay.setVisible(this.isPaused);
            this.pauseText.setVisible(this.isPaused);
            if (this.isPaused) {
                this.physics.pause();
            } else {
                this.physics.resume();
            }
            return;
        }
        
        if (this.isPaused) return;
        
        // Shooting with space bar (with rate limit)
        const shootDelay = this.rapidFire ? 150 : 300;
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey) && time - this.lastShootTime > shootDelay) {
            this.shootBullet();
            this.lastShootTime = time;
        }
        
        // Update starfield parallax
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
        
        // Spawn enemies (not during boss fight)
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
        
        // Increase difficulty over time
        this.difficulty = Math.min(1 + Math.floor(this.score / 400), 12);
        
        // Update health bar
        const healthPercent = this.health / 100;
        this.healthBar.width = 200 * healthPercent;
        this.healthBar.x = this.cameras.main.width - 220 + (100 * healthPercent);
        
        if (healthPercent > 0.5) {
            this.healthBar.setFillStyle(0x00ff00);
        } else if (healthPercent > 0.25) {
            this.healthBar.setFillStyle(0xffff00);
        } else {
            this.healthBar.setFillStyle(0xff0000);
        }
        
        // Update combo display
        if (this.combo >= 3) {
            this.comboText.setText('COMBO x' + this.combo + '!');
            this.comboText.setScale(1 + Math.sin(time / 100) * 0.1);
        }
    };
    
    // Create graphics for game objects
    this.scene.createGraphics = function() {
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        
        // Player ship - advanced futuristic design
        graphics.fillStyle(0x00ffff);
        graphics.fillTriangle(20, 5, 5, 35, 35, 35);
        graphics.fillStyle(0x0099ff);
        graphics.fillRect(15, 25, 10, 12);
        graphics.fillStyle(0x00ccff);
        graphics.fillCircle(20, 20, 6);
        graphics.fillStyle(0xffffff);
        graphics.fillCircle(20, 20, 3);
        // Wings
        graphics.fillStyle(0x0088cc);
        graphics.fillTriangle(5, 35, 0, 30, 5, 25);
        graphics.fillTriangle(35, 35, 40, 30, 35, 25);
        // Engine glow
        graphics.fillStyle(0xff6600);
        graphics.fillRect(16, 35, 3, 5);
        graphics.fillRect(21, 35, 3, 5);
        graphics.generateTexture('player', 40, 40);
        graphics.clear();
        
        // Bullet - enhanced neon laser
        graphics.fillStyle(0x00ff00);
        graphics.fillRect(0, 0, 5, 20);
        graphics.fillStyle(0xffffff);
        graphics.fillRect(1.5, 0, 2, 20);
        graphics.fillStyle(0x88ff88);
        graphics.fillRect(0, 0, 5, 5);
        graphics.generateTexture('bullet', 5, 20);
        graphics.clear();
        
        // Laser beam
        graphics.fillStyle(0x00ffff);
        graphics.fillRect(0, 0, 8, 30);
        graphics.fillStyle(0xffffff);
        graphics.fillRect(2, 0, 4, 30);
        graphics.generateTexture('laser', 8, 30);
        graphics.clear();
        
        // Enemy - detailed alien ship
        graphics.fillStyle(0xff0000);
        graphics.fillTriangle(20, 35, 5, 5, 35, 5);
        graphics.fillStyle(0xff3300);
        graphics.fillCircle(20, 15, 8);
        graphics.fillStyle(0xff6600);
        graphics.fillCircle(20, 15, 5);
        graphics.fillStyle(0xffff00);
        graphics.fillCircle(20, 15, 2);
        // Side cannons
        graphics.fillStyle(0xcc0000);
        graphics.fillRect(5, 10, 4, 8);
        graphics.fillRect(31, 10, 4, 8);
        graphics.generateTexture('enemy', 40, 40);
        graphics.clear();
        
        // Fast enemy
        graphics.fillStyle(0xff00ff);
        graphics.fillTriangle(15, 25, 8, 8, 22, 8);
        graphics.fillStyle(0xff66ff);
        graphics.fillCircle(15, 12, 5);
        graphics.fillStyle(0xffccff);
        graphics.fillCircle(15, 12, 2);
        graphics.generateTexture('enemyFast', 30, 30);
        graphics.clear();
        
        // Tank enemy
        graphics.fillStyle(0x00ff00);
        graphics.fillRect(5, 5, 30, 25);
        graphics.fillStyle(0x00cc00);
        graphics.fillCircle(20, 17, 8);
        graphics.fillStyle(0x009900);
        graphics.fillRect(18, 17, 4, 10);
        graphics.generateTexture('enemyTank', 40, 35);
        graphics.clear();
        
        // Boss enemy - large and menacing
        graphics.fillStyle(0x660000);
        graphics.fillRect(10, 20, 80, 50);
        graphics.fillStyle(0xff0000);
        graphics.fillRect(20, 30, 60, 30);
        graphics.fillStyle(0xff3300);
        graphics.fillCircle(50, 45, 15);
        graphics.fillStyle(0xff6600);
        graphics.fillCircle(50, 45, 10);
        graphics.fillStyle(0xffff00);
        graphics.fillCircle(50, 45, 5);
        // Cannons
        graphics.fillStyle(0x990000);
        graphics.fillRect(15, 45, 8, 15);
        graphics.fillRect(77, 45, 8, 15);
        graphics.fillRect(40, 50, 8, 20);
        graphics.fillRect(52, 50, 8, 20);
        // Wings
        graphics.fillStyle(0x330000);
        graphics.fillTriangle(10, 20, 0, 10, 10, 40);
        graphics.fillTriangle(90, 20, 100, 10, 90, 40);
        graphics.generateTexture('boss', 100, 70);
        graphics.clear();
        
        // Enemy bullet
        graphics.fillStyle(0xff00ff);
        graphics.fillCircle(5, 5, 5);
        graphics.fillStyle(0xff66ff);
        graphics.fillCircle(5, 5, 3);
        graphics.generateTexture('enemyBullet', 10, 10);
        graphics.clear();
        
        // Particle
        graphics.fillStyle(0xffffff);
        graphics.fillCircle(3, 3, 3);
        graphics.generateTexture('particle', 6, 6);
        graphics.clear();
        
        // Power-ups with distinct designs
        // Shield power-up
        graphics.fillStyle(0x00ffff);
        graphics.fillCircle(15, 15, 15);
        graphics.lineStyle(3, 0xffffff);
        graphics.strokeCircle(15, 15, 12);
        graphics.lineStyle(2, 0x00cccc);
        graphics.strokeCircle(15, 15, 8);
        graphics.generateTexture('powerupShield', 30, 30);
        graphics.clear();
        
        // Rapid fire power-up
        graphics.fillStyle(0xff00ff);
        graphics.fillCircle(15, 15, 15);
        graphics.fillStyle(0xffffff);
        graphics.fillTriangle(15, 8, 10, 22, 20, 22);
        graphics.fillTriangle(15, 8, 10, 22, 20, 22);
        graphics.generateTexture('powerupRapid', 30, 30);
        graphics.clear();
        
        // Multi-shot power-up
        graphics.fillStyle(0xffff00);
        graphics.fillCircle(15, 15, 15);
        graphics.fillStyle(0xffffff);
        graphics.fillRect(12, 8, 2, 14);
        graphics.fillRect(16, 8, 2, 14);
        graphics.fillRect(8, 10, 2, 10);
        graphics.fillRect(20, 10, 2, 10);
        graphics.generateTexture('powerupMulti', 30, 30);
        graphics.clear();
        
        // Laser beam power-up
        graphics.fillStyle(0x00ffcc);
        graphics.fillCircle(15, 15, 15);
        graphics.fillStyle(0xffffff);
        graphics.fillRect(13, 5, 4, 20);
        graphics.fillRect(10, 8, 10, 3);
        graphics.fillRect(10, 17, 10, 3);
        graphics.generateTexture('powerupLaser', 30, 30);
        graphics.clear();
    };
    
    // Create animated starfield
    this.scene.createStarfield = function() {
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
    
    this.scene.updateStarfield = function(delta) {
        // Stars scroll automatically with particle system
    };
    
    // Shoot bullet
    this.scene.shootBullet = function() {
        soundManager.playShoot();
        
        if (this.laserBeam) {
            // Laser beam - continuous damage
            [-10, 0, 10].forEach(offset => {
                const laser = this.bullets.create(this.player.x + offset, this.player.y - 20, 'laser');
                laser.setVelocityY(-600);
                laser.setScale(1.5);
                laser.setTint(0x00ffff);
            });
        } else if (this.multiShot) {
            // Triple shot
            [-20, 0, 20].forEach(offset => {
                const bullet = this.bullets.create(this.player.x + offset, this.player.y - 20, 'bullet');
                bullet.setVelocityY(-550);
                bullet.setScale(1.3);
            });
        } else {
            const bullet = this.bullets.create(this.player.x, this.player.y - 20, 'bullet');
            bullet.setVelocityY(-500);
        }
        
        // Muzzle flash effect
        const flash = this.add.particles(this.player.x, this.player.y - 15, 'particle', {
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
    
    // Spawn enemy
    this.scene.spawnEnemy = function() {
        const x = Phaser.Math.Between(50, this.cameras.main.width - 50);
        
        // Random enemy type  
        const enemyType = Phaser.Math.Between(0, 10);
        let enemy;
        
        if (enemyType < 6) {
            // Normal enemy (60%)
            enemy = this.enemies.create(x, -30, 'enemy');
            enemy.health = 1;
            enemy.points = 10;
            enemy.setScale(1.2);
        } else if (enemyType < 9) {
            // Fast enemy (30%)
            enemy = this.enemies.create(x, -30, 'enemyFast');
            enemy.health = 1;
            enemy.points = 15;
            enemy.setScale(1);
        } else {
            // Tank enemy (10%)
            enemy = this.enemies.create(x, -30, 'enemyTank');
            enemy.health = 3;
            enemy.points = 30;
            enemy.setScale(1.3);
        }
        
        // Random enemy behavior
        const behavior = Phaser.Math.Between(0, 3);
        enemy.behavior = behavior;
        enemy.shootTimer = Phaser.Math.Between(1000, 2500);
        enemy.moveTimer = 0;
        
        switch(behavior) {
            case 0: // Straight down
                enemy.setVelocityY(80 + this.difficulty * 8);
                break;
            case 1: // Zigzag
                enemy.setVelocityY(70 + this.difficulty * 7);
                enemy.setVelocityX(120);
                break;
            case 2: // Dive and shoot
                enemy.setVelocityY(120 + this.difficulty * 12);
                break;
            case 3: // Circle pattern
                enemy.setVelocityY(60 + this.difficulty * 6);
                enemy.angle = 0;
                break;
        }
    };
    
    // Spawn power-up
    this.scene.spawnPowerUp = function() {
        const x = Phaser.Math.Between(60, this.cameras.main.width - 60);
        
        // Random power-up type
        const types = ['shield', 'rapidFire', 'multiShot', 'laserBeam'];
        const powerType = types[Phaser.Math.Between(0, types.length - 1)];
        
        let powerUp;
        switch(powerType) {
            case 'shield':
                powerUp = this.powerUps.create(x, -30, 'powerupShield');
                break;
            case 'rapidFire':
                powerUp = this.powerUps.create(x, -30, 'powerupRapid');
                break;
            case 'multiShot':
                powerUp = this.powerUps.create(x, -30, 'powerupMulti');
                break;
            case 'laserBeam':
                powerUp = this.powerUps.create(x, -30, 'powerupLaser');
                break;
        }
        
        powerUp.setVelocityY(100);
        powerUp.powerType = powerType;
        
        // Glow animation
        this.tweens.add({
            targets: powerUp,
            scale: { from: 1, to: 1.4 },
            alpha: { from: 1, to: 0.6 },
            duration: 600,
            yoyo: true,
            repeat: -1
        });
        
        // Rotation
        this.tweens.add({
            targets: powerUp,
            angle: 360,
            duration: 2000,
            repeat: -1
        });
    };
    
    // Spawn boss
    this.scene.spawnBoss = function() {
        this.bossActive = true;
        soundManager.playBossWarning();
        
        // Boss warning
        const warningText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'WARNING!\nBOSS APPROACHING', {
            fontSize: '48px',
            fontFamily: 'Arial Black',
            color: '#ff0000',
            align: 'center',
            stroke: '#660000',
            strokeThickness: 6
        }).setOrigin(0.5);
        
        this.tweens.add({
            targets: warningText,
            alpha: { from: 1, to: 0 },
            scale: { from: 1, to: 1.5 },
            duration: 2000,
            onComplete: () => warningText.destroy()
        });
        
        // Screen flash
        this.cameras.main.flash(2000, 255, 0, 0);
        
        // Spawn boss after warning
        this.time.delayedCall(2000, () => {
            const boss = this.enemies.create(this.cameras.main.width / 2, -50, 'boss');
            boss.health = 30 + (this.wave * 10);
            boss.maxHealth = boss.health;
            boss.points = 200;
            boss.isBoss = true;
            boss.setScale(1.5);
            boss.setVelocityY(30);
            boss.shootTimer = 0;
            boss.moveTimer = 0;
            boss.phase = 1;
            
            // Boss health bar
            this.bossHealthBarBg = this.add.rectangle(this.cameras.main.width / 2, 120, 400, 15, 0x660000);
            this.bossHealthBar = this.add.rectangle(this.cameras.main.width / 2, 120, 400, 15, 0xff0000);
            this.bossNameText = this.add.text(this.cameras.main.width / 2, 100, 'ALIEN DESTROYER', {
                fontSize: '20px',
                color: '#ff0000',
                stroke: '#660000',
                strokeThickness: 3
            }).setOrigin(0.5);
        });
    };
    
    // Hit enemy
    this.scene.hitEnemy = function(bullet, enemy) {
        bullet.destroy();
        
        enemy.health = enemy.health || 1;
        enemy.health--;
        
        if (enemy.health <= 0) {
            const points = (enemy.points || 10) * this.difficulty;
            this.score += points * Math.max(1, Math.floor(this.combo / 2));
            this.scoreText.setText('Score: ' + this.score);
            
            // Combo system
            this.combo++;
            this.comboTimer = 2000;
            
            // Show score popup
            const scorePopup = this.add.text(enemy.x, enemy.y, '+' + points, {
                fontSize: '20px',
                color: '#ffff00',
                stroke: '#663300',
                strokeThickness: 3
            }).setOrigin(0.5);
            
            this.tweens.add({
                targets: scorePopup,
                y: scorePopup.y - 50,
                alpha: 0,
                duration: 1000,
                onComplete: () => scorePopup.destroy()
            });
            
            // Check if boss
            if (enemy.isBoss) {
                this.bossActive = false;
                if (this.bossHealthBar) this.bossHealthBar.destroy();
                if (this.bossHealthBarBg) this.bossHealthBarBg.destroy();
                if (this.bossNameText) this.bossNameText.destroy();
                
                // Boss defeated bonus
                this.score += 500;
                this.health = Math.min(100, this.health + 20);
                
                // Victory message
                const victoryText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'BOSS DEFEATED!\n+500 BONUS', {
                    fontSize: '36px',
                    color: '#00ff00',
                    stroke: '#003300',
                    strokeThickness: 4,
                    align: 'center'
                }).setOrigin(0.5);
                
                this.tweens.add({
                    targets: victoryText,
                    alpha: 0,
                    y: victoryText.y - 100,
                    duration: 2000,
                    onComplete: () => victoryText.destroy()
                });
            }
            
            enemy.destroy();
            this.enemiesKilled++;
            
            // Explosion effect
            this.createExplosion(enemy.x, enemy.y, enemy.isBoss ? 0xff0000 : 0xff6600, enemy.isBoss ? 40 : 20);
            soundManager.playExplosion();
            
            // Camera shake
            this.cameras.main.shake(enemy.isBoss ? 300 : 100, enemy.isBoss ? 0.008 : 0.003);
        } else {
            // Enemy damaged but not destroyed
            enemy.setTint(0xff0000);
            this.time.delayedCall(100, () => enemy.clearTint());
            
            // Update boss health bar
            if (enemy.isBoss && this.bossHealthBar) {
                const healthPercent = enemy.health / enemy.maxHealth;
                this.bossHealthBar.width = 400 * healthPercent;
            }
        }
    };
    
    // Hit player
    this.scene.hitPlayer = function(player, enemy) {
        if (this.shield) {
            enemy.destroy();
            this.createExplosion(enemy.x, enemy.y, 0x00ffff, 15);
            soundManager.playExplosion();
            return;
        }
        
        enemy.destroy();
        this.health -= enemy.isBoss ? 30 : 20;
        this.healthText.setText('Health: ' + this.health);
        
        // Reset combo
        this.combo = 0;
        this.comboText.setText('');
        
        // Damage effect
        soundManager.playHit();
        this.cameras.main.shake(250, 0.012);
        this.cameras.main.flash(250, 255, 0, 0);
        
        // Player blink
        this.tweens.add({
            targets: this.player,
            alpha: 0.3,
            duration: 100,
            yoyo: true,
            repeat: 3
        });
        
        if (this.health <= 0) {
            this.endGame();
        }
    };
    
    // Hit player with bullet
    this.scene.hitPlayerBullet = function(player, bullet) {
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
        
        if (this.health <= 0) {
            this.endGame();
        }
    };
    
    // Collect power-up
    this.scene.collectPowerUp = function(player, powerUp) {
        const type = powerUp.powerType;
        powerUp.destroy();
        
        soundManager.playPowerUp();
        this.createExplosion(powerUp.x, powerUp.y, 0xffff00, 15);
        
        // Add score bonus
        this.score += 50;
        
        switch(type) {
            case 'shield':
                this.shield = true;
                this.shieldTime = 6000;
                this.player.setTint(0x00ffff);
                // Shield visual effect
                const shield = this.add.circle(this.player.x, this.player.y, 30, 0x00ffff, 0.3);
                shield.setStrokeStyle(3, 0x00ffff);
                this.tweens.add({
                    targets: shield,
                    alpha: 0.5,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    duration: 500,
                    yoyo: true,
                    repeat: -1
                });
                this.shieldCircle = shield;
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
        }
        
        this.updatePowerUpDisplay();
    };
    
    // Update power-ups
    this.scene.updatePowerUps = function(delta) {
        if (this.shield) {
            this.shieldTime -= delta;
            if (this.shieldCircle) {
                this.shieldCircle.x = this.player.x;
                this.shieldCircle.y = this.player.y;
            }
            if (this.shieldTime <= 0) {
                this.shield = false;
                this.player.clearTint();
                if (this.shieldCircle) {
                    this.shieldCircle.destroy();
                    this.shieldCircle = null;
                }
            }
        }
        
        if (this.rapidFire) {
            this.rapidFireTime -= delta;
            if (this.rapidFireTime <= 0) {
                this.rapidFire = false;
            }
        }
        
        if (this.multiShot) {
            this.multiShotTime -= delta;
            if (this.multiShotTime <= 0) {
                this.multiShot = false;
            }
        }
        
        if (this.laserBeam) {
            this.laserBeamTime -= delta;
            if (this.laserBeamTime <= 0) {
                this.laserBeam = false;
                if (!this.shield) {
                    this.player.clearTint();
                }
            }
        }
        
        this.updatePowerUpDisplay();
    };
    
    this.scene.updatePowerUpDisplay = function() {
        const active = [];
        if (this.shield) active.push('🛡️ SHIELD');
        if (this.rapidFire) active.push('⚡ RAPID');
        if (this.multiShot) active.push('✨ MULTI');
        if (this.laserBeam) active.push('🔫 LASER');
        
        this.powerUpText.setText(active.join(' | '));
    };
    
    // Create explosion effect
    this.scene.createExplosion = function(x, y, color, quantity = 20) {
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
        
        // Add a flash ring
        const ring = this.add.circle(x, y, 5, color, 0.8);
        this.tweens.add({
            targets: ring,
            radius: quantity * 2,
            alpha: 0,
            duration: 500,
            onComplete: () => ring.destroy()
        });
        
        this.time.delayedCall(800, () => particles.destroy());
    };

    
    // Cleanup off-screen objects
    this.scene.cleanupObjects = function() {
        const height = this.cameras.main.height;
        const width = this.cameras.main.width;
        
        this.bullets.children.entries.forEach(bullet => {
            if (bullet.y < -30) bullet.destroy();
        });
        
        this.enemies.children.entries.forEach(enemy => {
            if (enemy.y > height + 100) {
                enemy.destroy();
                return;
            }
            
            // Boss shooting patterns
            if (enemy.isBoss) {
                enemy.shootTimer += 16;
                if (enemy.shootTimer > 500) {
                    // Multi-directional shot
                    for (let angle = 0; angle < 360; angle += 45) {
                        const bullet = this.enemyBullets.create(enemy.x, enemy.y + 30, 'enemyBullet');
                        const rad = Phaser.Math.DegToRad(angle);
                        bullet.setVelocity(Math.cos(rad) * 150, Math.sin(rad) * 150);
                        bullet.setScale(1.5);
                    }
                    enemy.shootTimer = 0;
                    soundManager.playShoot();
                }
                
                // Boss movement pattern
                enemy.moveTimer += 16;
                if (enemy.moveTimer > 100) {
                    if (enemy.y < 100) {
                        enemy.setVelocityY(30);
                    } else {
                        enemy.setVelocityY(0);
                        enemy.setVelocityX(Math.sin(enemy.moveTimer / 300) * 100);
                    }
                }
            } else {
                // Regular enemy shooting
                if (enemy.behavior === 2) {
                    enemy.shootTimer -= 16;
                    if (enemy.shootTimer <= 0 && enemy.y > 50 && enemy.y < height - 100) {
                        const bullet = this.enemyBullets.create(enemy.x, enemy.y + 15, 'enemyBullet');
                        bullet.setVelocityY(250);
                        enemy.shootTimer = Phaser.Math.Between(1500, 3000);
                    }
                }
                
                // Zigzag behavior
                if (enemy.behavior === 1) {
                    if (enemy.x < 40 || enemy.x > width - 40) {
                        enemy.setVelocityX(-enemy.body.velocity.x);
                    }
                }
                
                // Circle pattern behavior
                if (enemy.behavior === 3) {
                    enemy.moveTimer += 16;
                    enemy.angle += 3;
                    const offsetX = Math.sin(Phaser.Math.DegToRad(enemy.angle)) * 50;
                    enemy.setVelocityX(offsetX);
                }
            }
        });
        
        this.enemyBullets.children.entries.forEach(bullet => {
            if (bullet.y > height + 30 || bullet.y < -30 || bullet.x < -30 || bullet.x > width + 30) {
                bullet.destroy();
            }
        });
        
        this.powerUps.children.entries.forEach(powerUp => {
            if (powerUp.y > height + 60) powerUp.destroy();
        });
    };
    
    // End game
    this.scene.endGame = function() {
        this.gameOver = true;
        
        // Save high score
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        if (this.score > highScore) {
            localStorage.setItem('cosmicDefenderHighScore', this.score);
        }
        
        // Large explosion at player
        this.createExplosion(this.player.x, this.player.y, 0x00ffff, 50);
        soundManager.playExplosion();
        
        // Screen shake and flash
        this.cameras.main.shake(500, 0.02);
        this.cameras.main.flash(1000, 255, 255, 255);
        
        this.player.destroy();
        
        // Transition to game over
        this.time.delayedCall(1500, () => {
            this.scene.start('GameOverScene', { 
                score: this.score, 
                wave: this.wave,
                combo: this.combo,
                kills: this.enemiesKilled
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
    
    this.scene.init = function(data) {
        this.finalScore = data.score || 0;
        this.finalWave = data.wave || 1;
        this.maxCombo = data.combo || 0;
        this.totalKills = data.kills || 0;
    };
    
    this.scene.create = function() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background stars
        this.stars = this.add.particles(0, 0, 'particle', {
            x: { min: 0, max: width },
            y: { min: -10, max: 0 },
            speedY: { min: 50, max: 150 },
            lifespan: 6000,
            scale: { start: 0.5, end: 0 },
            alpha: { start: 1, end: 0 },
            frequency: 50,
            blendMode: 'ADD'
        });
        
        // Game Over text
        const gameOverText = this.add.text(width / 2, height / 3, 'GAME OVER', {
            fontSize: '64px',
            fontFamily: 'Arial Black',
            color: '#ff0000',
            stroke: '#660000',
            strokeThickness: 6,
            shadow: {
                offsetX: 0,
                offsetY: 0,
                color: '#ff0000',
                blur: 30,
                fill: true
            }
        }).setOrigin(0.5);
        
        // Score display
        const scoreText = this.add.text(width / 2, height / 2 - 20, `Final Score: ${this.finalScore}`, {
            fontSize: '36px',
            color: '#00ff00',
            stroke: '#003300',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        // Stats
        this.add.text(width / 2, height / 2 + 20, `Wave Reached: ${this.finalWave}`, {
            fontSize: '24px',
            color: '#ffff00'
        }).setOrigin(0.5);
        
        this.add.text(width / 2, height / 2 + 50, `Enemies Destroyed: ${this.totalKills}`, {
            fontSize: '24px',
            color: '#ffff00'
        }).setOrigin(0.5);
        
        if (this.maxCombo >= 3) {
            this.add.text(width / 2, height / 2 + 80, `Max Combo: x${this.maxCombo}`, {
                fontSize: '24px',
                color: '#ff00ff'
            }).setOrigin(0.5);
        }
        
        // High score
        const highScore = localStorage.getItem('cosmicDefenderHighScore') || 0;
        const isNewHighScore = this.finalScore >= highScore;
        
        if (isNewHighScore) {
            const newHighScoreText = this.add.text(width / 2, height / 2 + 120, '🏆 NEW HIGH SCORE! 🏆', {
                fontSize: '28px',
                color: '#ffff00',
                stroke: '#663300',
                strokeThickness: 3
            }).setOrigin(0.5);
            
            this.tweens.add({
                targets: newHighScoreText,
                scaleX: 1.1,
                scaleY: 1.1,
                duration: 500,
                yoyo: true,
                repeat: -1
            });
        }
        
        this.add.text(width / 2, height / 2 + 160, `High Score: ${highScore}`, {
            fontSize: '24px',
            color: '#ff00ff'
        }).setOrigin(0.5);
        
        // Retry button
        const retryButton = this.add.text(width / 2, height - 150, 'PLAY AGAIN', {
            fontSize: '32px',
            color: '#00ff00',
            stroke: '#003300',
            strokeThickness: 4,
            backgroundColor: '#001100',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();
        
        retryButton.on('pointerover', () => {
            retryButton.setScale(1.1);
            retryButton.setColor('#00ffff');
        });
        
        retryButton.on('pointerout', () => {
            retryButton.setScale(1);
            retryButton.setColor('#00ff00');
        });
        
        retryButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
        
        // Menu button
        const menuButton = this.add.text(width / 2, height - 100, 'MAIN MENU', {
            fontSize: '28px',
            color: '#ffff00',
            stroke: '#663300',
            strokeThickness: 3,
            backgroundColor: '#331100',
            padding: { x: 15, y: 8 }
        }).setOrigin(0.5).setInteractive();
        
        menuButton.on('pointerover', () => {
            menuButton.setScale(1.1);
        });
        
        menuButton.on('pointerout', () => {
            menuButton.setScale(1);
        });
        
        menuButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    };
    
    return this.scene;
}
