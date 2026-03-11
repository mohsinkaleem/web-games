export class HUD {
  constructor() {
    this.healthBar = document.getElementById('health-bar');
    this.healthText = document.getElementById('health-text');
    this.shieldBar = document.getElementById('shield-bar');
    this.ammoText = document.getElementById('ammo-text');
    this.ammoReserve = document.getElementById('ammo-reserve');
    this.weaponName = document.getElementById('weapon-name');
    this.waveText = document.getElementById('wave-text');
    this.waveAnnounce = document.getElementById('wave-announce');
    this.scoreText = document.getElementById('score-text');
    this.comboText = document.getElementById('combo-text');
    this.killFeed = document.getElementById('kill-feed');
    this.speedIndicator = document.getElementById('speed-indicator');
    this.damageIndicator = document.getElementById('damage-indicator');
    this.hud = document.getElementById('hud');
    this.dashBar = document.getElementById('dash-bar');
    this.fpsCounter = document.getElementById('fps-counter');
    this.shieldIndicator = document.getElementById('shield-indicator');
    this.timeSlowIndicator = document.getElementById('timeslow-indicator');
    this.ultimateBar = document.getElementById('ultimate-bar');
    this.ultimateText = document.getElementById('ultimate-text');
    this.screenFlashEl = document.getElementById('screen-flash');

    this.waveAnnounceTimer = 0;
    this.fpsFrames = 0;
    this.fpsTime = 0;
    this.fpsDisplay = 0;
  }

  updateHealth(health, maxHealth, shield = 0) {
    const pct = (health / maxHealth) * 100;
    this.healthBar.style.width = pct + '%';
    this.healthText.textContent = Math.round(health);

    if (pct > 60) {
      this.healthBar.style.background = 'linear-gradient(90deg, #00ff88, #22ffaa)';
      this.healthBar.style.boxShadow = '0 0 8px rgba(0, 255, 136, 0.3)';
    } else if (pct > 30) {
      this.healthBar.style.background = 'linear-gradient(90deg, #ffaa00, #ffcc00)';
      this.healthBar.style.boxShadow = '0 0 8px rgba(255, 170, 0, 0.3)';
    } else {
      this.healthBar.style.background = 'linear-gradient(90deg, #ff2255, #ff4466)';
      this.healthBar.style.boxShadow = '0 0 12px rgba(255, 34, 85, 0.5)';
    }

    // Shield overlay on health bar
    if (this.shieldBar) {
      if (shield > 0) {
        const shieldPct = Math.min((shield / maxHealth) * 100, 100);
        this.shieldBar.style.width = shieldPct + '%';
      } else {
        this.shieldBar.style.width = '0%';
      }
    }
  }

  updateAmmo(current, reserve, weaponName) {
    this.weaponName.textContent = weaponName;
    if (current === Infinity) {
      this.ammoText.textContent = '∞';
      this.ammoReserve.textContent = '';
    } else {
      this.ammoText.textContent = current;
      this.ammoReserve.textContent = reserve === Infinity ? '' : `/ ${reserve}`;
    }

    if (current !== Infinity && current <= 5) {
      this.ammoText.classList.add('low');
    } else {
      this.ammoText.classList.remove('low');
    }
  }

  updateWave(wave) {
    this.waveText.textContent = `Wave ${wave}`;
  }

  announceWave(wave, typeLabel = '') {
    this.waveAnnounce.textContent = `WAVE ${wave}${typeLabel}`;
    this.waveAnnounce.classList.add('show');
    this.waveAnnounceTimer = 2.5;
  }

  updateScore(score) {
    this.scoreText.textContent = score.toLocaleString();
  }

  updateCombo(combo) {
    if (combo > 1) {
      this.comboText.textContent = `×${combo.toFixed(1)}`;
      this.comboText.classList.add('active');
    } else {
      this.comboText.classList.remove('active');
    }
  }

  addKillFeedItem(text) {
    const item = document.createElement('div');
    item.className = 'kill-feed-item';
    item.textContent = text;
    this.killFeed.appendChild(item);

    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transition = 'opacity 0.5s';
      setTimeout(() => item.remove(), 500);
    }, 3000);

    // Limit to 5 items
    while (this.killFeed.children.length > 5) {
      this.killFeed.removeChild(this.killFeed.firstChild);
    }
  }

  updatePowerUps(speedTimer, damageTimer, timeSlowTimer, shield) {
    if (speedTimer > 0) {
      this.speedIndicator.classList.add('active');
      this.speedIndicator.querySelector('.timer').textContent = speedTimer.toFixed(1) + 's';
    } else {
      this.speedIndicator.classList.remove('active');
    }
    if (damageTimer > 0) {
      this.damageIndicator.classList.add('active');
      this.damageIndicator.querySelector('.timer').textContent = damageTimer.toFixed(1) + 's';
    } else {
      this.damageIndicator.classList.remove('active');
    }
    if (this.timeSlowIndicator) {
      if (timeSlowTimer > 0) {
        this.timeSlowIndicator.classList.add('active');
        this.timeSlowIndicator.querySelector('.timer').textContent = timeSlowTimer.toFixed(1) + 's';
      } else {
        this.timeSlowIndicator.classList.remove('active');
      }
    }
    if (this.shieldIndicator) {
      if (shield > 0) {
        this.shieldIndicator.classList.add('active');
        this.shieldIndicator.querySelector('.timer').textContent = Math.round(shield);
      } else {
        this.shieldIndicator.classList.remove('active');
      }
    }
  }

  updateUltimate(charge, maxCharge, ready) {
    if (!this.ultimateBar) return;
    const pct = (charge / maxCharge) * 100;
    this.ultimateBar.style.width = pct + '%';
    if (ready) {
      this.ultimateBar.style.background = 'linear-gradient(90deg, #00ccff, #00ffff)';
      this.ultimateBar.style.boxShadow = '0 0 12px rgba(0, 200, 255, 0.6)';
      if (this.ultimateText) this.ultimateText.textContent = 'READY [F]';
      this.ultimateText.style.color = '#00ccff';
    } else {
      this.ultimateBar.style.background = 'linear-gradient(90deg, #335577, #4488aa)';
      this.ultimateBar.style.boxShadow = 'none';
      if (this.ultimateText) this.ultimateText.textContent = `${charge}/${maxCharge}`;
      this.ultimateText.style.color = 'rgba(255,255,255,0.4)';
    }
  }

  updateDash(cooldown, maxCooldown) {
    if (!this.dashBar) return;
    const ready = cooldown <= 0;
    const pct = ready ? 100 : ((maxCooldown - cooldown) / maxCooldown) * 100;
    this.dashBar.style.width = pct + '%';
    this.dashBar.style.opacity = ready ? '1' : '0.5';
  }

  update(dt) {
    if (this.waveAnnounceTimer > 0) {
      this.waveAnnounceTimer -= dt;
      if (this.waveAnnounceTimer <= 0) {
        this.waveAnnounce.classList.remove('show');
      }
    }

    // FPS counter
    this.fpsFrames++;
    this.fpsTime += dt;
    if (this.fpsTime >= 0.5) {
      this.fpsDisplay = Math.round(this.fpsFrames / this.fpsTime);
      this.fpsFrames = 0;
      this.fpsTime = 0;
      if (this.fpsCounter) {
        this.fpsCounter.textContent = this.fpsDisplay + ' FPS';
      }
    }
  }

  show() {
    this.hud.style.display = 'block';
  }

  hide() {
    this.hud.style.display = 'none';
  }
}
