/**
 * AI Opponent for Navakankari (Nine Men's Morris)
 * Advanced engine with iterative deepening, quiescence search,
 * killer move heuristic, enhanced evaluation, and opening book.
 *
 * Difficulty Levels:
 *   easy        - depth 1, 50% random moves
 *   medium      - depth 3
 *   hard        - depth 5
 *   expert      - depth 6
 *   master      - depth 7 + iterative deepening + quiescence
 *   grandmaster - depth 8 + full engine features
 */

class NavakankariAI {
    constructor(game, difficulty = 'medium') {
        this.game = game;
        this.difficulty = difficulty;
        this.player = 2;
        this.opponent = 1;

        this.depths = {
            easy: 1,
            medium: 3,
            hard: 5,
            expert: 6,
            master: 7,
            grandmaster: 8
        };

        this.simState = null;

        // Strategic position values — cross-positions on mid ring are most connected (4 mills)
        this.positionValues = {
            0: 3,  1: 6,  2: 3,  3: 6,  4: 3,  5: 6,  6: 3,  7: 6,
            8: 4,  9: 7, 10: 4, 11: 7, 12: 4, 13: 7, 14: 4, 15: 7,
           16: 3, 17: 5, 18: 3, 19: 5, 20: 3, 21: 5, 22: 3, 23: 5
        };

        // Pre-compute which mills each position belongs to (fast lookup)
        this.millsByPosition = {};
        for (let i = 0; i < 24; i++) {
            this.millsByPosition[i] = this.game.mills.filter(m => m.includes(i));
        }

        // Opening book preferences
        this.openingPreferred = [9, 11, 13, 15, 1, 3, 5, 7, 17, 19, 21, 23];

        // Transposition table
        this.transpositionTable = new Map();
        this.maxTableSize = 50000;

        // Killer move heuristic (indexed by ply)
        this.killerMoves = {};

        // Stats
        this.nodesSearched = 0;
        this.lastThinkingInfo = null;
    }

    // ================================================================
    //  Public API
    // ================================================================

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.transpositionTable.clear();
        this.killerMoves = {};
    }

    /** Return the best move (async — adds natural delay). */
    async getBestMove() {
        const depth = this.depths[this.difficulty] || 3;

        // Natural thinking delay — scales with difficulty
        const minDelay = this.difficulty === 'easy' ? 200 : 300;
        const maxExtra = this.difficulty === 'grandmaster' ? 900 : 600;
        await new Promise(r => setTimeout(r, minDelay + Math.random() * (maxExtra - minDelay)));

        if (this.game.mustRemove) {
            return this.getBestRemoval();
        }

        this.initSimState();
        this.nodesSearched = 0;
        this.killerMoves = {};

        // Easy mode: mostly random
        if (this.difficulty === 'easy') {
            return this._easyMove(depth);
        }

        // Opening book (early game)
        const openingMove = this.getOpeningMove();
        if (openingMove) return openingMove;

        // Iterative deepening for master / grandmaster, fixed depth otherwise
        const useID = (this.difficulty === 'master' || this.difficulty === 'grandmaster');
        let bestMove = useID ? this._iterativeDeepeningSearch(depth) : this._fixedDepthSearch(depth);

        // Flush TT if too big
        if (this.transpositionTable.size > this.maxTableSize) {
            this.transpositionTable.clear();
        }

        this.lastThinkingInfo = {
            depth,
            nodesSearched: this.nodesSearched,
            difficulty: this.difficulty
        };

        return bestMove;
    }

    /** Get a hint for the human player (plays as player 1 temporarily). */
    getHint() {
        const origPlayer = this.player;
        const origOpponent = this.opponent;
        this.player = 1;
        this.opponent = 2;

        let hint;
        if (this.game.mustRemove) {
            hint = this.getBestRemoval();
        } else {
            this.initSimState();
            hint = this._fixedDepthSearch(Math.min(3, this.depths[this.difficulty] || 3));
        }

        this.player = origPlayer;
        this.opponent = origOpponent;
        return hint;
    }

    // ================================================================
    //  Search algorithms
    // ================================================================

    /** Fixed depth alpha-beta search. */
    _fixedDepthSearch(depth) {
        const moves = this.getAllMoves(this.player);
        if (moves.length === 0) return null;
        this.sortMoves(moves, this.player, depth);

        let bestMove = moves[0];
        let bestScore = -Infinity;
        let alpha = -Infinity;

        for (const move of moves) {
            const undo = this.applyMove(move);
            const score = this.minimax(depth - 1, false, alpha, Infinity, depth - 1);
            this.undoMove(move, undo);
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
            alpha = Math.max(alpha, score);
        }
        return bestMove;
    }

    /** Iterative deepening — searches depth 1, 2, … up to maxDepth.
     *  Each iteration improves move ordering via best-move-first. */
    _iterativeDeepeningSearch(maxDepth) {
        const moves = this.getAllMoves(this.player);
        if (moves.length === 0) return null;
        if (moves.length === 1) return moves[0];

        let bestMove = moves[0];

        for (let d = 1; d <= maxDepth; d++) {
            this.sortMoves(moves, this.player, d);

            // Put previous iteration's best move first
            if (bestMove) {
                const idx = moves.findIndex(m => this._moveKey(m) === this._moveKey(bestMove));
                if (idx > 0) {
                    moves.splice(idx, 1);
                    moves.unshift(bestMove);
                }
            }

            let localBest = moves[0];
            let localBestScore = -Infinity;
            let alpha = -Infinity;

            for (const move of moves) {
                const undo = this.applyMove(move);
                const score = this.minimax(d - 1, false, alpha, Infinity, d - 1);
                this.undoMove(move, undo);
                if (score > localBestScore) {
                    localBestScore = score;
                    localBest = move;
                }
                alpha = Math.max(alpha, score);
            }
            bestMove = localBest;

            // Stop early if a winning move is found
            if (localBestScore >= 9000) break;
        }
        return bestMove;
    }

    /** Easy mode: mostly random with some smarts. */
    _easyMove(depth) {
        const moves = this.getAllMoves(this.player);
        if (moves.length === 0) return null;

        // 50% pure random move
        if (Math.random() < 0.5) {
            return moves[Math.floor(Math.random() * moves.length)];
        }

        // Otherwise pick among top-3 from shallow evaluation
        this.sortMoves(moves, this.player, depth);
        const scored = [];
        for (const move of moves.slice(0, Math.min(8, moves.length))) {
            const undo = this.applyMove(move);
            const score = this.minimax(0, false, -Infinity, Infinity, 0);
            this.undoMove(move, undo);
            scored.push({ move, score });
        }
        scored.sort((a, b) => b.score - a.score);
        const topN = scored.slice(0, 3);
        return topN[Math.floor(Math.random() * topN.length)].move;
    }

    // ================================================================
    //  Minimax with alpha-beta + transposition table
    // ================================================================

    minimax(depth, isMaximizing, alpha, beta, plyFromRoot) {
        this.nodesSearched++;

        // Transposition table probe
        const hash = this.getBoardHash();
        const cached = this.transpositionTable.get(hash);
        if (cached && cached.depth >= depth) {
            if (cached.flag === 'exact') return cached.score;
            if (cached.flag === 'lower') alpha = Math.max(alpha, cached.score);
            if (cached.flag === 'upper') beta = Math.min(beta, cached.score);
            if (alpha >= beta) return cached.score;
        }

        // Terminal check
        const winner = this.checkWinner();
        if (winner === this.player) return 10000 + depth;
        if (winner === this.opponent) return -10000 - depth;

        if (depth === 0) {
            // Quiescence search for master / grandmaster
            if (this.difficulty === 'master' || this.difficulty === 'grandmaster') {
                const qScore = this.quiescence(alpha, beta, isMaximizing, 3);
                this.transpositionTable.set(hash, { depth: 0, score: qScore, flag: 'exact' });
                return qScore;
            }
            const score = this.evaluate();
            this.transpositionTable.set(hash, { depth: 0, score, flag: 'exact' });
            return score;
        }

        const currentPlayer = isMaximizing ? this.player : this.opponent;
        const moves = this.getAllMoves(currentPlayer);

        if (moves.length === 0) {
            return isMaximizing ? -9000 : 9000;
        }

        this.sortMoves(moves, currentPlayer, plyFromRoot);
        this._applyKillerMoves(moves, plyFromRoot);

        let bestScore = isMaximizing ? -Infinity : Infinity;
        let flag = isMaximizing ? 'upper' : 'lower';

        for (const move of moves) {
            const undo = this.applyMove(move);
            const score = this.minimax(depth - 1, !isMaximizing, alpha, beta, plyFromRoot - 1);
            this.undoMove(move, undo);

            if (isMaximizing) {
                if (score > bestScore) { bestScore = score; flag = 'exact'; }
                alpha = Math.max(alpha, score);
            } else {
                if (score < bestScore) { bestScore = score; flag = 'exact'; }
                beta = Math.min(beta, score);
            }

            if (beta <= alpha) {
                this._recordKillerMove(move, plyFromRoot);
                flag = isMaximizing ? 'lower' : 'upper';
                break;
            }
        }

        this.transpositionTable.set(hash, { depth, score: bestScore, flag });
        return bestScore;
    }

    // ================================================================
    //  Quiescence search — only explore mill-forming (tactical) moves
    // ================================================================

    quiescence(alpha, beta, isMaximizing, maxQDepth) {
        const standPat = this.evaluate();
        this.nodesSearched++;

        if (maxQDepth <= 0) return standPat;

        if (isMaximizing) {
            if (standPat >= beta) return beta;
            if (standPat > alpha) alpha = standPat;
        } else {
            if (standPat <= alpha) return alpha;
            if (standPat < beta) beta = standPat;
        }

        const currentPlayer = isMaximizing ? this.player : this.opponent;
        const moves = this.getAllMoves(currentPlayer);
        const tacticalMoves = moves.filter(m => this.wouldFormMill(m, currentPlayer));
        if (tacticalMoves.length === 0) return standPat;

        let bestScore = standPat;
        for (const move of tacticalMoves) {
            const undo = this.applyMove(move);
            const score = this.quiescence(alpha, beta, !isMaximizing, maxQDepth - 1);
            this.undoMove(move, undo);

            if (isMaximizing) {
                bestScore = Math.max(bestScore, score);
                alpha = Math.max(alpha, score);
            } else {
                bestScore = Math.min(bestScore, score);
                beta = Math.min(beta, score);
            }
            if (beta <= alpha) break;
        }
        return bestScore;
    }

    // ================================================================
    //  Evaluation function (the brain)
    // ================================================================

    evaluate() {
        let score = 0;

        const myPieces   = this.simState.piecesOnBoard[this.player];
        const oppPieces  = this.simState.piecesOnBoard[this.opponent];
        const myToPlace  = this.simState.piecesToPlace[this.player];
        const oppToPlace = this.simState.piecesToPlace[this.opponent];

        // ── Placing phase ──
        if (this.simState.phase === 'placing') {
            score += (myPieces - oppPieces) * 40;

            // Potential mills (two-in-a-row with an open third slot)
            score += this.countAllPotentialMillsInSim(this.player)   * 30;
            score -= this.countAllPotentialMillsInSim(this.opponent) * 35;

            // Mill seeds (one piece in an otherwise-open mill line)
            score += this._countMillSeeds(this.player)   * 8;
            score -= this._countMillSeeds(this.opponent)  * 8;

            // Completed mills
            score += this.countMillsInSim(this.player)   * 20;
            score -= this.countMillsInSim(this.opponent)  * 20;

            // Double-mill configurations (swing pieces)
            score += this.countAllDoubleMills(this.player)   * 50;
            score -= this.countAllDoubleMills(this.opponent)  * 60;

            // Position control
            score += this._positionalScore(this.player);
            score -= this._positionalScore(this.opponent);

            // Intersection control — prefer positions with many adjacencies
            score += this._intersectionControl(this.player)   * 2;
            score -= this._intersectionControl(this.opponent)  * 2;

        // ── Moving / Flying phase ──
        } else {
            if (myPieces < 3) return -10000;
            if (oppPieces < 3) return 10000;

            // Piece advantage is critical
            score += (myPieces - oppPieces) * 200;

            // Flying advantage
            if (myPieces === 3 && oppPieces > 3) score += 120;
            if (oppPieces === 3 && myPieces > 3) score -= 80;

            // Completed mills
            score += this.countMillsInSim(this.player)   * 30;
            score -= this.countMillsInSim(this.opponent)  * 30;

            // Potential mills
            score += this.countAllPotentialMillsInSim(this.player)   * 25;
            score -= this.countAllPotentialMillsInSim(this.opponent)  * 30;

            // Double mills — extremely powerful
            score += this.countAllDoubleMills(this.player)   * 80;
            score -= this.countAllDoubleMills(this.opponent)  * 90;

            // Open mills — completed mill with adjacent empty square for swing
            score += this._countOpenMills(this.player)   * 45;
            score -= this._countOpenMills(this.opponent)  * 50;

            // Position control
            score += this._positionalScore(this.player);
            score -= this._positionalScore(this.opponent);

            // Mobility
            const myMob  = this.calculateMobility(this.player);
            const oppMob = this.calculateMobility(this.opponent);
            score += myMob  * 10;
            score -= oppMob * 10;

            // Blocked penalty
            if (myMob === 0 && myPieces > 3)  score -= 900;
            if (oppMob === 0 && oppPieces > 3) score += 1100;

            // Endgame: value captures even higher
            if (oppPieces <= 4) score += this.countAllPotentialMillsInSim(this.player) * 15;
            if (myPieces <= 4)  score -= this.countAllPotentialMillsInSim(this.opponent) * 15;
        }
        return score;
    }

    // ── Evaluation helpers ──

    _positionalScore(player) {
        let s = 0;
        for (let pos = 0; pos < 24; pos++) {
            if (this.simState.board[pos] === player) s += this.positionValues[pos];
        }
        return s;
    }

    _intersectionControl(player) {
        let total = 0;
        for (let pos = 0; pos < 24; pos++) {
            if (this.simState.board[pos] === player) total += this.game.adjacent[pos].length;
        }
        return total;
    }

    /** Count mill seeds — mill lines with exactly 1 of player's pieces and 2 empty. */
    _countMillSeeds(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            let pC = 0, eC = 0;
            for (const p of mill) {
                if (this.simState.board[p] === player) pC++;
                else if (this.simState.board[p] === null) eC++;
            }
            if (pC === 1 && eC === 2) count++;
        }
        return count;
    }

    /** Count open mills — a completed mill where one piece can slide out and back. */
    _countOpenMills(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            if (!mill.every(p => this.simState.board[p] === player)) continue;
            let found = false;
            for (const pos of mill) {
                for (const n of this.game.adjacent[pos]) {
                    if (this.simState.board[n] === null && !mill.includes(n)) {
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
            if (found) count++;
        }
        return count;
    }

    // ================================================================
    //  Opening book
    // ================================================================

    getOpeningMove() {
        const totalPlaced = (9 - this.game.piecesToPlace[1]) + (9 - this.game.piecesToPlace[2]);
        if (totalPlaced >= 6 || this.game.phase !== 'placing') return null;
        if (this.difficulty === 'easy') return null;

        // Complete a mill if possible
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] !== null) continue;
            if (this._wouldCompleteMill(i, this.player)) {
                return { type: 'place', position: i, player: this.player };
            }
        }
        // Block opponent mill
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] !== null) continue;
            if (this._wouldCompleteMill(i, this.opponent)) {
                return { type: 'place', position: i, player: this.player };
            }
        }
        // Strategic position
        for (const pos of this.openingPreferred) {
            if (this.simState.board[pos] === null) {
                const threat = this.evaluatePlacementThreat(pos, this.player);
                const block  = this.evaluatePlacementThreat(pos, this.opponent);
                if (threat > 0 || block > 5 || totalPlaced < 4) {
                    return { type: 'place', position: pos, player: this.player };
                }
            }
        }
        return null;
    }

    _wouldCompleteMill(pos, player) {
        for (const mill of this.millsByPosition[pos]) {
            if (mill.filter(p => p !== pos).every(p => this.simState.board[p] === player)) return true;
        }
        return false;
    }

    evaluatePlacementThreat(pos, player) {
        let threat = 0;
        for (const mill of this.millsByPosition[pos]) {
            let pC = 0, eC = 0, oC = 0;
            for (const p of mill) {
                if (this.simState.board[p] === player) pC++;
                else if (this.simState.board[p] === null) eC++;
                else oC++;
            }
            if (pC === 2 && eC === 1) threat += 20;
            else if (pC === 1 && eC === 2 && oC === 0) threat += 3;
        }
        return threat;
    }

    // ================================================================
    //  Removal logic (when a mill is formed)
    // ================================================================

    getBestRemoval() {
        const removable = this.getRemovablePieces(this.opponent);
        if (removable.length === 0) return null;
        if (removable.length === 1) return { type: 'remove', position: removable[0] };

        let bestScore = -Infinity;
        let bestPos = removable[0];

        for (const pos of removable) {
            let score = 0;

            // Break double-mill configurations
            score += this.countDoubleMills(pos, this.opponent) * 60;
            // Break potential mills
            score += this.countPotentialMills(pos, this.opponent) * 30;
            // Remove from strategic positions
            score += this.positionValues[pos] * 3;
            // Prefer removing pieces that block our mills
            score += this.countPotentialMills(pos, this.player) * 20;
            // Reduce opponent mobility
            const adjEmpty = this.game.adjacent[pos].filter(p => this.game.board[p] === null).length;
            score += adjEmpty * 4;
            // Prefer isolated opponent pieces
            const adjOwn = this.game.adjacent[pos].filter(p => this.game.board[p] === this.opponent).length;
            score -= adjOwn * 3;

            // Slight randomness below expert
            if (this.difficulty !== 'expert' && this.difficulty !== 'master' && this.difficulty !== 'grandmaster') {
                score += Math.random() * 5;
            }
            if (score > bestScore) {
                bestScore = score;
                bestPos = pos;
            }
        }
        return { type: 'remove', position: bestPos };
    }

    // ================================================================
    //  Move generation & ordering
    // ================================================================

    getAllMoves(player) {
        const moves = [];
        if (this.simState.phase === 'placing') {
            if (this.simState.piecesToPlace[player] > 0) {
                for (let i = 0; i < 24; i++) {
                    if (this.simState.board[i] === null) {
                        moves.push({ type: 'place', position: i, player });
                    }
                }
            }
        } else {
            const positions = this.getPlayerPositions(player);
            const canFly = positions.length === 3;
            for (const from of positions) {
                let dests;
                if (canFly) {
                    dests = [];
                    for (let i = 0; i < 24; i++) {
                        if (this.simState.board[i] === null) dests.push(i);
                    }
                } else {
                    dests = this.game.adjacent[from].filter(p => this.simState.board[p] === null);
                }
                for (const to of dests) {
                    moves.push({ type: 'move', from, to, player });
                }
            }
        }
        return moves;
    }

    /** Sort moves for better alpha-beta cutoffs. */
    sortMoves(moves, player, plyFromRoot) {
        const opponent = player === 1 ? 2 : 1;
        for (const m of moves) {
            let s = 0;
            const pos = m.type === 'place' ? m.position : m.to;
            // Mill-forming moves first
            if (this.wouldFormMill(m, player)) s += 200;
            // Blocking opponent mills
            if (this._wouldBlockMill(pos, opponent)) s += 80;
            // Double-mill setup
            if (this._wouldCreateDoubleMill(m, player)) s += 60;
            // Position value
            s += this.positionValues[pos] * 2;
            m._sortScore = s;
        }
        moves.sort((a, b) => b._sortScore - a._sortScore);
    }

    /** Move killer moves toward front (quiet moves that caused cutoffs). */
    _applyKillerMoves(moves, ply) {
        const killers = this.killerMoves[ply];
        if (!killers) return;
        for (let k = killers.length - 1; k >= 0; k--) {
            const key = killers[k];
            const idx = moves.findIndex(m => this._moveKey(m) === key);
            if (idx > 0) {
                const [m] = moves.splice(idx, 1);
                moves.unshift(m);
            }
        }
    }

    _recordKillerMove(move, ply) {
        if (!this.killerMoves[ply]) this.killerMoves[ply] = [];
        const key = this._moveKey(move);
        const arr = this.killerMoves[ply];
        if (!arr.includes(key)) {
            arr.unshift(key);
            if (arr.length > 2) arr.pop();
        }
    }

    _moveKey(move) {
        if (move.type === 'place') return 'p' + move.position;
        return 'm' + move.from + '-' + move.to;
    }

    // ================================================================
    //  Move predicates
    // ================================================================

    wouldFormMill(move, player) {
        const pos = move.type === 'place' ? move.position : move.to;
        for (const mill of this.millsByPosition[pos]) {
            const others = mill.filter(p => p !== pos);
            if (others.every(p => {
                if (move.type === 'move' && p === move.from) return false;
                return this.simState.board[p] === player;
            })) return true;
        }
        return false;
    }

    _wouldBlockMill(pos, opponent) {
        for (const mill of this.millsByPosition[pos]) {
            let oC = 0, eC = 0;
            for (const p of mill) {
                if (this.simState.board[p] === opponent) oC++;
                else if (this.simState.board[p] === null) eC++;
            }
            if (oC === 2 && eC === 1) return true;
        }
        return false;
    }

    /** Would this move create a double-mill setup? */
    _wouldCreateDoubleMill(move, player) {
        const pos = move.type === 'place' ? move.position : move.to;
        let nearMills = 0;
        for (const mill of this.millsByPosition[pos]) {
            let pC = 0;
            for (const p of mill.filter(x => x !== pos)) {
                if (move.type === 'move' && p === move.from) continue;
                if (this.simState.board[p] === player) pC++;
            }
            if (pC >= 1) nearMills++;
        }
        return nearMills >= 2;
    }

    // ================================================================
    //  Simulation: apply / undo moves
    // ================================================================

    initSimState() {
        this.simState = {
            board: { ...this.game.board },
            piecesToPlace: { ...this.game.piecesToPlace },
            piecesOnBoard: { ...this.game.piecesOnBoard },
            phase: this.game.phase
        };
    }

    getBoardHash() {
        let hash = '';
        for (let i = 0; i < 24; i++) hash += (this.simState.board[i] || '0');
        return hash + this.simState.phase;
    }

    applyMove(move) {
        const undoInfo = {
            captured: null,
            prevPhase: this.simState.phase,
            prevPiecesToPlace: { ...this.simState.piecesToPlace },
            prevPiecesOnBoard: { ...this.simState.piecesOnBoard }
        };

        if (move.type === 'place') {
            this.simState.board[move.position] = move.player;
            this.simState.piecesToPlace[move.player]--;
            this.simState.piecesOnBoard[move.player]++;
            if (this.simState.piecesToPlace[1] === 0 && this.simState.piecesToPlace[2] === 0) {
                this.simState.phase = 'moving';
            }
        } else if (move.type === 'move') {
            this.simState.board[move.to] = move.player;
            this.simState.board[move.from] = null;
        }

        // Mill detection & capture
        const pos = move.type === 'place' ? move.position : move.to;
        if (this.checkForMillInSim(pos, move.player)) {
            const opp = move.player === 1 ? 2 : 1;
            const removable = this.getRemovablePiecesInSim(opp);
            if (removable.length > 0) {
                const bestRemove = this._bestCaptureInSim(removable, opp, move.player);
                this.simState.board[bestRemove] = null;
                this.simState.piecesOnBoard[opp]--;
                undoInfo.captured = { position: bestRemove, player: opp };
            }
        }
        return undoInfo;
    }

    /** During simulation, pick the best opponent piece to capture. */
    _bestCaptureInSim(removable, oppPlayer, capturingPlayer) {
        let bestPos = removable[0];
        let maxVal = -Infinity;
        for (const r of removable) {
            let val = this.positionValues[r];
            val += this.countPotentialMillsInSim(r, oppPlayer) * 15;
            const millsWithR = this.game.mills.filter(mill =>
                mill.includes(r) &&
                mill.filter(p => this.simState.board[p] === oppPlayer).length >= 2
            );
            if (millsWithR.length >= 2) val += 30;
            val += this.countPotentialMillsInSim(r, capturingPlayer) * 10;
            if (val > maxVal) { maxVal = val; bestPos = r; }
        }
        return bestPos;
    }

    undoMove(move, undoInfo) {
        if (undoInfo.captured) {
            this.simState.board[undoInfo.captured.position] = undoInfo.captured.player;
            this.simState.piecesOnBoard[undoInfo.captured.player]++;
        }
        if (move.type === 'place') {
            this.simState.board[move.position] = null;
        } else if (move.type === 'move') {
            this.simState.board[move.from] = move.player;
            this.simState.board[move.to] = null;
        }
        this.simState.phase = undoInfo.prevPhase;
        this.simState.piecesToPlace = undoInfo.prevPiecesToPlace;
        this.simState.piecesOnBoard = undoInfo.prevPiecesOnBoard;
    }

    // ================================================================
    //  Board query helpers (simulation)
    // ================================================================

    checkForMillInSim(pos, player) {
        for (const mill of this.millsByPosition[pos]) {
            if (mill.every(p => this.simState.board[p] === player)) return true;
        }
        return false;
    }

    isPositionInMillInSim(pos, player) {
        return this.checkForMillInSim(pos, player);
    }

    getRemovablePiecesInSim(player) {
        const positions = [];
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === player) positions.push(i);
        }
        const allInMills = positions.every(p => this.isPositionInMillInSim(p, player));
        if (allInMills) return positions;
        return positions.filter(p => !this.isPositionInMillInSim(p, player));
    }

    countMillsInSim(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            if (mill.every(p => this.simState.board[p] === player)) count++;
        }
        return count;
    }

    countPotentialMillsInSim(pos, player) {
        let count = 0;
        for (const mill of this.millsByPosition[pos]) {
            let pC = 0, eC = 0;
            for (const p of mill) {
                if (this.simState.board[p] === player) pC++;
                else if (this.simState.board[p] === null) eC++;
            }
            if (pC === 2 && eC === 1) count++;
        }
        return count;
    }

    countAllPotentialMillsInSim(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            let pC = 0, eC = 0;
            for (const p of mill) {
                if (this.simState.board[p] === player) pC++;
                else if (this.simState.board[p] === null) eC++;
            }
            if (pC === 2 && eC === 1) count++;
        }
        return count;
    }

    countAllDoubleMills(player) {
        let count = 0;
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] !== player) continue;
            const completed = this.game.mills.filter(mill =>
                mill.includes(i) && mill.every(p => this.simState.board[p] === player)
            );
            if (completed.length >= 2) count++;
        }
        return count;
    }

    calculateMobility(player) {
        const pieces = [];
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === player) pieces.push(i);
        }
        if (pieces.length === 3) {
            let empty = 0;
            for (let i = 0; i < 24; i++) {
                if (this.simState.board[i] === null) empty++;
            }
            return empty * 3; // flying is very powerful
        }
        let mob = 0;
        for (const pos of pieces) {
            mob += this.game.adjacent[pos].filter(n => this.simState.board[n] === null).length;
        }
        return mob;
    }

    // ================================================================
    //  Board query helpers (real game board — used for removal, hints)
    // ================================================================

    getEmptyPositions() {
        const empty = [];
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === null) empty.push(i);
        }
        return empty;
    }

    getPlayerPositions(player) {
        const positions = [];
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === player) positions.push(i);
        }
        return positions;
    }

    getRemovablePieces(player) {
        const positions = [];
        for (let i = 0; i < 24; i++) {
            if (this.game.board[i] === player) positions.push(i);
        }
        const allInMills = positions.every(p => this.isPositionInMill(p, player));
        if (allInMills) return positions;
        return positions.filter(p => !this.isPositionInMill(p, player));
    }

    checkForMill(pos, player) {
        return this.game.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.game.board[p] === player);
        });
    }

    isPositionInMill(pos, player) {
        return this.checkForMill(pos, player);
    }

    countPotentialMills(pos, player) {
        let count = 0;
        for (const mill of this.millsByPosition[pos]) {
            const pC = mill.filter(p => this.game.board[p] === player).length;
            const eC = mill.filter(p => this.game.board[p] === null).length;
            if (pC === 2 && eC === 1) count++;
        }
        return count;
    }

    countDoubleMills(pos, player) {
        const mc = this.game.mills.filter(mill =>
            mill.includes(pos) &&
            mill.filter(p => this.game.board[p] === player).length >= 2
        );
        return mc.length >= 2 ? 1 : 0;
    }

    checkWinner() {
        if (this.simState.phase !== 'moving') return null;
        const myP  = this.simState.piecesOnBoard[this.player];
        const oppP = this.simState.piecesOnBoard[this.opponent];
        if (myP  < 3 && this.simState.piecesToPlace[this.player]   === 0) return this.opponent;
        if (oppP < 3 && this.simState.piecesToPlace[this.opponent] === 0) return this.player;
        return null;
    }
}

// Export for use in game.js
window.NavakankariAI = NavakankariAI;
