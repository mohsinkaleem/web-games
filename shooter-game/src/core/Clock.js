export class Clock {
  constructor() {
    this.lastTime = performance.now();
    this.deltaTime = 0;
    this.elapsedTime = 0;
    this.frameCount = 0;
  }

  tick() {
    const now = performance.now();
    this.deltaTime = Math.min((now - this.lastTime) / 1000, 0.1); // cap at 100ms
    this.lastTime = now;
    this.elapsedTime += this.deltaTime;
    this.frameCount++;
    return this.deltaTime;
  }
}
