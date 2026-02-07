/**
 * AI Opponent for Navakankari
 * Implements minimax algorithm with alpha-beta pruning
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
            hard: 5
        };
        
        // Position values for evaluation
        this.positionValues = {
            // Corner positions (outer square corners) - strategic
            0: 3, 2: 3, 4: 3, 6: 3,
            // Middle positions (middle square corners) - very strategic
            8: 4, 10: 4, 12: 4, 14: 4,
            // Inner positions (inner square corners) - good
            16: 3, 18: 3, 20: 3, 22: 3,
            // Cross positions - most valuable (multiple mill options)
            1: 5, 3: 5, 5: 5, 7: 5,
            9: 5, 11: 5, 13: 5, 15: 5,
            17: 4, 19: 4, 21: 4, 23: 4
        };
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }

    // Get the best move for the AI
    async getBestMove() {
        const depth = this.depths[this.difficulty];
        
        // Add slight delay to make AI feel more natural
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
        
        if (this.game.mustRemove) {
            return this.getBestRemoval();
        } else if (this.game.phase === 'placing') {
            return this.getBestPlacement(depth);
        } else {
            return this.getBestMovement(depth);
        }
    }

    // Find best piece to remove
    getBestRemoval() {
        const removable = this.getRemovablePieces(this.opponent);
        
        if (removable.length === 0) return null;
        
        // Prioritize pieces that would break opponent's potential mills
        let bestScore = -Infinity;
        let bestPos = removable[0];
        
        for (const pos of removable) {
            let score = 0;
            
            // Check if removing this piece breaks a potential mill
            score += this.countPotentialMills(pos, this.opponent) * 10;
            
            // Prefer removing from strategic positions
            score += this.positionValues[pos];
            
            // Add randomness for easy mode
            if (this.difficulty === 'easy') {
                score += Math.random() * 20;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestPos = pos;
            }
        }
        
        return { type: 'remove', position: bestPos };
    }

    // Find best placement position
    getBestPlacement(depth) {
        const emptyPositions = this.getEmptyPositions();
        
        if (emptyPositions.length === 0) return null;
        
        let bestScore = -Infinity;
        let bestPos = emptyPositions[0];
        
        for (const pos of emptyPositions) {
            // Simulate placement
            this.game.board[pos] = this.player;
            
            let score = this.minimax(depth - 1, false, -Infinity, Infinity);
            
            // Bonus for forming a mill immediately
            if (this.checkForMill(pos, this.player)) {
                score += 100;
            }
            
            // Bonus for blocking opponent's mill
            this.game.board[pos] = this.opponent;
            if (this.checkForMill(pos, this.opponent)) {
                score += 50;
            }
            this.game.board[pos] = this.player;
            
            // Position value bonus
            score += this.positionValues[pos];
            
            // Undo
            this.game.board[pos] = null;
            
            // Add randomness for easy mode
            if (this.difficulty === 'easy') {
                score += Math.random() * 30;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestPos = pos;
            }
        }
        
        return { type: 'place', position: bestPos };
    }

    // Find best movement
    getBestMovement(depth) {
        const myPositions = this.getPlayerPositions(this.player);
        const canFly = this.game.piecesOnBoard[this.player] === 3;
        
        let bestScore = -Infinity;
        let bestMove = null;
        
        for (const from of myPositions) {
            const validMoves = canFly 
                ? this.getEmptyPositions()
                : this.game.adjacent[from].filter(p => this.game.board[p] === null);
            
            for (const to of validMoves) {
                // Simulate move
                this.game.board[to] = this.player;
                this.game.board[from] = null;
                
                let score = this.minimax(depth - 1, false, -Infinity, Infinity);
                
                // Bonus for forming a mill
                if (this.checkForMill(to, this.player)) {
                    score += 100;
                }
                
                // Bonus for moving to strategic position
                score += this.positionValues[to] - this.positionValues[from];
                
                // Undo
                this.game.board[from] = this.player;
                this.game.board[to] = null;
                
                // Add randomness for easy mode
                if (this.difficulty === 'easy') {
                    score += Math.random() * 30;
                }
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { type: 'move', from, to };
                }
            }
        }
        
        return bestMove;
    }

    // Minimax with alpha-beta pruning
    minimax(depth, isMaximizing, alpha, beta) {
        // Terminal conditions
        if (depth === 0) {
            return this.evaluate();
        }
        
        const winner = this.checkWinner();
        if (winner === this.player) return 1000 + depth;
        if (winner === this.opponent) return -1000 - depth;
        
        const currentPlayer = isMaximizing ? this.player : this.opponent;
        const moves = this.getAllMoves(currentPlayer);
        
        if (moves.length === 0) {
            // No moves available - this player loses
            return isMaximizing ? -1000 : 1000;
        }
        
        if (isMaximizing) {
            let maxEval = -Infinity;
            for (const move of moves) {
                this.applyMove(move);
                const evaluation = this.minimax(depth - 1, false, alpha, beta);
                this.undoMove(move);
                maxEval = Math.max(maxEval, evaluation);
                alpha = Math.max(alpha, evaluation);
                if (beta <= alpha) break;
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const move of moves) {
                this.applyMove(move);
                const evaluation = this.minimax(depth - 1, true, alpha, beta);
                this.undoMove(move);
                minEval = Math.min(minEval, evaluation);
                beta = Math.min(beta, evaluation);
                if (beta <= alpha) break;
            }
            return minEval;
        }
    }

    // Evaluate board state
    evaluate() {
        let score = 0;
        
        // Piece count difference
        const myPieces = this.game.piecesOnBoard[this.player] + this.game.piecesToPlace[this.player];
        const oppPieces = this.game.piecesOnBoard[this.opponent] + this.game.piecesToPlace[this.opponent];
        score += (myPieces - oppPieces) * 10;
        
        // Mills count
        score += this.countMills(this.player) * 25;
        score -= this.countMills(this.opponent) * 25;
        
        // Potential mills (two in a row with empty third)
        score += this.countAllPotentialMills(this.player) * 8;
        score -= this.countAllPotentialMills(this.opponent) * 8;
        
        // Position values
        for (let pos = 0; pos < 24; pos++) {
            if (this.game.board[pos] === this.player) {
                score += this.positionValues[pos];
            } else if (this.game.board[pos] === this.opponent) {
                score -= this.positionValues[pos];
            }
        }
        
        // Mobility (number of valid moves)
        if (this.game.phase === 'moving') {
            score += this.countMobility(this.player) * 2;
            score -= this.countMobility(this.opponent) * 2;
        }
        
        // Blocked pieces penalty
        score -= this.countBlockedPieces(this.player) * 5;
        score += this.countBlockedPieces(this.opponent) * 5;
        
        return score;
    }

    // Helper methods
    getEmptyPositions() {
        const empty = [];
        for (let i = 0; i < 24; i++) {
            if (this.game.board[i] === null) {
                empty.push(i);
            }
        }
        return empty;
    }

    getPlayerPositions(player) {
        const positions = [];
        for (let i = 0; i < 24; i++) {
            if (this.game.board[i] === player) {
                positions.push(i);
            }
        }
        return positions;
    }

    getRemovablePieces(player) {
        const positions = this.getPlayerPositions(player);
        const allInMills = positions.every(p => this.isPositionInMill(p, player));
        
        if (allInMills) {
            return positions;
        }
        return positions.filter(p => !this.isPositionInMill(p, player));
    }

    checkForMill(pos, player) {
        return this.game.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.game.board[p] === player);
        });
    }

    isPositionInMill(pos, player) {
        return this.game.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.game.board[p] === player);
        });
    }

    countMills(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            if (mill.every(p => this.game.board[p] === player)) {
                count++;
            }
        }
        return count;
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

    countAllPotentialMills(player) {
        let count = 0;
        for (const mill of this.game.mills) {
            const playerCount = mill.filter(p => this.game.board[p] === player).length;
            const emptyCount = mill.filter(p => this.game.board[p] === null).length;
            if (playerCount === 2 && emptyCount === 1) {
                count++;
            }
        }
        return count;
    }

    countMobility(player) {
        let moves = 0;
        const positions = this.getPlayerPositions(player);
        const canFly = this.game.piecesOnBoard[player] === 3 && this.game.phase === 'moving';
        
        for (const pos of positions) {
            if (canFly) {
                moves += this.getEmptyPositions().length;
            } else {
                moves += this.game.adjacent[pos].filter(p => this.game.board[p] === null).length;
            }
        }
        return moves;
    }

    countBlockedPieces(player) {
        let blocked = 0;
        const positions = this.getPlayerPositions(player);
        
        for (const pos of positions) {
            const hasMove = this.game.adjacent[pos].some(p => this.game.board[p] === null);
            if (!hasMove) blocked++;
        }
        return blocked;
    }

    getAllMoves(player) {
        const moves = [];
        
        if (this.game.piecesToPlace[player] > 0) {
            // Placing phase
            for (const pos of this.getEmptyPositions()) {
                moves.push({ type: 'place', position: pos, player });
            }
        } else {
            // Moving phase
            const positions = this.getPlayerPositions(player);
            const canFly = this.game.piecesOnBoard[player] === 3;
            
            for (const from of positions) {
                const destinations = canFly 
                    ? this.getEmptyPositions()
                    : this.game.adjacent[from].filter(p => this.game.board[p] === null);
                
                for (const to of destinations) {
                    moves.push({ type: 'move', from, to, player });
                }
            }
        }
        
        return moves;
    }

    applyMove(move) {
        if (move.type === 'place') {
            this.game.board[move.position] = move.player;
        } else if (move.type === 'move') {
            this.game.board[move.to] = move.player;
            this.game.board[move.from] = null;
        }
    }

    undoMove(move) {
        if (move.type === 'place') {
            this.game.board[move.position] = null;
        } else if (move.type === 'move') {
            this.game.board[move.from] = move.player;
            this.game.board[move.to] = null;
        }
    }

    checkWinner() {
        // Check if either player has less than 3 pieces (during moving phase)
        if (this.game.phase === 'moving') {
            if (this.game.piecesOnBoard[this.player] < 3) return this.opponent;
            if (this.game.piecesOnBoard[this.opponent] < 3) return this.player;
            
            // Check if either player is blocked
            const myMobility = this.countMobility(this.player);
            const oppMobility = this.countMobility(this.opponent);
            
            if (myMobility === 0 && this.game.piecesOnBoard[this.player] > 3) return this.opponent;
            if (oppMobility === 0 && this.game.piecesOnBoard[this.opponent] > 3) return this.player;
        }
        
        return null;
    }

    // Get a hint for the human player
    getHint() {
        // Temporarily switch to human player perspective
        const originalPlayer = this.player;
        const originalOpponent = this.opponent;
        this.player = 1;
        this.opponent = 2;
        
        let hint;
        
        if (this.game.mustRemove) {
            hint = this.getBestRemoval();
        } else if (this.game.phase === 'placing') {
            hint = this.getBestPlacement(2);
        } else {
            hint = this.getBestMovement(2);
        }
        
        // Restore
        this.player = originalPlayer;
        this.opponent = originalOpponent;
        
        return hint;
    }
}

// Export for use in game.js
window.NavakankariAI = NavakankariAI;
