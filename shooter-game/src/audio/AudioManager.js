// AudioManager using Web Audio API for procedural sound generation
// No external audio files needed - all sounds are synthesized

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.5;
    this.masterGain.connect(this.ctx.destination);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.7;
    this.sfxGain.connect(this.masterGain);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.15;
    this.musicGain.connect(this.masterGain);

    this.initialized = true;
  }

  _ensureCtx() {
    if (!this.initialized) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  // Generate noise buffer
  _noiseBuffer(duration) {
    const length = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  playPistolShot() {
    this._ensureCtx();
    const t = this.ctx.currentTime;

    // Noise burst
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.1);
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 3000;
    noiseFilter.Q.value = 0.5;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
    noise.connect(noiseFilter).connect(noiseGain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.1);

    // Pitch drop
    const osc = this.ctx.createOscillator();
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.1);
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.3, t);
    oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
    osc.connect(oscGain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  playShotgunShot() {
    this._ensureCtx();
    const t = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.2);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.8, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    noise.connect(filter).connect(gain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.25);

    const osc = this.ctx.createOscillator();
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, t);
    oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
    osc.connect(oscGain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  playRifleShot() {
    this._ensureCtx();
    const t = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.06);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 4000;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
    noise.connect(filter).connect(gain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.07);
  }

  playRocketShot() {
    this._ensureCtx();
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.3);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.35);
  }

  playExplosion() {
    this._ensureCtx();
    const t = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.5);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, t);
    filter.frequency.exponentialRampToValueAtTime(100, t + 0.4);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.8, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
    noise.connect(filter).connect(gain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.55);
  }

  playHit() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(200, t + 0.05);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.06);
  }

  playEnemyHit() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.08);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.1);
  }

  playEnemyDeath() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.2);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  playPlayerHit() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.15);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
    noise.connect(filter).connect(gain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.18);
  }

  playPowerUp() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.15);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  playWaveStart() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    [400, 500, 600].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, t + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.15, t + i * 0.1 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.1 + 0.2);
      osc.connect(gain).connect(this.sfxGain);
      osc.start(t + i * 0.1);
      osc.stop(t + i * 0.1 + 0.25);
    });
  }

  playReload() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    // Click
    const osc = this.ctx.createOscillator();
    osc.frequency.value = 200;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.06);
    // Slide
    const osc2 = this.ctx.createOscillator();
    osc2.frequency.setValueAtTime(150, t + 0.3);
    osc2.frequency.linearRampToValueAtTime(300, t + 0.4);
    const gain2 = this.ctx.createGain();
    gain2.gain.setValueAtTime(0, t + 0.28);
    gain2.gain.linearRampToValueAtTime(0.2, t + 0.3);
    gain2.gain.exponentialRampToValueAtTime(0.01, t + 0.45);
    osc2.connect(gain2).connect(this.sfxGain);
    osc2.start(t + 0.28);
    osc2.stop(t + 0.5);
  }

  playEmptyClick() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.frequency.value = 800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.03);
    osc.connect(gain).connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.04);
  }

  playEnemyShoot() {
    this._ensureCtx();
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer(0.08);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.07);
    noise.connect(filter).connect(gain).connect(this.sfxGain);
    noise.start(t);
    noise.stop(t + 0.1);
  }

  // Simple looping ambient drone
  startMusic() {
    this._ensureCtx();
    if (this._musicOsc) return;
    const t = this.ctx.currentTime;

    // Low drone
    this._musicOsc = this.ctx.createOscillator();
    this._musicOsc.type = 'sawtooth';
    this._musicOsc.frequency.value = 55;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    this._musicOsc.connect(filter).connect(this.musicGain);
    this._musicOsc.start(t);

    // Add subtle LFO modulation
    this._lfo = this.ctx.createOscillator();
    this._lfo.frequency.value = 0.2;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 10;
    this._lfo.connect(lfoGain).connect(this._musicOsc.frequency);
    this._lfo.start(t);
  }

  stopMusic() {
    if (this._musicOsc) {
      this._musicOsc.stop();
      this._musicOsc = null;
    }
    if (this._lfo) {
      this._lfo.stop();
      this._lfo = null;
    }
  }
}
