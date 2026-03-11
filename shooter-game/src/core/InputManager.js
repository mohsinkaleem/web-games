export class InputManager {
  constructor() {
    this.keys = {};
    this.mouseButtons = {};
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.scrollDelta = 0;
    this._pendingDX = 0;
    this._pendingDY = 0;

    this._onKeyDown = (e) => {
      this.keys[e.code] = true;
    };
    this._onKeyUp = (e) => {
      this.keys[e.code] = false;
    };
    this._onMouseDown = (e) => {
      this.mouseButtons[e.button] = true;
    };
    this._onMouseUp = (e) => {
      this.mouseButtons[e.button] = false;
    };
    this._onMouseMove = (e) => {
      this._pendingDX += e.movementX || 0;
      this._pendingDY += e.movementY || 0;
    };
    this._onWheel = (e) => {
      this.scrollDelta += Math.sign(e.deltaY);
    };
    this._onContextMenu = (e) => e.preventDefault();
    this._previousKeys = {};

    // Clear ALL input state on pointer lock change.
    // When pointer lock is lost, any keys physically held won't fire keyup events,
    // leaving ghost-pressed keys that corrupt movement state.
    this._onPointerLockChange = () => {
      console.log('[InputManager] Pointer lock changed. pointerLockElement:', !!document.pointerLockElement);
      this._clearAll();
    };

    // Clear input when window loses focus (alt-tab, etc.)
    this._onBlur = () => {
      console.log('[InputManager] Window blur — clearing input state');
      this._clearAll();
    };

    // Clear input when tab becomes hidden (cmd-tab on macOS, etc.)
    this._onVisibilityChange = () => {
      if (document.hidden) {
        console.log('[InputManager] Tab hidden — clearing input state');
        this._clearAll();
      }
    };

    document.addEventListener('keydown', this._onKeyDown);
    document.addEventListener('keyup', this._onKeyUp);
    document.addEventListener('mousedown', this._onMouseDown);
    document.addEventListener('mouseup', this._onMouseUp);
    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('wheel', this._onWheel);
    document.addEventListener('contextmenu', this._onContextMenu);
    document.addEventListener('pointerlockchange', this._onPointerLockChange);
    document.addEventListener('visibilitychange', this._onVisibilityChange);
    window.addEventListener('blur', this._onBlur);
  }

  _clearAll() {
    this.keys = {};
    this.mouseButtons = {};
    this._pendingDX = 0;
    this._pendingDY = 0;
    this._previousKeys = {};
  }

  update() {
    this.mouseDX = this._pendingDX;
    this.mouseDY = this._pendingDY;
    this._pendingDX = 0;
    this._pendingDY = 0;
  }

  wasKeyPressed(code) {
    return !!this.keys[code] && !this._previousKeys[code];
  }

  lateUpdate() {
    this._previousKeys = { ...this.keys };
  }

  resetFrame() {
    this.scrollDelta = 0;
  }

  isKeyDown(code) {
    return !!this.keys[code];
  }

  isMouseDown(button = 0) {
    return !!this.mouseButtons[button];
  }

  dispose() {
    document.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('keyup', this._onKeyUp);
    document.removeEventListener('mousedown', this._onMouseDown);
    document.removeEventListener('mouseup', this._onMouseUp);
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('wheel', this._onWheel);
    document.removeEventListener('contextmenu', this._onContextMenu);
    document.removeEventListener('pointerlockchange', this._onPointerLockChange);
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
    window.removeEventListener('blur', this._onBlur);
  }

  // Debug helper: log current input state to console
  debugState() {
    const activeKeys = Object.entries(this.keys).filter(([, v]) => v).map(([k]) => k);
    const activeButtons = Object.entries(this.mouseButtons).filter(([, v]) => v).map(([k]) => k);
    if (activeKeys.length || activeButtons.length) {
      console.log('[InputManager] Keys:', activeKeys.join(', '), '| Mouse:', activeButtons.join(', '));
    }
  }
}
