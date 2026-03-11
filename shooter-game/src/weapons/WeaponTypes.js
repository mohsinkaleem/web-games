import { Weapon } from './Weapon.js';
import { WEAPONS } from '../utils/Constants.js';

export class Pistol extends Weapon {
  constructor() {
    super(WEAPONS.PISTOL);
    this.type = 'hitscan';
  }
}

export class Shotgun extends Weapon {
  constructor() {
    super(WEAPONS.SHOTGUN);
    this.type = 'hitscan';
  }
}

export class AssaultRifle extends Weapon {
  constructor() {
    super(WEAPONS.ASSAULT_RIFLE);
    this.type = 'hitscan';
  }
}

export class RocketLauncher extends Weapon {
  constructor() {
    super(WEAPONS.ROCKET_LAUNCHER);
    this.type = 'projectile';
    this.projectileSpeed = WEAPONS.ROCKET_LAUNCHER.projectileSpeed;
    this.splashDamage = WEAPONS.ROCKET_LAUNCHER.splashDamage;
    this.splashRadius = WEAPONS.ROCKET_LAUNCHER.splashRadius;
  }
}
