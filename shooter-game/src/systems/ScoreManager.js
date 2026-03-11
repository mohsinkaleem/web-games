import { SCORING, WAVES } from '../utils/Constants.js';

export class ScoreManager {
  constructor() {
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.highScore = parseInt(localStorage.getItem('arenaShooterHighScore') || '0', 10);
    this.onScoreChange = null;
    this.onComboChange = null;
    this.onMultiKill = null;

    // Multi-kill tracking
    this.multiKillTimer = 0;
    this.multiKillCount = 0;
    this.totalKills = 0;
    this.headshotStreak = 0;
  }

  addKill(points, isHeadshot = false) {
    this.totalKills++;

    // Multi-kill tracking (kills within 1.5s window)
    this.multiKillCount++;
    this.multiKillTimer = 1.5;

    let finalPoints = points * this.combo;
    if (isHeadshot) {
      finalPoints *= SCORING.HEADSHOT_MULTIPLIER;
      this.headshotStreak++;
      if (this.headshotStreak >= 3) {
        finalPoints *= 1.5; // Headshot streak bonus
      }
    } else {
      this.headshotStreak = 0;
    }

    // Multi-kill bonus
    if (this.multiKillCount >= 2) {
      const multiBonus = 1 + (this.multiKillCount - 1) * 0.5; // +50% per extra kill
      finalPoints *= multiBonus;
      if (this.onMultiKill) {
        const labels = ['', '', 'DOUBLE KILL', 'TRIPLE KILL', 'QUAD KILL', 'RAMPAGE'];
        const label = labels[Math.min(this.multiKillCount, 5)];
        this.onMultiKill(label, this.multiKillCount);
      }
    }

    this.score += Math.round(finalPoints);
    this.combo += SCORING.COMBO_INCREMENT;
    this.comboTimer = SCORING.COMBO_TIMEOUT;

    if (this.onScoreChange) this.onScoreChange(this.score);
    if (this.onComboChange) this.onComboChange(this.combo);
  }

  addWaveClearBonus(wave) {
    const bonus = WAVES.WAVE_CLEAR_BONUS_MULTIPLIER * wave;
    this.score += bonus;
    console.log(`[ScoreManager] Wave ${wave} clear bonus: +${bonus}`);
    if (this.onScoreChange) this.onScoreChange(this.score);
  }

  update(dt) {
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        this.combo = 1;
        if (this.onComboChange) this.onComboChange(this.combo);
      }
    }

    if (this.multiKillTimer > 0) {
      this.multiKillTimer -= dt;
      if (this.multiKillTimer <= 0) {
        this.multiKillCount = 0;
      }
    }
  }

  saveHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('arenaShooterHighScore', String(this.highScore));
      console.log('[ScoreManager] New high score:', this.highScore);
    }
  }

  reset() {
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.multiKillTimer = 0;
    this.multiKillCount = 0;
    this.totalKills = 0;
    this.headshotStreak = 0;
  }
}
