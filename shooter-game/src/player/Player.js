import { PLAYER } from '../utils/Constants.js';
import { clamp } from '../utils/MathUtils.js';

export class Player {
  constructor() {
    this.maxHealth = PLAYER.MAX_HEALTH;
    this.health = this.maxHealth;
    this.isDead = false;
    this.damageMultiplier = 1;
    this.invulnerableTimer = 0;
    this.shield = 0;
  }

  takeDamage(amount) {
    if (this.isDead || this.invulnerableTimer > 0) return;
    // Shield absorbs damage first
    if (this.shield > 0) {
      const absorbed = Math.min(this.shield, amount);
      this.shield -= absorbed;
      amount -= absorbed;
      if (amount <= 0) return;
    }
    this.health = clamp(this.health - amount, 0, this.maxHealth);
    if (this.health <= 0) {
      this.isDead = true;
    }
  }

  heal(amount) {
    if (this.isDead) return;
    this.health = clamp(this.health + amount, 0, this.maxHealth);
  }

  update(dt) {
    if (this.invulnerableTimer > 0) {
      this.invulnerableTimer -= dt;
    }
  }

  reset() {
    this.health = this.maxHealth;
    this.isDead = false;
    this.damageMultiplier = 1;
    this.invulnerableTimer = PLAYER.SPAWN_INVULNERABILITY;
    this.shield = 0;
  }
}
