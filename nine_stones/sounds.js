/**
 * Sound Effects Manager for Navakankari
 * Uses Web Audio API to generate synthesized sounds
 */

class SoundManager {
    constructor() {
        this.enabled = true;
        this.volume = 0.7;
        this.audioContext = null;
        this.initialized = false;
        
        // Initialize on first user interaction
        this.initOnInteraction();
    }

    initOnInteraction() {
        const initAudio = () => {
            if (!this.initialized) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.initialized = true;
            }
            document.removeEventListener('click', initAudio);
            document.removeEventListener('touchstart', initAudio);
        };
        
        document.addEventListener('click', initAudio);
        document.addEventListener('touchstart', initAudio);
    }

    ensureContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        }
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
    }

    // Create oscillator-based sound
    createTone(frequency, duration, type = 'sine', fadeOut = true) {
        if (!this.enabled) return;
        this.ensureContext();

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.value = this.volume * 0.3;
        
        if (fadeOut) {
            gainNode.gain.exponentialRampToValueAtTime(
                0.01,
                this.audioContext.currentTime + duration
            );
        }
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Piece placement sound - soft click
    playPlace() {
        if (!this.enabled) return;
        this.ensureContext();

        // Create a soft "thunk" sound
        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.audioContext.destination);
        gainNode.gain.value = this.volume * 0.4;

        // Low frequency thud
        const osc1 = this.audioContext.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.value = 150;
        osc1.connect(gainNode);
        
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        osc1.start();
        osc1.stop(this.audioContext.currentTime + 0.15);

        // Higher click
        setTimeout(() => {
            this.createTone(800, 0.05, 'square', true);
        }, 10);
    }

    // Piece movement sound - slide
    playMove() {
        if (!this.enabled) return;
        this.ensureContext();

        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.audioContext.destination);
        gainNode.gain.value = this.volume * 0.2;

        const osc = this.audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 300;
        osc.connect(gainNode);
        
        // Slide effect
        osc.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + 0.15);
    }

    // Piece selection sound
    playSelect() {
        if (!this.enabled) return;
        this.createTone(600, 0.08, 'sine', true);
    }

    // Mill formed sound - triumphant chord
    playMill() {
        if (!this.enabled) return;
        this.ensureContext();

        // Play a triumphant chord (C major)
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
        
        frequencies.forEach((freq, i) => {
            setTimeout(() => {
                const gainNode = this.audioContext.createGain();
                gainNode.connect(this.audioContext.destination);
                gainNode.gain.value = this.volume * 0.25;

                const osc = this.audioContext.createOscillator();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                osc.connect(gainNode);
                
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
                
                osc.start();
                osc.stop(this.audioContext.currentTime + 0.5);
            }, i * 80);
        });
    }

    // Capture sound - dramatic
    playCapture() {
        if (!this.enabled) return;
        this.ensureContext();

        // Descending tone for capture
        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.audioContext.destination);
        gainNode.gain.value = this.volume * 0.35;

        const osc = this.audioContext.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 400;
        osc.connect(gainNode);
        
        osc.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.3);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + 0.3);

        // Impact sound
        setTimeout(() => {
            this.createTone(80, 0.15, 'sine', true);
        }, 50);
    }

    // Win sound - celebration fanfare
    playWin() {
        if (!this.enabled) return;
        this.ensureContext();

        // Fanfare melody
        const notes = [
            { freq: 523.25, delay: 0 },     // C5
            { freq: 659.25, delay: 100 },   // E5
            { freq: 783.99, delay: 200 },   // G5
            { freq: 1046.50, delay: 300 },  // C6
            { freq: 783.99, delay: 450 },   // G5
            { freq: 1046.50, delay: 550 },  // C6
        ];

        notes.forEach(note => {
            setTimeout(() => {
                const gainNode = this.audioContext.createGain();
                gainNode.connect(this.audioContext.destination);
                gainNode.gain.value = this.volume * 0.3;

                const osc = this.audioContext.createOscillator();
                osc.type = 'triangle';
                osc.frequency.value = note.freq;
                osc.connect(gainNode);
                
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);
                
                osc.start();
                osc.stop(this.audioContext.currentTime + 0.25);
            }, note.delay);
        });
    }

    // Lose sound - descending
    playLose() {
        if (!this.enabled) return;
        this.ensureContext();

        const notes = [
            { freq: 392, delay: 0 },    // G4
            { freq: 349.23, delay: 150 }, // F4
            { freq: 311.13, delay: 300 }, // Eb4
            { freq: 261.63, delay: 450 }, // C4
        ];

        notes.forEach(note => {
            setTimeout(() => {
                const gainNode = this.audioContext.createGain();
                gainNode.connect(this.audioContext.destination);
                gainNode.gain.value = this.volume * 0.25;

                const osc = this.audioContext.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = note.freq;
                osc.connect(gainNode);
                
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                
                osc.start();
                osc.stop(this.audioContext.currentTime + 0.3);
            }, note.delay);
        });
    }

    // Invalid move / error sound
    playError() {
        if (!this.enabled) return;
        this.ensureContext();

        // Buzzer sound
        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.audioContext.destination);
        gainNode.gain.value = this.volume * 0.2;

        const osc = this.audioContext.createOscillator();
        osc.type = 'square';
        osc.frequency.value = 200;
        osc.connect(gainNode);
        
        // Vibrato effect
        const lfo = this.audioContext.createOscillator();
        const lfoGain = this.audioContext.createGain();
        lfo.frequency.value = 20;
        lfoGain.gain.value = 50;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        osc.start();
        lfo.start();
        osc.stop(this.audioContext.currentTime + 0.2);
        lfo.stop(this.audioContext.currentTime + 0.2);
    }

    // Hover sound - subtle
    playHover() {
        if (!this.enabled) return;
        this.createTone(1000, 0.03, 'sine', true);
    }

    // Button click
    playClick() {
        if (!this.enabled) return;
        this.createTone(700, 0.05, 'sine', true);
    }

    // Hint sound
    playHint() {
        if (!this.enabled) return;
        this.ensureContext();

        // Magical sparkle
        const notes = [800, 1000, 1200, 1600];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                this.createTone(freq, 0.1, 'sine', true);
            }, i * 50);
        });
    }

    // Undo sound
    playUndo() {
        if (!this.enabled) return;
        this.ensureContext();

        // Reverse whoosh
        const gainNode = this.audioContext.createGain();
        gainNode.connect(this.audioContext.destination);
        gainNode.gain.value = this.volume * 0.2;

        const osc = this.audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 200;
        osc.connect(gainNode);
        
        osc.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + 0.2);
    }

    // New game sound
    playNewGame() {
        if (!this.enabled) return;
        this.ensureContext();

        // Rising tone
        const notes = [261.63, 329.63, 392, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, i) => {
            setTimeout(() => {
                this.createTone(freq, 0.15, 'triangle', true);
            }, i * 100);
        });
    }
}

// Create global sound manager instance
const soundManager = new SoundManager();
