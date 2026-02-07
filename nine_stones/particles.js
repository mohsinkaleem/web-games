/**
 * Particle Effects System for Navakankari
 * Creates beautiful visual effects for game events
 */

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.isRunning = false;

        this.init();
    }

    init() {
        if (!this.canvas) {
            console.warn('Particle canvas not found');
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        
        const boardFrame = this.canvas.parentElement;
        if (boardFrame) {
            this.canvas.width = boardFrame.offsetWidth;
            this.canvas.height = boardFrame.offsetHeight;
        }
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.animate();
    }

    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    animate() {
        if (!this.isRunning || !this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles = this.particles.filter(particle => {
            particle.update();
            particle.draw(this.ctx);
            return particle.isAlive();
        });

        if (this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.isRunning = false;
        }
    }

    // Convert SVG coordinates to canvas coordinates
    svgToCanvas(svgX, svgY) {
        const svgElement = document.querySelector('.board-svg');
        if (!svgElement) return { x: svgX, y: svgY };

        const svgRect = svgElement.getBoundingClientRect();
        const canvasRect = this.canvas.getBoundingClientRect();
        
        // SVG viewBox is 500x500
        const scaleX = svgRect.width / 500;
        const scaleY = svgRect.height / 500;
        
        const offsetX = svgRect.left - canvasRect.left;
        const offsetY = svgRect.top - canvasRect.top;
        
        return {
            x: svgX * scaleX + offsetX,
            y: svgY * scaleY + offsetY
        };
    }

    // Mill formation effect - golden sparkles
    createMillEffect(positions) {
        if (!this.ctx) return;

        positions.forEach(pos => {
            const canvasPos = this.svgToCanvas(pos.x, pos.y);
            
            // Create sparkle burst
            for (let i = 0; i < 15; i++) {
                this.particles.push(new SparkleParticle(
                    canvasPos.x,
                    canvasPos.y,
                    '#FFD700'
                ));
            }
        });

        // Create connecting line particles
        for (let i = 0; i < positions.length - 1; i++) {
            const start = this.svgToCanvas(positions[i].x, positions[i].y);
            const end = this.svgToCanvas(positions[i + 1].x, positions[i + 1].y);
            
            for (let j = 0; j < 10; j++) {
                const t = j / 10;
                const x = start.x + (end.x - start.x) * t;
                const y = start.y + (end.y - start.y) * t;
                
                this.particles.push(new SparkleParticle(x, y, '#FFA500'));
            }
        }

        this.start();
    }

    // Capture effect - explosion
    createCaptureEffect(x, y, color) {
        if (!this.ctx) return;

        const canvasPos = this.svgToCanvas(x, y);
        
        // Explosion particles
        for (let i = 0; i < 25; i++) {
            this.particles.push(new ExplosionParticle(
                canvasPos.x,
                canvasPos.y,
                color
            ));
        }

        // Smoke effect
        for (let i = 0; i < 8; i++) {
            this.particles.push(new SmokeParticle(
                canvasPos.x,
                canvasPos.y
            ));
        }

        this.start();
    }

    // Placement effect - ripple
    createPlaceEffect(x, y, color) {
        if (!this.ctx) return;

        const canvasPos = this.svgToCanvas(x, y);
        
        // Ripple rings
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.particles.push(new RippleParticle(
                    canvasPos.x,
                    canvasPos.y,
                    color
                ));
                this.start();
            }, i * 100);
        }

        // Small sparkles
        for (let i = 0; i < 8; i++) {
            this.particles.push(new SparkleParticle(
                canvasPos.x,
                canvasPos.y,
                color,
                0.5
            ));
        }

        this.start();
    }

    // Movement trail effect
    createMoveTrail(fromX, fromY, toX, toY, color) {
        if (!this.ctx) return;

        const from = this.svgToCanvas(fromX, fromY);
        const to = this.svgToCanvas(toX, toY);
        
        // Trail particles along path
        const steps = 15;
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const x = from.x + (to.x - from.x) * t;
            const y = from.y + (to.y - from.y) * t;
            
            setTimeout(() => {
                this.particles.push(new TrailParticle(x, y, color));
                this.start();
            }, i * 20);
        }
    }

    // Win celebration effect
    createWinCelebration() {
        if (!this.ctx) return;

        // Use canvas-confetti library if available
        if (typeof confetti !== 'undefined') {
            // Fire confetti from both sides
            const count = 200;
            const defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
                origin: { x: 0.2 }
            });
            fire(0.2, {
                spread: 60,
                origin: { x: 0.5 }
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
                origin: { x: 0.8 }
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
                origin: { x: 0.5 }
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
                origin: { x: 0.5 }
            });
        }

        // Also create our own particles
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                this.particles.push(new ConfettiParticle(
                    Math.random() * this.canvas.width,
                    -10
                ));
                this.start();
            }, i * 30);
        }
    }

    // Hint glow effect
    createHintGlow(x, y) {
        if (!this.ctx) return;

        const canvasPos = this.svgToCanvas(x, y);
        
        this.particles.push(new GlowParticle(canvasPos.x, canvasPos.y, '#FFD700'));
        for (let i = 0; i < 5; i++) {
            this.particles.push(new SparkleParticle(
                canvasPos.x,
                canvasPos.y,
                '#FFD700',
                0.3
            ));
        }

        this.start();
    }

    clear() {
        this.particles = [];
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

// Base Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 1;
        this.decay = 0.02;
    }

    update() {
        this.life -= this.decay;
    }

    draw(ctx) {
        // Override in subclass
    }

    isAlive() {
        return this.life > 0;
    }
}

// Sparkle particle for mill effects
class SparkleParticle extends Particle {
    constructor(x, y, color, speedMult = 1) {
        super(x, y);
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 3 + 1) * speedMult;
        this.size = Math.random() * 4 + 2;
        this.decay = 0.025;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
    }

    update() {
        super.update();
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.speed *= 0.95;
        this.rotation += this.rotationSpeed;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.life;
        
        // Draw star shape
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const innerAngle = angle + Math.PI / 4;
            ctx.lineTo(
                Math.cos(angle) * this.size,
                Math.sin(angle) * this.size
            );
            ctx.lineTo(
                Math.cos(innerAngle) * this.size * 0.4,
                Math.sin(innerAngle) * this.size * 0.4
            );
        }
        ctx.closePath();
        
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        
        ctx.restore();
    }
}

// Explosion particle for captures
class ExplosionParticle extends Particle {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 6 + 2;
        this.size = Math.random() * 6 + 3;
        this.decay = 0.03;
        this.gravity = 0.1;
        this.vy = Math.sin(this.angle) * this.speed;
        this.vx = Math.cos(this.angle) * this.speed;
    }

    update() {
        super.update();
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.size *= 0.97;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
    }
}

// Smoke particle
class SmokeParticle extends Particle {
    constructor(x, y) {
        super(x, y);
        this.size = Math.random() * 15 + 10;
        this.decay = 0.015;
        this.vy = -Math.random() * 2 - 1;
        this.vx = (Math.random() - 0.5) * 2;
    }

    update() {
        super.update();
        this.x += this.vx;
        this.y += this.vy;
        this.size += 0.5;
        this.vy *= 0.98;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life * 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#888';
        ctx.fill();
        ctx.restore();
    }
}

// Ripple particle for placements
class RippleParticle extends Particle {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.radius = 5;
        this.maxRadius = 40;
        this.decay = 0.025;
    }

    update() {
        super.update();
        this.radius += (this.maxRadius - this.radius) * 0.1;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3 * this.life;
        ctx.stroke();
        ctx.restore();
    }
}

// Trail particle for movement
class TrailParticle extends Particle {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.size = Math.random() * 4 + 2;
        this.decay = 0.05;
    }

    update() {
        super.update();
        this.size *= 0.95;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life * 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
    }
}

// Confetti particle for win
class ConfettiParticle extends Particle {
    constructor(x, y) {
        super(x, y);
        this.colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.size = Math.random() * 10 + 5;
        this.decay = 0.005;
        this.vy = Math.random() * 3 + 2;
        this.vx = (Math.random() - 0.5) * 4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
        this.wobble = Math.random() * 10;
    }

    update() {
        super.update();
        this.y += this.vy;
        this.x += this.vx + Math.sin(this.wobble) * 0.5;
        this.wobble += 0.1;
        this.rotation += this.rotationSpeed;
        this.vy += 0.05; // gravity
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
        ctx.restore();
    }
}

// Glow particle for hints
class GlowParticle extends Particle {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.radius = 20;
        this.pulsePhase = 0;
        this.decay = 0.01;
    }

    update() {
        super.update();
        this.pulsePhase += 0.1;
        this.radius = 20 + Math.sin(this.pulsePhase) * 5;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life * 0.5;
        
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
    }
}

// Create global particle system instance
let particleSystem;
document.addEventListener('DOMContentLoaded', () => {
    particleSystem = new ParticleSystem('particle-canvas');
});
