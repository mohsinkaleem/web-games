/**
 * AI Opponent for Navakankari
 * Implements enhanced minimax algorithm with alpha-beta pruning
 * Features: Opening book, improved evaluation, proper simulation state tracking
 */

class NavakankariAI {
    constructor(game, difficulty = 'medium') {
        this.game = game;
        this.difficulty = difficulty;
        this.player = 2; // AI is always player 2
        this.opponent = 1;
        
        // Difficulty settings (search depth)
        this.depths = {
            easy: 1,
            medium: 3,
            hard: 5,
            expert: 6
        };
        
        // Simulation state - tracked during minimax
        this.simState = null;
        
        // Position values for evaluation (refined for strategic importance)
        // Positions that are part of more mills / have more adjacencies are more valuable
        this.positionValues = {
            // Corner positions (outer square corners) - part of 2 mills each
            0: 3, 2: 3, 4: 3, 6: 3,
            // Middle ring corners - part of 3 mills each
            8: 4, 10: 4, 12: 4, 14: 4,
            // Inner ring corners - part of 2 mills each  
            16: 3, 18: 3, 20: 3, 22: 3,
            // Cross positions on outer ring - part of 3 mills (most valuable)
            1: 6, 3: 6, 5: 6, 7: 6,
            // Cross positions on middle ring - part of 4 mills (MOST strategic)
            9: 7, 11: 7, 13: 7, 15: 7,
            // Cross positions on inner ring - part of 3 mills
            17: 5, 19: 5, 21: 5, 23: 5
        };
        
        // Opening book for strong play
        this.openingBook = [
            // First moves: prefer center cross positions
            { moves: 0, preferred: [9, 11, 13, 15, 1, 3, 5, 7] },
            // Counter strong user openings
        ];
        
        // Transposition table for caching evaluated positions
        this.transpositionTable = new Map();
        this.maxTableSize = 10000;
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.transpositionTable.clear();
    }

    // Initialize simulation state from game
    initSimState() {
        this.simState = {
            board: { ...this.game.board },
            piecesToPlace: { ...this.game.piecesToPlace },
            piecesOnBoard: { ...this.game.piecesOnBoard },
            phase: this.game.phase
        };
    }

    // Get board hash for transposition table
    getBoardHash() {
        let hash = '';
        for (let i = 0; i < 24; i++) {
            hash += (this.simState.board[i] || '0');
        }
        return hash + this.simState.phase;
    }

    // Get the best move for the AI
    async getBestMove() {
        const depth = this.depths[this.difficulty] || 3;
        
        // Add slight delay to make AI feel more natural
        await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 400));
        
        if (this.game.mustRemove) {
            return this.getBestRemoval();
        }
        
        // Initialize simulation state
        this.initSimState();
        
        // Check opening book for early game
        const openingMove = this.getOpeningMove();
        if (openingMove && this.difficulty !== 'easy') {
            return openingMove;
        }
        
        // Use iterative deepening for better move ordering
        let bestMove = null;
        let bestScore = -Infinity;
        
        const moves = this.getAllMoves(this.player);
        this.sortMoves(moves, this.player);
        
        // Add randomness for easy mode
        if (this.difficulty === 'easy' && Math.random() < 0.4) {
            return moves[Math.floor(Math.random() * Math.min(3, moves.length))];
        }
        
        let alpha = -Infinity;
        const beta = Infinity;

        for (const move of moves) {
            const undoInfo = this.applyMove(move);
            const score = this.minimax(depth - 1, false, alpha, beta);
            this.undoMove(move, undoInfo);
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
            
            alpha = Math.max(alpha, score);
        }
        
        // Clear transposition table if too large
        if (this.transpositionTable.size > this.maxTableSize) {
            this.transpositionTable.clear();
        }
        
        return bestMove || moves[0];
    }

    // Opening book moves
    getOpeningMove() {
        const totalPlaced = (9 - this.game.piecesToPlace[1]) + (9 - this.game.piecesToPlace[2]);
        
        if (totalPlaced < 4 && this.game.phase === 'placing') {
            // Prioritize center cross positions
            const preferred = [9, 11, 13, 15, 1, 3, 5, 7];
            for (const pos of preferred) {
                if (this.game.board[pos] === null) {
                    // Check if this creates or blocks a threat
                    const threatScore = this.evaluatePlacementThreat(pos, this.player);
                    const blockScore = this.evaluatePlacementThreat(pos, this.opponent);
                    
                    if (threatScore > 0 || blockScore > 5) {
                        return { type: 'place', position: pos, player: this.player };
                    }
                }
            }
            // Pick first available strategic position
            for (const pos of preferred) {
                if (this.game.board[pos] === null) {
                    return { type: 'place', position: pos, player: this.player };
                }
            }
        }
        return null;
    }

    // Evaluate threat from placing at a position
    evaluatePlacementThreat(pos, player) {
        let threat = 0;
        for (const mill of this.game.mills) {
            if (!mill.includes(pos)) continue;
            const playerCount = mill.filter(p => this.game.board[p] === player).length;
            const emptyCount = mill.filter(p => this.game.board[p] === null).length;
            const opponentCount = mill.filter(p => this.game.board[p] !== null && this.game.board[p] !== player).length;
            
            if (playerCount === 2 && emptyCount === 1) {
                threat += 20; // Can complete mill
            } else if (playerCount === 1 && emptyCount === 2 && opponentCount === 0) {
                threat += 3; // Building toward mill
            }
        }
        return threat;
    }

    // Find best piece to remove - enhanced logic
    getBestRemoval() {
        const removable = this.getRemovablePieces(this.opponent);
        
        if (removable.length === 0) return null;
        if (removable.length === 1) return { type: 'remove', position: removable[0] };
        
        let bestScore = -Infinity;
        let bestPos = removable[0];
        
        for (const pos of removable) {
            let score = 0;
            
            // High priority: break double mill potential
            const doubleMills = this.countDoubleMills(pos, this.opponent);
            score += doubleMills * 50;
            
            // Break potential mills
            score += this.countPotentialMills(pos, this.opponent) * 25;
            
            // Remove from strategic positions
            score += this.positionValues[pos] * 2;
            
            // Prefer pieces that block our mills
            score += this.countPotentialMills(pos, this.player) * 15;
            
            // Reduce opponent mobility
            const adjacentEmpty = this.game.adjacent[pos].filter(p => this.game.board[p] === null).length;
            score += adjacentEmpty * 3;
            
            // Slight randomness for variety (except expert)
            if (this.difficulty !== 'expert') {
                score += Math.random() * 5;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestPos = pos;
            }
        }
        
        return { type: 'remove', position: bestPos };
    }

    // Count double mill configurations (pieces that can swing between two mills)
    countDoubleMills(pos, player) {
        let count = 0;
        const millsContainingPos = this.game.mills.filter(mill => 
            mill.includes(pos) && 
            mill.filter(p => this.game.board[p] === player).length >= 2
        );
        
        if (millsContainingPos.length >= 2) {
            count += 1;
        }
        return count;
    }

    // Get a hint for the human player
    getHint() {
        const originalPlayer = this.player;
        const originalOpponent = this.opponent;
        this.player = 1;
        this.opponent = 2;
        
        let hint;
        if (this.game.mustRemove) {
            hint = this.getBestRemoval();
        } else {
            this.initSimState();
            const depth = Math.min(3, this.depths[this.difficulty] || 3);
            
            const moves = this.getAllMoves(this.player);
            this.sortMoves(moves, this.player);
            
            let bestScore = -Infinity;
            let bestMove = null;
            
            for (const move of moves) {
                const undoInfo = this.applyMove(move);
                const score = this.minimax(depth - 1, false, -Infinity, Infinity);
                this.undoMove(move, undoInfo);
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = move;
                }
            }
            hint = bestMove;
        }
        
        this.player = originalPlayer;
        this.opponent = originalOpponent;
        
        return hint;
    }

    // Minimax with alpha-beta pruning and transposition table
    minimax(depth, isMaximizing, alpha, beta) {
        // Check transposition table
        const hash = this.getBoardHash();
        const cached = this.transpositionTable.get(hash);
        if (cached && cached.depth >= depth) {
            if (cached.flag === 'exact') return cached.score;
            if (cached.flag === 'lower') alpha = Math.max(alpha, cached.score);
            if (cached.flag === 'upper') beta = Math.min(beta, cached.score);
            if (alpha >= beta) return cached.score;
        }
        
        // Terminal conditions
        const winner = this.checkWinner();
        if (winner === this.player) return 10000 + depth;
        if (winner === this.opponent) return -10000 - depth;
        
        if (depth === 0) {
            const score = this.evaluate();
            this.transpositionTable.set(hash, { depth, score, flag: 'exact' });
            return score;
        }
        
        const currentPlayer = isMaximizing ? this.player : this.opponent;
        const moves = this.getAllMoves(currentPlayer);
        
        if (moves.length === 0) {
            return isMaximizing ? -9000 : 9000;
        }
        
        this.sortMoves(moves, currentPlayer);
        
        let bestScore = isMaximizing ? -Infinity : Infinity;
        let flag = 'upper';
        
        for (const move of moves) {
            const undoInfo = this.applyMove(move);
            const score = this.minimax(depth - 1, !isMaximizing, alpha, beta);
            this.undoMove(move, undoInfo);
            
            if (isMaximizing) {
                if (score > bestScore) {
                    bestScore = score;
                    flag = 'exact';
                }
                alpha = Math.max(alpha, score);
            } else {
                if (score < bestScore) {
                    bestScore = score;
                    flag = 'exact';
                }
                beta = Math.min(beta, score);
            }
            
            if (beta <= alpha) {
                flag = isMaximizing ? 'lower' : 'upper';
                break;
            }
        }
        
        this.transpositionTable.set(hash, { depth, score: bestScore, flag });
        return bestScore;
    }

    // Enhanced move sorting for better alpha-beta pruning
    sortMoves(moves, player) {
        const opponent = player === 1 ? 2 : 1;
        
        moves.sort((a, b) => {
            let scoreA = 0, scoreB = 0;
            
            const posA = a.type === 'place' ? a.position : a.to;
            const posB = b.type === 'place' ? b.position : b.to;
            
            // Prioritize mill-forming moves
            if (this.wouldFormMill(a, player)) scoreA += 100;
            if (this.wouldFormMill(b, player)) scoreB += 100;
            
            // Then blocking opponent mills
            if (this.wouldBlockMill(posA, opponent)) scoreA += 50;
            if (this.wouldBlockMill(posB, opponent)) scoreB += 50;
            
            // Then position values
            scoreA += this.positionValues[posA];
            scoreB += this.positionValues[posB];
            
            return scoreB - scoreA;
        });
    }

    // Check if a move would form a mill
    wouldFormMill(move, player) {
        const pos = move.type === 'place' ? move.position : move.to;
        
        for (const mill of this.game.mills) {
            if (!mill.includes(pos)) continue;
            
            const otherPositions = mill.filter(p => p !== pos);
            const allOwned = otherPositions.every(p => {
                if (move.type === 'move' && p === move.from) return false;
                return this.simState.board[p] === player;
            });
            
            if (allOwned) return true;
        }
        return false;
    }

    // Check if placing at position would block opponent's potential mill
    wouldBlockMill(pos, opponent) {
        for (const mill of this.game.mills) {
            if (!mill.includes(pos)) continue;
            const opponentCount = mill.filter(p => this.simState.board[p] === opponent).length;
            const emptyCount = mill.filter(p => this.simState.board[p] === null).length;
            if (opponentCount === 2 && emptyCount === 1) return true;
        }
        return false;
    }

    // Apply move in simulation
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
            
            // Check phase transition
            if (this.simState.piecesToPlace[1] === 0 && this.simState.piecesToPlace[2] === 0) {
                this.simState.phase = 'moving';
            }
        } else if (move.type === 'move') {
            this.simState.board[move.to] = move.player;
            this.simState.board[move.from] = null;
        }
        
        // Check for mill and handle capture
        const pos = move.type === 'place' ? move.position : move.to;
        
        if (this.checkForMillInSim(pos, move.player)) {
            const opponent = move.player === 1 ? 2 : 1;
            const removable = this.getRemovablePiecesInSim(opponent);
            
            if (removable.length > 0) {
                // Intelligent capture selection
                let bestRemove = removable[0];
                let maxVal = -Infinity;
                
                for (const r of removable) {
                    let val = this.positionValues[r];
                    val += this.countPotentialMillsInSim(r, opponent) * 15;
                    val += this.countDoubleMills(r, opponent) * 25;
                    
                    if (val > maxVal) {
                        maxVal = val;
                        bestRemove = r;
                    }
                }
                
                this.simState.board[bestRemove] = null;
                this.simState.piecesOnBoard[opponent]--;
                undoInfo.captured = { position: bestRemove, player: opponent };
            }
        }
        
        return undoInfo;
    }

    undoMove(move, undoInfo) {
        // Restore captured piece
        if (undoInfo.captured) {
            this.simState.board[undoInfo.captured.position] = undoInfo.captured.player;
            this.simState.piecesOnBoard[undoInfo.captured.player]++;
        }

        // Revert move
        if (move.type === 'place') {
            this.simState.board[move.position] = null;
        } else if (move.type === 'move') {
            this.simState.board[move.from] = move.player;
            this.simState.board[move.to] = null;
        }
        
        // Restore state
        this.simState.phase = undoInfo.prevPhase;
        this.simState.piecesToPlace = undoInfo.prevPiecesToPlace;
        this.simState.piecesOnBoard = undoInfo.prevPiecesOnBoard;
    }

    // Enhanced evaluation function
    evaluate() {
        let score = 0;
        
        const myPieces = this.simState.piecesOnBoard[this.player];
        const oppPieces = this.simState.piecesOnBoard[this.opponent];
        const myToPlace = this.simState.piecesToPlace[this.player];
        const oppToPlace = this.simState.piecesToPlace[this.opponent];
        
        // Phase-specific evaluation
        if (this.simState.phase === 'placing') {
            // During placing, piece count difference matters less
            score += (myPieces - oppPieces) * 50;
            score += (myToPlace - oppToPlace) * 10; // Prefer having more to place
            
            // Potential mills are crucial during placing
            score += this.countAllPotentialMillsInSim(this.player) * 25;
            score -= this.countAllPotentialMillsInSim(this.opponent) * 30; // Slightly fear opponent's
            
        } else {
            // Moving/Flying phase
            if (myPieces < 3) return -10000;
            if (oppPieces < 3) return 10000;
            
            // Piece advantage is critical
            score += (myPieces - oppPieces) * 200;
            
            // Flying advantage (3 pieces can fly)
            if (myPieces === 3) score += 150;
            if (oppPieces === 3) score -= 100;
        }
        
        // Mills (completed)
        score += this.countMillsInSim(this.player) * 40;
        score -= this.countMillsInSim(this.opponent) * 40;
        
        // Potential mills
        score += this.countAllPotentialMillsInSim(this.player) * 20;
        score -= this.countAllPotentialMillsInSim(this.opponent) * 25;
        
        // Double mills (very powerful)
        score += this.countAllDoubleMills(this.player) * 60;
        score -= this.countAllDoubleMills(this.opponent) * 70;
        
        // Position control
        for (let pos = 0; pos < 24; pos++) {
            if (this.simState.board[pos] === this.player) {
                score += this.positionValues[pos];
            } else if (this.simState.board[pos] === this.opponent) {
                score -= this.positionValues[pos];
            }
        }
        
        // Mobility (important in moving phase)
        if (this.simState.phase !== 'placing') {
            const myMobility = this.calculateMobility(this.player);
            const oppMobility = this.calculateMobility(this.opponent);
            
            score += myMobility * 8;
            score -= oppMobility * 8;
            
            // Heavy penalty for being blocked
            if (myMobility === 0 && myPieces > 3) score -= 800;
            if (oppMobility === 0 && oppPieces > 3) score += 1000;
        }
        
        return score;
    }

    // Count all double mill configurations for a player
    countAllDoubleMills(player) {
        let count = 0;
        const positions = [];
        
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === player) {
                positions.push(i);
            }
        }
        
        for (const pos of positions) {
            const millsWithPos = this.game.mills.filter(mill => {
                if (!mill.includes(pos)) return false;
                return mill.every(p => this.simState.board[p] === player);
            });
            
            // Position is part of 2+ mills = double mill piece
            if (millsWithPos.length >= 2) {
                count++;
            }
        }
        return count;
    }
    
    calculateMobility(player) {
        let mobility = 0;
        const pieces = [];
        
        for (let i = 0; i < 24; i++) {
            if (this.simState.board[i] === player) pieces.push(i);
        }
        
        // Flying phase
        if (pieces.length === 3) {
            let emptyCount = 0;
            for (let i = 0; i < 24; i++) {
                if (this.simState.board[i] === null) emptyCount++;
            }
            return emptyCount * 3; // Flying is powerful
        }
        
        // Normal movement
        for (const pos of pieces) {
            mobility += this.game.adjacent[pos].filter(n => this.simState.board[n] === null).length;
        }
        return mobility;
    }

    // Simulation helper methods
    checkForMillInSim(pos, player) {
        return this.game.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.simState.board[p] === player);
        });
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
            if (mill.every(p => this.simState.board[p] === player)) {
                count++;
            }
        }
        return count;
    }

    countPotentialMillsInSim(pos, player) {
        let count = 0;
        for (const mill of this.game.mills) {
            if (!mill.includes(pos)) continue;
            const playerCount = mill.filter(p => this.simState.board[p] === player).length;
            const emptyCount = mill.filter(p => this.simState.board[p] === null).length;
            if (playerCount === 2 && emptyCount === 1) {
                count++;
            }
        }
        return count;
    }

    countAllPotentialMillsInSim(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            const playerCount = mill.filter(p => this.simState.board[p] === player).length;
            const emptyCount = mill.filter(p => this.simState.board[p] === null).length;
            if (playerCount === 2 && emptyCount === 1) {
                count++;
            }
        }
        return count;
    }

    // Real game helper methods (non-simulation)
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
        for (const mill of this.game.mills) {
            if (!mill.includes(pos)) continue;
            const playerCount = mill.filter(p => this.game.board[p] === player).length;
            const emptyCount = mill.filter(p => this.game.board[p] === null).length;
            if (playerCount === 2 && emptyCount === 1) {
                count++;
            }
        }
        return count;
    }
    
    checkWinner() {
        const myPieces = this.simState.piecesOnBoard[this.player];
        const oppPieces = this.simState.piecesOnBoard[this.opponent];
        const myToPlace = this.simState.piecesToPlace[this.player];
        const oppToPlace = this.simState.piecesToPlace[this.opponent];
        
        // Only check win during moving phase
        if (this.simState.phase !== 'moving') return null;
        
        if (myPieces < 3 && myToPlace === 0) return this.opponent;
        if (oppPieces < 3 && oppToPlace === 0) return this.player;
        
        return null;
    }

    getAllMoves(player) {
        const moves = [];
        
        if (this.simState.phase === 'placing') {
            // Only generate moves if player has pieces to place
            if (this.simState.piecesToPlace[player] > 0) {
                for (let i = 0; i < 24; i++) {
                    if (this.simState.board[i] === null) {
                        moves.push({ type: 'place', position: i, player });
                    }
                }
            }
        } else {
            const positions = this.getPlayerPositions(player);
            const pieceCount = positions.length;
            const canFly = pieceCount === 3;
            
            for (const from of positions) {
                let destinations;
                if (canFly) {
                    destinations = [];
                    for (let i = 0; i < 24; i++) {
                        if (this.simState.board[i] === null) destinations.push(i);
                    }
                } else {
                    destinations = this.game.adjacent[from].filter(p => this.simState.board[p] === null);
                }
                
                for (const to of destinations) {
                    moves.push({ type: 'move', from, to, player });
                }
            }
        }
        
        return moves;
    }
}

// Export for use in game.js
window.NavakankariAI = NavakankariAI;
