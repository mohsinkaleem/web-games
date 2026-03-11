#!/usr/bin/env node
/**
 * Arena Shooter — Automated Game Test CLI
 *
 * Tests navigation, camera movement, weapon switching, game states, physics,
 * enemy spawning, and collision detection.
 *
 * Usage:
 *   node test/game-test.mjs [options]
 *
 * Options:
 *   --port <number>  Dev server port (default: 5173)
 *   --headless       Run headless (no visible browser)
 *   --verbose        Show detailed test output
 *   --filter <name>  Run only tests matching name
 *   --timeout <ms>   Per-test timeout (default: 10000)
 *
 * Prerequisites:
 *   npm install -D playwright
 *   npx playwright install chromium
 */
import { chromium } from 'playwright';

// ── CLI args ──────────────────────────────────────────────
const args = process.argv.slice(2);
const getArg = (name, def) => {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : def;
};
const port = getArg('--port', '5173');
const headless = args.includes('--headless');
const verbose = args.includes('--verbose');
const filter = getArg('--filter', '');
const timeout = parseInt(getArg('--timeout', '10000'), 10);
const url = `http://localhost:${port}/`;

// ── Logging ───────────────────────────────────────────────
const log = (msg) => console.log(msg);
const vlog = (msg) => { if (verbose) console.log(`    ${msg}`); };

log(`\n  Arena Shooter - Automated Test Suite`);
log(`  URL: ${url}  |  Headless: ${headless}  |  Verbose: ${verbose}\n`);

// ── Test runner ───────────────────────────────────────────
class TestRunner {
  constructor() {
    this.results = [];
    this.suites = [];
  }

  suite(name, tests) {
    this.suites.push({ name, tests });
  }

  async run(page) {
    for (const suite of this.suites) {
      if (filter && !suite.name.toLowerCase().includes(filter.toLowerCase())) continue;
      log(`  [${suite.name}]`);
      for (const test of suite.tests) {
        if (filter && !test.name.toLowerCase().includes(filter.toLowerCase()) &&
            !suite.name.toLowerCase().includes(filter.toLowerCase())) continue;
        const result = { name: `${suite.name} > ${test.name}`, pass: false, detail: '' };
        try {
          const detail = await Promise.race([
            test.fn(page),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
          ]);
          result.pass = true;
          result.detail = detail || '';
        } catch (err) {
          result.detail = err.message;
        }
        this.results.push(result);
        const icon = result.pass ? 'PASS' : 'FAIL';
        const extra = result.detail ? ` (${result.detail})` : '';
        log(`    ${icon}: ${test.name}${extra}`);
      }
      log('');
    }
    return this.results;
  }

  summary() {
    const passed = this.results.filter(r => r.pass).length;
    const failed = this.results.filter(r => !r.pass).length;
    log(`  ────────────────────────────────`);
    log(`  ${passed} passed, ${failed} failed, ${this.results.length} total\n`);
    return failed;
  }
}

// ── Helper: dispatch key events in page ───────────────────
async function pressKey(page, code, duration = 100) {
  await page.evaluate((c) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: c, bubbles: true }));
  }, code);
  await page.waitForTimeout(duration);
  await page.evaluate((c) => {
    document.dispatchEvent(new KeyboardEvent('keyup', { code: c, bubbles: true }));
  }, code);
}

async function holdKeys(page, codes, duration = 300) {
  for (const c of codes) {
    await page.evaluate((code) => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true }));
    }, c);
  }
  await page.waitForTimeout(duration);
  for (const c of codes) {
    await page.evaluate((code) => {
      document.dispatchEvent(new KeyboardEvent('keyup', { code, bubbles: true }));
    }, c);
  }
}

async function getPlayerPos(page) {
  return page.evaluate(() => {
    const g = window._game;
    return {
      x: g.playerController.body.position.x,
      y: g.playerController.body.position.y,
      z: g.playerController.body.position.z,
    };
  });
}

async function tickGame(page, frames = 5) {
  await page.evaluate((n) => {
    const g = window._game;
    for (let i = 0; i < n; i++) {
      g.input.update();
      g.update(1 / 60);
    }
  }, frames);
}

// ── Main ──────────────────────────────────────────────────
let browser, page;
try {
  browser = await chromium.launch({
    headless,
    args: ['--use-gl=angle', '--use-angle=swiftshader'],
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  page = await context.newPage();

  // Collect errors
  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') pageErrors.push(msg.text());
    if (verbose && msg.type() === 'log') vlog(`console: ${msg.text()}`);
  });

  await page.goto(url, { waitUntil: 'networkidle' });
  try {
    await page.waitForFunction(() => window._game, { timeout: 8000 });
  } catch {
    if (pageErrors.length > 0) log(`  Page errors: ${pageErrors.join('\n  ')}`);
    log('  FAIL: Game failed to initialize (WebGL may not be available in headless mode)');
    log('  Try: npm run test:visible');
    process.exit(1);
  }
  log('  Game loaded\n');

  // Start the game
  await page.click('#start-button', { force: true });
  await page.waitForTimeout(500);

  // Force pointer lock state for automated testing
  await page.evaluate(() => {
    window._game.playerController.isLocked = true;
    window._game.playerController._wantsLock = true;
  });
  await page.waitForTimeout(500);

  const runner = new TestRunner();

  // ══════════════════════════════════════════════════════
  // SUITE: Initialization
  // ══════════════════════════════════════════════════════
  runner.suite('Initialization', [
    {
      name: 'Game object exists on window',
      fn: async (p) => {
        const exists = await p.evaluate(() => !!window._game);
        if (!exists) throw new Error('window._game not found');
        return 'window._game is defined';
      }
    },
    {
      name: 'Game state is PLAYING after start',
      fn: async (p) => {
        const state = await p.evaluate(() => window._game.gameState.current);
        if (state !== 'PLAYING') throw new Error(`state = ${state}`);
        return state;
      }
    },
    {
      name: 'Camera euler order is YXZ',
      fn: async (p) => {
        const order = await p.evaluate(() => window._game.camera.three.rotation.order);
        if (order !== 'YXZ') throw new Error(`order = ${order}`);
        return order;
      }
    },
    {
      name: 'Player is alive',
      fn: async (p) => {
        const alive = await p.evaluate(() => !window._game.player.isDead);
        if (!alive) throw new Error('player is dead');
      }
    },
    {
      name: 'Player starts at origin area',
      fn: async (p) => {
        const pos = await getPlayerPos(p);
        const dist = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
        if (dist > 5) throw new Error(`distance from origin = ${dist.toFixed(2)}`);
        return `pos=(${pos.x.toFixed(1)}, ${pos.y.toFixed(1)}, ${pos.z.toFixed(1)})`;
      }
    },
    {
      name: 'Camera is not stuck at ground level',
      fn: async (p) => {
        const camY = await p.evaluate(() => window._game.camera.three.position.y);
        // Before the fix, camera.y was ~0.5 (ground level). After fix it should be > 1.0.
        if (camY < 1.0) throw new Error(`camera.y = ${camY.toFixed(2)} (stuck at ground?)`);
        return `camera.y = ${camY.toFixed(2)}`;
      }
    },
    {
      name: 'Scene has sufficient lighting',
      fn: async (p) => {
        const count = await p.evaluate(() => {
          let n = 0;
          window._game.scene.traverse(o => { if (o.isLight) n++; });
          return n;
        });
        if (count < 5) throw new Error(`only ${count} lights`);
        return `${count} lights`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Navigation / Movement
  // ══════════════════════════════════════════════════════
  runner.suite('Navigation', [
    {
      name: 'WASD keys register in InputManager',
      fn: async (p) => {
        const ok = await p.evaluate(() => {
          const g = window._game;
          ['KeyW', 'KeyS', 'KeyA', 'KeyD'].forEach(k =>
            document.dispatchEvent(new KeyboardEvent('keydown', { code: k, bubbles: true }))
          );
          const all = g.input.isKeyDown('KeyW') && g.input.isKeyDown('KeyS') &&
                      g.input.isKeyDown('KeyA') && g.input.isKeyDown('KeyD');
          ['KeyW', 'KeyS', 'KeyA', 'KeyD'].forEach(k =>
            document.dispatchEvent(new KeyboardEvent('keyup', { code: k, bubbles: true }))
          );
          return all;
        });
        if (!ok) throw new Error('not all WASD keys registered');
      }
    },
    {
      name: 'Forward movement (W) changes position',
      fn: async (p) => {
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.yaw = 0;
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt(
          (after.x - before.x) ** 2 + (after.z - before.z) ** 2
        );
        if (dist < 0.5) throw new Error(`moved only ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} units`;
      }
    },
    {
      name: 'Backward movement (S) changes position',
      fn: async (p) => {
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyS', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyS', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt(
          (after.x - before.x) ** 2 + (after.z - before.z) ** 2
        );
        if (dist < 0.5) throw new Error(`moved only ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} units`;
      }
    },
    {
      name: 'Strafe left (A) changes position',
      fn: async (p) => {
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyA', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt(
          (after.x - before.x) ** 2 + (after.z - before.z) ** 2
        );
        if (dist < 0.5) throw new Error(`moved only ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} units`;
      }
    },
    {
      name: 'Strafe right (D) changes position',
      fn: async (p) => {
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyD', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyD', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt(
          (after.x - before.x) ** 2 + (after.z - before.z) ** 2
        );
        if (dist < 0.5) throw new Error(`moved only ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} units`;
      }
    },
    {
      name: 'Diagonal movement (W+D) works',
      fn: async (p) => {
        // Reset to center to avoid walls
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 2, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.yaw = 0;
        });
        await tickGame(p, 10);
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyD', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyD', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt(
          (after.x - before.x) ** 2 + (after.z - before.z) ** 2
        );
        if (dist < 0.5) throw new Error(`moved only ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} units`;
      }
    },
    {
      name: 'Sprint (Shift) increases speed',
      fn: async (p) => {
        // Reset position
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 2, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.yaw = 0;
        });
        await tickGame(p, 5);

        // Normal speed
        const normalBefore = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        await tickGame(p, 20);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        const normalAfter = await getPlayerPos(p);
        const normalDist = Math.sqrt((normalAfter.x - normalBefore.x) ** 2 + (normalAfter.z - normalBefore.z) ** 2);

        // Reset
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 2, 0);
          g.playerController.body.velocity.set(0, 0, 0);
        });
        await tickGame(p, 5);

        // Sprint speed
        const sprintBefore = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ShiftLeft', bubbles: true }));
        });
        await tickGame(p, 20);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ShiftLeft', bubbles: true }));
        });
        const sprintAfter = await getPlayerPos(p);
        const sprintDist = Math.sqrt((sprintAfter.x - sprintBefore.x) ** 2 + (sprintAfter.z - sprintBefore.z) ** 2);

        if (sprintDist <= normalDist * 1.1) throw new Error(`sprint ${sprintDist.toFixed(2)} not faster than normal ${normalDist.toFixed(2)}`);
        return `normal=${normalDist.toFixed(2)} sprint=${sprintDist.toFixed(2)}`;
      }
    },
    {
      name: 'Player stops when no input',
      fn: async (p) => {
        // Move first
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        await tickGame(p, 10);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        // Let decelerate
        await tickGame(p, 30);
        const vel = await p.evaluate(() => {
          const v = window._game.playerController.body.velocity;
          return Math.sqrt(v.x * v.x + v.z * v.z);
        });
        if (vel > 1) throw new Error(`velocity = ${vel.toFixed(2)}`);
        return `residual velocity = ${vel.toFixed(3)}`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Camera / Mouse Look
  // ══════════════════════════════════════════════════════
  runner.suite('Camera', [
    {
      name: 'Horizontal mouse rotates yaw',
      fn: async (p) => {
        const initial = await p.evaluate(() => window._game.playerController.yaw);
        await p.evaluate(() => {
          const g = window._game;
          g.input._pendingDX = 500;
          g.input._pendingDY = 0;
          g.input.update();
          g.playerController.update(1 / 60);
        });
        const after = await p.evaluate(() => window._game.playerController.yaw);
        const delta = Math.abs(after - initial);
        if (delta < 0.01) throw new Error(`yaw changed by only ${delta.toFixed(5)}`);
        return `yaw delta = ${delta.toFixed(4)}`;
      }
    },
    {
      name: 'Vertical mouse rotates pitch',
      fn: async (p) => {
        const initial = await p.evaluate(() => window._game.playerController.pitch);
        await p.evaluate(() => {
          const g = window._game;
          g.input._pendingDX = 0;
          g.input._pendingDY = 500;
          g.input.update();
          g.playerController.update(1 / 60);
        });
        const after = await p.evaluate(() => window._game.playerController.pitch);
        const delta = Math.abs(after - initial);
        if (delta < 0.01) throw new Error(`pitch changed by only ${delta.toFixed(5)}`);
        return `pitch delta = ${delta.toFixed(4)}`;
      }
    },
    {
      name: 'Pitch is clamped to prevent flip',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.input._pendingDX = 0;
          g.input._pendingDY = 50000; // extreme upward    
          g.input.update();
          g.playerController.update(1 / 60);
        });
        const pitch = await p.evaluate(() => window._game.playerController.pitch);
        if (Math.abs(pitch) >= Math.PI / 2) throw new Error(`pitch = ${pitch.toFixed(4)}`);
        return `pitch = ${pitch.toFixed(4)} (clamped)`;
      }
    },
    {
      name: 'No camera Z-axis flip on horizontal mouse',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.pitch = 0;
          g.playerController.yaw = 0;
          g.input._pendingDX = 800;
          g.input._pendingDY = 0;
          g.input.update();
          g.playerController.update(1 / 60);
        });
        const rotZ = await p.evaluate(() => Math.abs(window._game.camera.three.rotation.z));
        if (rotZ > 0.5) throw new Error(`rotation.z = ${rotZ.toFixed(4)}`);
        return `rotation.z = ${rotZ.toFixed(4)}`;
      }
    },
    {
      name: 'Camera follows player position',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(10, 1, 5);
          g.playerController.update(1 / 60);
        });
        const result = await p.evaluate(() => {
          const g = window._game;
          const cam = g.camera.three.position;
          const body = g.playerController.body.position;
          return {
            camX: cam.x, camZ: cam.z,
            bodyX: body.x, bodyZ: body.z,
          };
        });
        if (Math.abs(result.camX - result.bodyX) > 1) throw new Error('camera X not synced');
        if (Math.abs(result.camZ - result.bodyZ) > 1) throw new Error('camera Z not synced');
        return `cam=(${result.camX.toFixed(1)}, ${result.camZ.toFixed(1)}) body=(${result.bodyX.toFixed(1)}, ${result.bodyZ.toFixed(1)})`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Physics
  // ══════════════════════════════════════════════════════
  runner.suite('Physics', [
    {
      name: 'Gravity pulls player down when airborne',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 10, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.isGrounded = false;
        });
        const before = await getPlayerPos(p);
        await tickGame(p, 30);
        const after = await getPlayerPos(p);
        if (after.y >= before.y) throw new Error('player did not fall');
        return `fell from ${before.y.toFixed(2)} to ${after.y.toFixed(2)}`;
      }
    },
    {
      name: 'Jump increases Y velocity',
      fn: async (p) => {
        // Put on ground first
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 0.5, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.isGrounded = true;
        });
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true }));
        });
        await tickGame(p, 2);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space', bubbles: true }));
        });
        const velY = await p.evaluate(() => window._game.playerController.body.velocity.y);
        if (velY < 2) throw new Error(`velocity.y = ${velY.toFixed(2)}`);
        return `jump velocity = ${velY.toFixed(2)}`;
      }
    },
    {
      name: 'Player stops at ground level',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 5, 0);
          g.playerController.body.velocity.set(0, 0, 0);
        });
        await tickGame(p, 120); // Let settle
        const pos = await getPlayerPos(p);
        if (pos.y < 0.1 || pos.y > 2) throw new Error(`y = ${pos.y.toFixed(3)}`);
        return `settled at y = ${pos.y.toFixed(3)}`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Weapons
  // ══════════════════════════════════════════════════════
  runner.suite('Weapons', [
    {
      name: 'Default weapon is Pistol',
      fn: async (p) => {
        const name = await p.evaluate(() => window._game.weaponManager.current.name);
        if (name !== 'Pistol') throw new Error(`weapon = ${name}`);
        return name;
      }
    },
    {
      name: 'Weapon switch via number keys',
      fn: async (p) => {
        const names = await p.evaluate(() => {
          const g = window._game;
          const results = [];
          for (let i = 0; i < 4; i++) {
            g.weaponManager.switchTo(i);
            results.push(g.weaponManager.current.name);
          }
          g.weaponManager.switchTo(0); // Reset to pistol
          return results;
        });
        if (names.length !== 4) throw new Error('not 4 weapons');
        return names.join(', ');
      }
    },
    {
      name: 'Pistol has infinite ammo',
      fn: async (p) => {
        const ammo = await p.evaluate(() => {
          const g = window._game;
          g.weaponManager.switchTo(0);
          return g.weaponManager.current.currentAmmo;
        });
        if (ammo !== Infinity) throw new Error(`ammo = ${ammo}`);
      }
    },
    {
      name: 'Weapon firing reduces ammo (Shotgun)',
      fn: async (p) => {
        const result = await p.evaluate(() => {
          const g = window._game;
          g.weaponManager.switchTo(1); // Shotgun
          const before = g.weaponManager.current.currentAmmo;
          g.weaponManager.current.fire();
          const after = g.weaponManager.current.currentAmmo;
          g.weaponManager.switchTo(0); // Reset
          return { before, after };
        });
        if (result.after >= result.before) throw new Error('ammo did not decrease');
        return `${result.before} -> ${result.after}`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Game State Transitions
  // ══════════════════════════════════════════════════════
  runner.suite('Game States', [
    {
      name: 'Pause sets state to PAUSED',
      fn: async (p) => {
        await p.evaluate(() => window._game.pauseGame());
        const state = await p.evaluate(() => window._game.gameState.current);
        if (state !== 'PAUSED') throw new Error(`state = ${state}`);
        return state;
      }
    },
    {
      name: 'Resume sets state to PLAYING',
      fn: async (p) => {
        await p.evaluate(() => {
          window._game.resumeGame();
          window._game.playerController.isLocked = true;
        });
        const state = await p.evaluate(() => window._game.gameState.current);
        if (state !== 'PLAYING') throw new Error(`state = ${state}`);
        return state;
      }
    },
    {
      name: 'Pause menu visibility toggles',
      fn: async (p) => {
        await p.evaluate(() => window._game.pauseGame());
        const visible = await p.evaluate(() =>
          !document.getElementById('pause-menu').classList.contains('hidden')
        );
        await p.evaluate(() => {
          window._game.resumeGame();
          window._game.playerController.isLocked = true;
        });
        const hidden = await p.evaluate(() =>
          document.getElementById('pause-menu').classList.contains('hidden')
        );
        if (!visible) throw new Error('pause menu not shown');
        if (!hidden) throw new Error('pause menu not hidden');
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Enemies
  // ══════════════════════════════════════════════════════
  runner.suite('Enemies', [
    {
      name: 'Enemies spawn in wave 1',
      fn: async (p) => {
        await tickGame(p, 120); // Give wave time to start
        const count = await p.evaluate(() =>
          window._game.enemyManager.getEnemies().filter(e => e.active).length
        );
        if (count === 0) throw new Error('no active enemies');
        return `${count} active enemies`;
      }
    },
    {
      name: 'Enemies have health bars',
      fn: async (p) => {
        const hasHealthBar = await p.evaluate(() => {
          const enemies = window._game.enemyManager.getEnemies();
          if (enemies.length === 0) return false;
          return enemies[0].healthBarGroup !== undefined;
        });
        if (!hasHealthBar) throw new Error('no health bar found');
      }
    },
    {
      name: 'Enemy takes damage',
      fn: async (p) => {
        const result = await p.evaluate(() => {
          const enemies = window._game.enemyManager.getEnemies();
          if (enemies.length === 0) return null;
          const e = enemies[0];
          const before = e.health;
          e.takeDamage(10);
          const after = e.health;
          return { before, after };
        });
        if (!result) throw new Error('no enemies to test');
        if (result.after >= result.before) throw new Error('health did not decrease');
        return `${result.before} -> ${result.after}`;
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Input Edge Cases
  // ══════════════════════════════════════════════════════
  runner.suite('Input Edge Cases', [
    {
      name: 'Blur clears keys when no pointer lock',
      fn: async (p) => {
        const cleared = await p.evaluate(() => {
          const g = window._game;
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
          // Simulate no pointer lock
          const original = document.pointerLockElement;
          Object.defineProperty(document, 'pointerLockElement', { value: null, configurable: true });
          window.dispatchEvent(new Event('blur'));
          Object.defineProperty(document, 'pointerLockElement', { value: original, configurable: true });
          return !g.input.isKeyDown('KeyW');
        });
        if (!cleared) throw new Error('keys not cleared on blur');
      }
    },
    {
      name: 'Movement works after blur recovery',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          // Trigger blur to clear keys
          Object.defineProperty(document, 'pointerLockElement', { value: null, configurable: true });
          window.dispatchEvent(new Event('blur'));
          delete document.pointerLockElement;
          // Re-press key
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        const isDown = await p.evaluate(() => window._game.input.isKeyDown('KeyW'));
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        if (!isDown) throw new Error('key not re-registered after blur');
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: Navigation After Idle (WASD Stuck Bug Regression)
  // ══════════════════════════════════════════════════════
  runner.suite('Navigation After Idle', [
    {
      name: 'Player body has allowSleep disabled',
      fn: async (p) => {
        const allowSleep = await p.evaluate(() =>
          window._game.playerController.body.allowSleep
        );
        if (allowSleep) throw new Error('allowSleep is true — will cause WASD stuck bug');
        return 'allowSleep = false';
      }
    },
    {
      name: 'Player body stays awake after idle period',
      fn: async (p) => {
        // Simulate idle: set velocity to zero and tick many frames
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 1, 0);
          g.playerController.body.velocity.set(0, 0, 0);
        });
        // Tick 300 frames (5 seconds) with no input
        await tickGame(p, 300);
        const sleepState = await p.evaluate(() =>
          window._game.playerController.body.sleepState
        );
        // CANNON.Body.AWAKE = 0
        if (sleepState !== 0) throw new Error(`body sleeping after idle! sleepState=${sleepState}`);
        return `sleepState = ${sleepState} (AWAKE)`;
      }
    },
    {
      name: 'WASD works after long idle period',
      fn: async (p) => {
        // Reset to center
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 1, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.yaw = 0;
        });
        // Idle for 300 frames
        await tickGame(p, 300);
        // Now try to move
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt((after.x - before.x) ** 2 + (after.z - before.z) ** 2);
        if (dist < 0.3) throw new Error(`WASD STUCK! Only moved ${dist.toFixed(3)} after idle`);
        return `moved ${dist.toFixed(2)} units after idle`;
      }
    },
    {
      name: 'Jump works after long idle period',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 0.5, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.isGrounded = true;
        });
        // Idle for 300 frames
        await tickGame(p, 300);
        // Jump
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true }));
        });
        await tickGame(p, 5);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space', bubbles: true }));
        });
        const velY = await p.evaluate(() => window._game.playerController.body.velocity.y);
        if (velY < 1) throw new Error(`JUMP STUCK! velocity.y = ${velY.toFixed(2)} after idle`);
        return `jump velocity = ${velY.toFixed(2)} after idle`;
      }
    },
    {
      name: 'Movement works after pause/resume cycle',
      fn: async (p) => {
        await p.evaluate(() => {
          const g = window._game;
          g.playerController.body.position.set(0, 1, 0);
          g.playerController.body.velocity.set(0, 0, 0);
          g.playerController.yaw = 0;
          g.pauseGame();
        });
        await p.waitForTimeout(500);
        await p.evaluate(() => {
          window._game.resumeGame();
          window._game.playerController.isLocked = true;
        });
        await tickGame(p, 10);
        const before = await getPlayerPos(p);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
        });
        await tickGame(p, 30);
        await p.evaluate(() => {
          document.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyW', bubbles: true }));
        });
        const after = await getPlayerPos(p);
        const dist = Math.sqrt((after.x - before.x) ** 2 + (after.z - before.z) ** 2);
        if (dist < 0.3) throw new Error(`STUCK after pause! moved ${dist.toFixed(3)}`);
        return `moved ${dist.toFixed(2)} after pause/resume`;
      }
    },
    {
      name: 'All WASD directions work after simulate-and-recover pointer lock loss',
      fn: async (p) => {
        const results = await p.evaluate(() => {
          const g = window._game;
          const dirs = ['KeyW', 'KeyA', 'KeyS', 'KeyD'];
          const moved = {};

          // Simulate pointer lock loss (clears input)
          g.input._clearAll();

          for (const dir of dirs) {
            g.playerController.body.position.set(0, 1, 0);
            g.playerController.body.velocity.set(0, 0, 0);
            g.playerController.yaw = 0;

            const bx = g.playerController.body.position.x;
            const bz = g.playerController.body.position.z;

            document.dispatchEvent(new KeyboardEvent('keydown', { code: dir, bubbles: true }));
            for (let i = 0; i < 30; i++) {
              g.input.update();
              g.update(1 / 60);
            }
            document.dispatchEvent(new KeyboardEvent('keyup', { code: dir, bubbles: true }));

            const ax = g.playerController.body.position.x;
            const az = g.playerController.body.position.z;
            moved[dir] = Math.sqrt((ax - bx) ** 2 + (az - bz) ** 2);
          }
          return moved;
        });

        for (const [key, dist] of Object.entries(results)) {
          if (dist < 0.3) throw new Error(`${key} STUCK after pointer lock recovery! moved ${dist.toFixed(3)}`);
        }
        return Object.entries(results).map(([k, d]) => `${k}=${d.toFixed(2)}`).join(' ');
      }
    },
  ]);

  // ══════════════════════════════════════════════════════
  // SUITE: UI/HUD
  // ══════════════════════════════════════════════════════
  runner.suite('UI', [
    {
      name: 'HUD is visible during gameplay',
      fn: async (p) => {
        const display = await p.evaluate(() =>
          document.getElementById('hud').style.display
        );
        if (display === 'none') throw new Error('HUD is hidden');
        return `display = ${display}`;
      }
    },
    {
      name: 'Health bar updates',
      fn: async (p) => {
        const width = await p.evaluate(() => {
          window._game.hud.updateHealth(75, 150);
          return document.getElementById('health-bar').style.width;
        });
        if (width !== '50%') throw new Error(`width = ${width}`);
        return width;
      }
    },
    {
      name: 'Score text updates',
      fn: async (p) => {
        const text = await p.evaluate(() => {
          window._game.hud.updateScore(12345);
          return document.getElementById('score-text').textContent;
        });
        if (!text.includes('12,345') && !text.includes('12345')) throw new Error(`text = ${text}`);
        return text;
      }
    },
    {
      name: 'FPS counter element exists',
      fn: async (p) => {
        const exists = await p.evaluate(() =>
          document.getElementById('fps-counter') !== null
        );
        if (!exists) throw new Error('fps-counter not found');
      }
    },
    {
      name: 'Dash indicator element exists',
      fn: async (p) => {
        const exists = await p.evaluate(() =>
          document.getElementById('dash-bar') !== null
        );
        if (!exists) throw new Error('dash-bar not found');
      }
    },
  ]);

  // Run all tests
  await runner.run(page);
  const failed = runner.summary();

  // Screenshot
  await page.screenshot({ path: 'test/screenshot.png' });
  log('  Screenshot saved to test/screenshot.png\n');

  process.exit(failed > 0 ? 1 : 0);
} catch (err) {
  log(`  ERROR: ${err.message}`);
  if (verbose) console.error(err.stack);
  process.exit(1);
} finally {
  if (browser) await browser.close();
}
