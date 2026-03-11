export class Menu {
  constructor() {
    this.startMenu = document.getElementById('start-menu');
    this.pauseMenu = document.getElementById('pause-menu');
    this.gameoverMenu = document.getElementById('gameover-menu');
    this.goScore = document.getElementById('go-score');
    this.goHighscore = document.getElementById('go-highscore');
    this.goWave = document.getElementById('go-wave');

    this.onStart = null;
    this.onResume = null;
    this.onRestart = null;

    document.getElementById('start-button').addEventListener('click', () => {
      if (this.onStart) this.onStart();
    });
    document.getElementById('resume-button').addEventListener('click', () => {
      if (this.onResume) this.onResume();
    });
    document.getElementById('restart-button').addEventListener('click', () => {
      if (this.onRestart) this.onRestart();
    });
  }

  showStart() {
    this.startMenu.classList.remove('hidden');
    this.pauseMenu.classList.add('hidden');
    this.gameoverMenu.classList.add('hidden');
  }

  showPause() {
    this.startMenu.classList.add('hidden');
    this.pauseMenu.classList.remove('hidden');
    this.gameoverMenu.classList.add('hidden');
  }

  showGameOver(score, highScore, wave) {
    this.startMenu.classList.add('hidden');
    this.pauseMenu.classList.add('hidden');
    this.gameoverMenu.classList.remove('hidden');
    this.goScore.textContent = score.toLocaleString();
    this.goHighscore.textContent = `High Score: ${highScore.toLocaleString()}`;
    this.goWave.textContent = `Reached Wave ${wave}`;
  }

  hideAll() {
    this.startMenu.classList.add('hidden');
    this.pauseMenu.classList.add('hidden');
    this.gameoverMenu.classList.add('hidden');
  }
}
