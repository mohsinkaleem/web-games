import { Game } from './core/Game.js';

const canvas = document.getElementById('game-canvas');
const game = new Game(canvas);

// Expose for testing
window._game = game;

function gameLoop() {
  const dt = game.clock.tick();
  game.update(dt);
  game.render();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
