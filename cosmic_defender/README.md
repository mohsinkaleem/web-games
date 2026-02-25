# 🚀 Cosmic Defender - Space Shooter Game

An exciting, feature-rich space shooter game built with **Phaser 3** framework, featuring advanced graphics, sound effects, and engaging gameplay mechanics.

## 🎮 Game Features

### Core Gameplay
- **Smooth Controls**: Mouse movement for ship positioning + Click/Space to shoot
- **Progressive Difficulty**: Game gets harder as you progress
- **Wave System**: Survive waves of increasingly difficult enemies
- **Combo System**: Chain kills within 2 seconds for multiplier bonuses
- **Boss Battles**: Face powerful bosses every 20 enemy kills

### Enemy Types
1. **Standard Enemies** (60% spawn rate)
   - Basic movement patterns
   - 1 HP, 10 points

2. **Fast Enemies** (30% spawn rate)
   - Quick and agile
   - 1 HP, 15 points

3. **Tank Enemies** (10% spawn rate)
   - Slow but durable
   - 3 HP, 30 points

4. **Boss Enemies**
   - Multi-directional shooting patterns
   - 30+ HP (scales with wave)
   - 200 points + 500 bonus on defeat
   - Restores 20 health when defeated

### Enemy Behaviors
- **Straight Down**: Direct approach
- **Zigzag**: Horizontal weaving pattern
- **Dive & Shoot**: Fast descent with shooting
- **Circle Pattern**: Sinusoidal movement

### Power-ups
All power-ups last 5-7 seconds and provide visual/gameplay enhancements:

- 🛡️ **Shield**: Complete invincibility with visual shield effect
- ⚡ **Rapid Fire**: Increased fire rate (300ms → 150ms)
- ✨ **Multi-Shot**: Triple laser beams
- 🔫 **Laser Beam**: Devastating continuous beam attack

### Graphics & Visual Effects
- **Enhanced Sprites**: Detailed player ship, enemies, and bosses
- **Particle Systems**:
  - Player engine trails
  - Explosion effects with scaling
  - Muzzle flash on shooting
  - Power-up glow animations
- **Screen Effects**:
  - Camera shake on impacts
  - Flash effects on damage
  - Boss warning animations
  - Victory celebrations
- **Animated Background**: Multi-layer parallax starfield

### Sound System
Procedurally generated sound effects using Web Audio API:
- 🔫 Shoot sounds (frequency sweep)
- 💥 Explosion sounds (filtered noise)
- ⭐ Power-up collection (rising tone)
- 💔 Hit/damage sounds (descending tone)
- ⚠️ Boss warning alarm

### UI & HUD
- Real-time score tracking
- Health bar with color indicators
- Wave counter
- Combo multiplier display
- Active power-up indicators
- High score persistence (localStorage)

## 🎯 Scoring System
- Base points per enemy: `10-30 × difficulty`
- Combo multiplier: Points × `(combo / 2)`
- Power-up bonus: `+50 points`
- Boss defeat: `200 points + 500 bonus`

## ⌨️ Controls
| Input | Action |
|-------|--------|
| Mouse Movement | Move spaceship |
| Click / Space | Shoot |
| P | Pause/Resume |

## 🏆 Game Statistics
End-game screen displays:
- Final Score
- Wave Reached
- Total Enemies Destroyed
- Maximum Combo Achieved
- High Score Record

## 🛠️ Technical Details

### Technologies Used
- **Phaser 3.70.0**: HTML5 game framework
- **Web Audio API**: Procedural sound generation
- **Canvas API**: Hardware-accelerated rendering
- **localStorage**: High score persistence

### Project Structure
```
/ee/
├── index.html          # Main HTML page
├── styles.css          # Styling and animations
├── game.js            # Game logic and scenes
├── README.md          # This file
└── .playwright-cli/   # Test artifacts
```

### Performance Features
- Object pooling for bullets and particles
- Automatic cleanup of off-screen entities
- Efficient particle system management
- Optimized collision detection

## 🧪 Testing
Game has been tested using **playwright-cli** for:
✅ Page loading and rendering
✅ Canvas initialization
✅ Sound system integration
✅ Scene management
✅ Interactive elements

Test screenshots available in project directory.

## 🚀 How to Run

### Local Development Server
```bash
# Using Python 3
python3 -m http.server 8000

# Navigate to
http://localhost:8000
```

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No installation required - runs in browser!

## 🎨 Graphics Assets
All game graphics are procedurally generated using Phaser's Graphics API:
- Player ship: Futuristic design with engine glow
- Enemies: Varied designs (standard, fast, tank, boss)
- Projectiles: Neon lasers and energy bullets
- Effects: Particles, explosions, trails

## 📊 Difficulty Scaling
- Enemy spawn rate increases with score
- Enemy speed increases with difficulty level
- Boss health scales with wave number
- Maximum difficulty cap: Level 12

## 🎵 Audio Features
All sounds are synthesized in real-time:
- No external audio files needed
- Lightweight and responsive
- Volume-controlled output
- Non-intrusive gameplay enhancement

## 💡 Tips for High Scores
1. **Maintain Combos**: Kill enemies quickly in succession
2. **Prioritize Power-ups**: They provide significant advantages
3. **Boss Strategy**: Use shield power-up during boss fights
4. **Movement**: Stay mobile to avoid enemy fire
5. **Wave Survival**: Each wave completion adds bonus points

## 🐛 Known Issues
- Favicon 404 (cosmetic only, doesn't affect gameplay)

## 📝 Future Enhancements
Potential additions:
- Background music track
- More power-up types
- Achievement system
- Leaderboard integration
- Mobile touch controls
- More boss variety
- Special weapons

## 📄 License
Open source - feel free to modify and enhance!

## 🙏 Credits
Built with [Phaser 3](https://phaser.io/) - Open source HTML5 game framework

---

**Enjoy defending the galaxy! 🌌**
