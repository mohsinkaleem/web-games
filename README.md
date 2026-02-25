# 🎮 Game Arcade

A collection of browser-based games — no server or installation required. Just open `index.html` in your browser.

---

## Games

| Game | Genre | Description |
| ------ | ------- | ------------- |
| [🚀 Cosmic Defender](cosmic_defender/) | Space Shooter | Enhanced Phaser 3 shooter with 5 weapons, combo tiers, boss battles, bombs & full keyboard controls |
| [⚫ Nine Stones](nine_stones/) | Strategy | Navakankari / Nine Men's Morris with 3-level AI, undo, hints, GSAP animations |
| [🎹 Keytone](keytone/) | Typing / Music | Musical typing practice with 40+ texts, 7 sound themes, timed modes & achievements |

---

## Quick Start

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (recommended for best experience)
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Cosmic Defender — Enhanced Edition

### New in this version

- **Full keyboard movement** — WASD + Arrow keys (up/down/left/right)
- **5 switchable weapons** — Blaster, Spread Shot, Homing Missiles, Plasma Cannon, Chain Lightning
- **Weapon unlock system** — Unlock new weapons as your score increases
- **Tiered combo system** — 5 named tiers (TRIPLE → PENTA KILL → UNSTOPPABLE → COSMIC FURY → GODLIKE) with scaling damage and score multipliers
- **Bomb system** — Press B to clear the screen; start with 3, earn more from bosses
- **2 new enemy types** — Stealth (fades in/out) and Bomber (cluster shots)
- **2 new power-ups** — Health restore and Bomb pickup
- **Auto-fire** — Hold Space for continuous shooting
- **Keyboard navigation** — Start game with Enter/Space, retry with Space, menu with Esc

### Controls

| Key | Action |
| ----- | -------- |
| WASD / Arrow Keys | Move ship (all 4 directions) |
| Space (hold) | Auto-fire |
| Click | Single shot |
| 1–5 | Switch weapon |
| B | Bomb (screen clear) |
| P | Pause |

### Weapons

| # | Weapon | Unlock | Description |
| --- | -------- | -------- | ------------- |
| 1 | 🔫 Blaster | Start | Standard rapid-fire |
| 2 | 🌟 Spread Shot | 500 pts | 5-way fan pattern |
| 3 | 🚀 Homing Missiles | 1,500 pts | Auto-tracking guided missiles |
| 4 | 💠 Plasma Cannon | 3,000 pts | Slow high-damage AoE blast |
| 5 | ⚡ Chain Lightning | 5,000 pts | Arcs between nearby enemies |

### Combo Tiers

| Kills | Name | Damage Bonus | Score Multiplier | Special |
| ------- | ------ | ------------- | ----------------- | --------- |
| 3 | TRIPLE! | +10% | 2× | — |
| 5 | PENTA KILL! | +20% | 3× | — |
| 10 | UNSTOPPABLE! | +30% | 5× | — |
| 15 | COSMIC FURY! | +50% | 8× | Auto-shield 3s |
| 25 | GODLIKE! | +75% | 12× | +1 Bomb |

---

## Nine Stones (Navakankari)

Classic Indian strategy board game with:

- Two-player and AI modes (Easy / Medium / Hard)
- Three game phases: Placing → Moving → Flying
- Mill formation, hints, undo, move history
- Sound effects and particle animations

---

## Keytone

Musical typing tutor:

- 40+ texts across 6 categories
- 7 sound themes (Piano, Synth, Retro, Marimba, Bells, Strings, Typewriter)
- Real-time WPM/accuracy tracking
- Achievement and streak systems
- Custom text upload (TXT, EPUB, MD)

---

## Tech Stack

- **Cosmic Defender** — Phaser 3, Web Audio API, vanilla JS
- **Nine Stones** — GSAP, Web Audio API, vanilla JS
- **Keytone** — React (Vite build), Web Audio API

No build step required for Cosmic Defender or Nine Stones. Keytone ships pre-built.

---

## License

Personal / educational use.
