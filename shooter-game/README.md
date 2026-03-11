# Arena Shooter

A browser-based 3D first-person arena shooter built with Three.js, Cannon-es physics, and Vite.

## Quick Start

```bash
npm install
npm run dev     # Development server with HMR
npm run build   # Production build
npm run preview # Preview production build
```

## Controls

| Key(s) | Action |
|--------|--------|
| `W/A/S/D` | Move |
| `Mouse` | Aim |
| `Left Click` | Shoot |
| `R` | Reload |
| `1-4` | Switch weapon |
| `Space` | Jump |
| `Shift` | Sprint |
| `Q` | Dash (has cooldown) |
| `Scroll` | Cycle weapons |
| `Esc` | Pause / Resume |

## Weapons

1. **Pistol** — Infinite ammo, semi-auto, solid accuracy
2. **Shotgun** — 8 pellets per shot, devastating up close
3. **Assault Rifle** — Full-auto with spread buildup
4. **Rocket Launcher** — Explosive projectiles with splash damage

## Enemy Types

- **Grunt** — Fast melee rushers that can leap at you from mid-range
- **Shooter** — Ranged enemies that strafe and fire projectiles (unlocked wave 2)
- **Tank** — Heavy chargers with telegraph attacks (unlocked wave 4)

## Wave Types

Waves cycle through different types for variety:
- **Normal** — Standard mix of enemies
- **Rush** — Double the grunts, minimal ranged enemies
- **Elite** — Fewer but much tougher enemies with extra tanks
- **Swarm** — Massive numbers of weaker enemies
- **Boss** — Additional boss tanks with 3x health/1.5x damage (every 5th wave)

## Scoring

- Kills grant base points × combo multiplier
- Combo builds with consecutive kills (4s timeout)
- **Headshots**: 2.5× damage + bonus score
- **Headshot streaks** (3+): additional 1.5× score bonus
- **Multi-kills** (within 1.5s): Double Kill, Triple Kill, Quad Kill, Rampage
- **Wave clear bonus**: 1500 × wave number

## Power-ups

Enemies have a 30% drop chance:
- **Health** (+35 HP)
- **Ammo** (2 magazines)
- **Speed Boost** (2× move speed, 7s)
- **Damage Boost** (2.5× damage, 7s)

## Architecture

```
src/
├── main.js                # Entry point, game loop
├── core/
│   ├── Game.js            # Main game class, orchestrates all systems
│   ├── GameState.js       # State machine (MENU/PLAYING/PAUSED/GAMEOVER)
│   ├── InputManager.js    # Keyboard/mouse input with pointer lock handling
│   └── Clock.js           # Frame timing with dt cap
├── player/
│   ├── Player.js          # Health, damage, invulnerability
│   ├── PlayerController.js # Physics body, movement, mouse look, dash
│   └── Camera.js          # Recoil, shake, FOV punch, head bob
├── weapons/
│   ├── Weapon.js          # Base weapon class (fire, reload, viewmodel)
│   ├── WeaponTypes.js     # Pistol, Shotgun, AssaultRifle, RocketLauncher
│   └── WeaponManager.js   # Weapon switching, raycasting, firing logic
├── enemies/
│   ├── Enemy.js           # Base enemy (mesh, physics, health bar, states)
│   ├── EnemyTypes.js      # Grunt, Shooter, Tank with unique AI behaviors
│   └── EnemyManager.js    # Object pooling, spawning, lifecycle
├── systems/
│   ├── WaveManager.js     # Wave progression, spawn queues, wave types
│   ├── ScoreManager.js    # Scoring, combos, multi-kills, high scores
│   └── PowerUpManager.js  # Drop, float, collect, timed effects
├── effects/
│   ├── ParticleSystem.js  # GPU-instanced particle system
│   └── EffectsManager.js  # Muzzle flash, trails, explosions, screen FX
├── ui/
│   ├── HUD.js             # Health, ammo, wave, score, kill feed, FPS
│   ├── Menu.js            # Start, pause, game over screens
│   └── MiniMap.js         # Top-down tactical map
├── world/
│   ├── Arena.js           # Ground, walls, cover objects, floor details
│   ├── Lighting.js        # Scene lighting setup
│   └── Skybox.js          # Sky rendering
├── audio/
│   └── AudioManager.js    # Sound effects and music (Howler.js)
└── utils/
    ├── Constants.js       # All tunable game parameters
    ├── MathUtils.js       # clamp, lerp, distance, random helpers
    └── ObjectPool.js      # Generic object pool for enemy reuse
```

## Debugging

The game logs diagnostic info to the browser console:
- **`[Debug]`** — Periodic player state (position, velocity, grounded, sleep state, active keys)
- **`[InputManager]`** — Pointer lock changes, focus loss, input clearing
- **`[PlayerController]`** — Physics body sleep state warnings
- **`[WaveManager]`** — Wave announcements and types
- **`[ScoreManager]`** — Wave clear bonuses, high score updates
- **`[Game]`** — State transitions, multi-kills

Press F12 → Console to monitor. The periodic debug log runs every 2 seconds during gameplay.

## Testing

```bash
npm test              # Headless Playwright test
npm run test:visible  # Visible browser test
```

## Known Issues & Fixes

### WASD Movement Getting Stuck (Fixed)
**Root cause**: Three compounding issues:
1. **Physics body sleep** — Cannon-es `allowSleep: true` on the physics world caused the player body to sleep after standing still. Direct velocity modifications on a sleeping body are silently ignored.
2. **Input state corruption** — When pointer lock was lost (tab switch, Escape, OS dialog), held keys never received `keyup` events, leaving ghost-pressed keys.
3. **Stale grounded state** — `isGrounded` was only set `false` on jump, never reset per frame. If the body slept, collision events stopped, making grounding state unreliable.

**Fix**: Player body now has `allowSleep: false`, is force-woken every frame, input state is cleared on all focus/pointer lock transitions, and `isGrounded` resets each frame with bounds-based fallback detection.