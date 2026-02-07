# Nine-Pebbles (Navakankari) - Nine Men's Morris

A beautifully designed web-based implementation of the ancient Indian strategy board game, also known as Nine Men's Morris. This game features stunning graphics, smooth animations, sound effects, and an intelligent AI opponent.

## 🎮 Features

### Core Gameplay
- **Authentic Rules**: Faithful implementation of traditional Navakankari rules
- **Three Game Phases**: Placing, Moving, and Flying phases with distinct strategies
- **Mill Formation**: Form mills (3-in-a-row) to capture opponent pieces
- **Win Conditions**: Reduce opponent to 2 pieces or block all their moves

### Game Modes
- **Two-Player Mode**: Play with a friend on the same device
- **VS AI Mode**: Challenge the computer opponent with 3 difficulty levels:
  - **Easy**: Depth-1 search, good for beginners
  - **Medium**: Depth-3 search with alpha-beta pruning
  - **Hard**: Depth-5 search, challenging for experienced players

### Visual & Audio
- **GSAP Animations**: Smooth piece placement and movement animations
- **Particle Effects**: Visual feedback for placements, captures, mills, and celebrations
- **Sound Effects**: Web Audio API synthesized sounds for all game actions
- **Indian Aesthetic**: Saffron and green color scheme with traditional motifs
- **Responsive Design**: Works on desktop and tablet devices

### UI Features
- **Move History**: Track the last 10 moves with mill indicators
- **Hint System**: Get AI-powered suggestions when stuck
- **Undo Function**: Take back moves (up to 20 moves)
- **Phase Indicator**: Visual display of current game phase
- **Captured Pieces Display**: See pieces captured by each player
- **Fullscreen Mode**: Immersive gaming experience
- **Sound Toggle**: Control audio feedback

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required!

### Running the Game

#### Option 1: Direct Open
Simply double-click `index.html` to open in your default browser.

#### Option 2: Local Server (Recommended)
For the best experience, run a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📂 Project Structure

```
nine_stones/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with Indian theme
├── game.js            # Core game logic and controller
├── ai.js              # AI opponent with minimax algorithm
├── sounds.js          # Web Audio API sound manager
├── particles.js       # Canvas-based particle effects system
├── README.md          # This file
└── GAME_GUIDE.md      # Detailed game rules and strategies
```

## 🎯 How to Play

### Quick Start
1. **Choose Game Mode**: Select "2-Player" or "VS AI"
2. **Placing Phase**: Take turns placing your 9 pieces on empty spots
3. **Form Mills**: Align 3 pieces in a row to capture opponent pieces
4. **Moving Phase**: After all pieces are placed, move pieces to adjacent spots
5. **Flying Phase**: When reduced to 3 pieces, fly to any empty spot
6. **Win**: Reduce opponent to 2 pieces or block all their moves

For detailed rules and strategies, see [GAME_GUIDE.md](GAME_GUIDE.md).

## 🛠️ Technology Stack

### Libraries & APIs
- **GSAP 3.12.2**: High-performance animations
- **Howler.js 2.2.4**: Audio library (loaded for future use)
- **Canvas Confetti 1.6.0**: Celebration effects
- **Web Audio API**: Real-time sound synthesis
- **Canvas 2D API**: Custom particle effects
- **SVG**: Game board rendering

### Architecture
- **Vanilla JavaScript**: No framework dependencies
- **Object-Oriented Design**: Clean, maintainable code structure
- **Event-Driven**: Responsive UI interactions
- **State Management**: Comprehensive game state tracking

## 🤖 AI Implementation

The AI opponent uses:
- **Minimax Algorithm**: Optimal move selection
- **Alpha-Beta Pruning**: Efficient search space reduction
- **Position Evaluation**: Strategic board assessment
- **Mill Detection**: Bonus scoring for mill formations
- **Mobility Analysis**: Piece movement flexibility scoring

### Difficulty Levels
- **Easy (Depth 1)**: Looks 1 move ahead (~instant)
- **Medium (Depth 3)**: Looks 3 moves ahead (~0.5-2s)
- **Hard (Depth 5)**: Looks 5 moves ahead (~2-8s)

## 🎨 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --saffron-main: #FF9933;
    --green-main: #228B22;
    --background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}
```

### Adjusting Sounds
Modify frequencies and waveforms in `sounds.js`:
```javascript
soundManager.sounds.place.frequency = 440; // A4 note
soundManager.sounds.place.waveform = 'sine'; // or 'square', 'triangle', 'sawtooth'
```

### Tuning AI Difficulty
Adjust search depth in `ai.js`:
```javascript
this.difficulties = {
    easy: { depth: 1 },
    medium: { depth: 4 },  // Increase for harder
    hard: { depth: 6 }     // Increase for much harder
};
```

## 📱 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

**Note**: Requires ES6+ support (modern browsers from 2020+)

## 🐛 Known Issues

- Inline styles in HTML (minor linting warnings)
- AI thinking time may vary based on device performance
- Mobile touch support could be improved (currently optimized for desktop/tablet)

## 🔮 Future Enhancements

- [ ] Online multiplayer support
- [ ] Save/load game state
- [ ] Game replay functionality
- [ ] More particle effect options
- [ ] Custom piece themes
- [ ] Mobile-optimized version
- [ ] Tournament mode
- [ ] Statistics tracking
- [ ] Achievements system

## 📜 License

This project is open source and available for educational and personal use.

## 🙏 Acknowledgments

- Inspired by the ancient game of Nine Men's Morris
- Traditional Indian cultural elements in design
- Modern web technologies for enhanced experience

## 📞 Support

For questions or suggestions:
1. Check [GAME_GUIDE.md](GAME_GUIDE.md) for gameplay help
2. Review the code comments for technical details
3. Test in different browsers if experiencing issues

---

**Enjoy the game! May the best strategist win! 🏆**
