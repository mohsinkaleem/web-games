export const GameStates = {
  MENU: 'MENU',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAMEOVER: 'GAMEOVER',
};

export class GameState {
  constructor() {
    this.current = GameStates.MENU;
    this.listeners = [];
  }

  set(newState) {
    const old = this.current;
    this.current = newState;
    for (const listener of this.listeners) {
      listener(newState, old);
    }
  }

  is(state) {
    return this.current === state;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }
}
