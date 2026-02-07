/**
 * Navakankari (Nine Men's Morris) Game Logic
 * Enhanced with animations, sounds, AI, and visual effects
 */

class NavakankariGame {
    constructor() {
        // Board positions with their SVG coordinates
        this.positions = {
            0: { x: 70, y: 70 },    1: { x: 250, y: 70 },   2: { x: 430, y: 70 },
            3: { x: 430, y: 250 },  4: { x: 430, y: 430 },  5: { x: 250, y: 430 },
            6: { x: 70, y: 430 },   7: { x: 70, y: 250 },
            8: { x: 130, y: 130 },  9: { x: 250, y: 130 },  10: { x: 370, y: 130 },
            11: { x: 370, y: 250 }, 12: { x: 370, y: 370 }, 13: { x: 250, y: 370 },
            14: { x: 130, y: 370 }, 15: { x: 130, y: 250 },
            16: { x: 190, y: 190 }, 17: { x: 250, y: 190 }, 18: { x: 310, y: 190 },
            19: { x: 310, y: 250 }, 20: { x: 310, y: 310 }, 21: { x: 250, y: 310 },
            22: { x: 190, y: 310 }, 23: { x: 190, y: 250 }
        };

        // Adjacent positions
        this.adjacent = {
            0: [1, 7], 1: [0, 2, 9], 2: [1, 3], 3: [2, 4, 11], 4: [3, 5], 5: [4, 6, 13],
            6: [5, 7], 7: [0, 6, 15], 8: [9, 15], 9: [1, 8, 10, 17], 10: [9, 11],
            11: [3, 10, 12, 19], 12: [11, 13], 13: [5, 12, 14, 21], 14: [13, 15],
            15: [7, 8, 14, 23], 16: [17, 23], 17: [9, 16, 18], 18: [17, 19],
            19: [11, 18, 20], 20: [19, 21], 21: [13, 20, 22], 22: [21, 23], 23: [15, 16, 22]
        };

        // All possible mills
        this.mills = [
            [0, 1, 2], [8, 9, 10], [16, 17, 18], [7, 15, 23], [3, 11, 19],
            [22, 21, 20], [14, 13, 12], [6, 5, 4], [0, 7, 6], [8, 15, 14],
            [16, 23, 22], [1, 9, 17], [5, 13, 21], [18, 19, 20], [10, 11, 12], [2, 3, 4]
        ];

        // Game state
        this.board = {};
        this.currentPlayer = 1;
        this.phase = 'placing';
        this.piecesToPlace = { 1: 9, 2: 9 };
        this.piecesOnBoard = { 1: 0, 2: 0 };
        this.capturedPieces = { 1: 0, 2: 0 };
        this.selectedPiece = null;
        this.validMoves = [];
        this.mustRemove = false;
        this.gameOver = false;
        this.moveHistory = [];
        this.moveLog = [];
        this.millsFormed = { 1: 0, 2: 0 };
        this.totalMoves = 0;
        
        // Game mode
        this.gameMode = 'two-player'; // 'two-player' or 'vs-ai'
        this.aiDifficulty = 'medium';
        this.ai = null;
        this.isAITurn = false;
        
        // Hint state
        this.hintPosition = null;

        // Initialize board
        for (let i = 0; i < 24; i++) {
            this.board[i] = null;
        }

        // DOM elements
        this.positionsGroup = document.getElementById('positions');
        this.piecesGroup = document.getElementById('pieces');
        this.millHighlights = document.getElementById('mill-highlights');
        this.statusText = document.querySelector('.status-text');
        this.statusIcon = document.querySelector('.status-icon');
        
        // Initialize
        this.renderBoard();
        this.bindEvents();
        this.updateUI();
    }

    renderBoard() {
        this.positionsGroup.innerHTML = '';
        
        for (const [pos, coords] of Object.entries(this.positions)) {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.setAttribute('class', 'position-spot');
            group.setAttribute('data-position', pos);
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('class', 'spot-bg');
            circle.setAttribute('cx', coords.x);
            circle.setAttribute('cy', coords.y);
            circle.setAttribute('r', 15);
            
            group.appendChild(circle);
            this.positionsGroup.appendChild(group);
        }
    }

    renderPieces() {
        this.piecesGroup.innerHTML = '';
        
        for (const [pos, player] of Object.entries(this.board)) {
            if (player !== null) {
                const coords = this.positions[pos];
                const isSelected = parseInt(pos) === this.selectedPiece;
                const isPartOfMill = this.isPositionInMill(parseInt(pos), player);
                const isHint = parseInt(pos) === this.hintPosition;
                
                const piece = this.createPieceElement(pos, player, coords, isSelected, isPartOfMill, isHint);
                this.piecesGroup.appendChild(piece);
            }
        }
    }

    createPieceElement(pos, player, coords, isSelected, isPartOfMill, isHint) {
        const piece = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        let classes = `piece player${player}`;
        if (isSelected) classes += ' selected';
        if (isPartOfMill) classes += ' part-of-mill';
        if (isHint) classes += ' hint';
        
        piece.setAttribute('class', classes);
        piece.setAttribute('data-position', pos);
        piece.setAttribute('data-player', player);
        
        // Shadow
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        shadow.setAttribute('cx', coords.x + 2);
        shadow.setAttribute('cy', coords.y + 4);
        shadow.setAttribute('rx', 18);
        shadow.setAttribute('ry', 8);
        shadow.setAttribute('fill', 'rgba(0,0,0,0.3)');
        
        // Main piece
        const mainCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        mainCircle.setAttribute('cx', coords.x);
        mainCircle.setAttribute('cy', coords.y);
        mainCircle.setAttribute('r', 20);
        mainCircle.setAttribute('fill', player === 1 ? 'url(#saffronPiece)' : 'url(#greenPiece)');
        mainCircle.setAttribute('stroke', player === 1 ? '#8B4500' : '#004400');
        mainCircle.setAttribute('stroke-width', '2');
        
        // Highlight
        const highlight = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        highlight.setAttribute('cx', coords.x - 5);
        highlight.setAttribute('cy', coords.y - 5);
        highlight.setAttribute('rx', 8);
        highlight.setAttribute('ry', 5);
        highlight.setAttribute('fill', 'rgba(255,255,255,0.35)');
        
        // Inner decoration
        const inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        inner.setAttribute('cx', coords.x);
        inner.setAttribute('cy', coords.y);
        inner.setAttribute('r', 10);
        inner.setAttribute('fill', 'none');
        inner.setAttribute('stroke', 'rgba(255,255,255,0.25)');
        inner.setAttribute('stroke-width', '1.5');
        
        piece.appendChild(shadow);
        piece.appendChild(mainCircle);
        piece.appendChild(highlight);
        piece.appendChild(inner);
        
        return piece;
    }

    bindEvents() {
        // Position clicks
        this.positionsGroup.addEventListener('click', (e) => {
            if (this.isAITurn) return;
            const spot = e.target.closest('.position-spot');
            if (spot) {
                const pos = parseInt(spot.getAttribute('data-position'));
                this.handlePositionClick(pos);
            }
        });

        // Piece clicks
        this.piecesGroup.addEventListener('click', (e) => {
            if (this.isAITurn) return;
            const piece = e.target.closest('.piece');
            if (piece) {
                const pos = parseInt(piece.getAttribute('data-position'));
                this.handlePositionClick(pos);
            }
        });

        // New game button
        document.getElementById('new-game-btn').addEventListener('click', () => {
            soundManager.playClick();
            this.resetGame();
        });

        // Rules button
        document.getElementById('rules-btn').addEventListener('click', () => {
            soundManager.playClick();
            document.getElementById('rules-modal').classList.add('active');
        });

        // Close rules
        document.getElementById('modal-close').addEventListener('click', () => {
            document.getElementById('rules-modal').classList.remove('active');
        });

        document.getElementById('close-rules').addEventListener('click', () => {
            soundManager.playClick();
            document.getElementById('rules-modal').classList.remove('active');
        });

        // Play again button
        document.getElementById('play-again-btn').addEventListener('click', () => {
            soundManager.playClick();
            document.getElementById('win-modal').classList.remove('active');
            this.resetGame();
        });

        // Undo button
        document.getElementById('undo-btn').addEventListener('click', () => {
            soundManager.playUndo();
            this.undo();
        });

        // Hint button
        document.getElementById('hint-btn').addEventListener('click', () => {
            soundManager.playHint();
            this.showHint();
        });

        // Sound toggle
        document.getElementById('sound-toggle').addEventListener('click', () => {
            const enabled = soundManager.toggle();
            document.querySelector('.sound-on').style.display = enabled ? 'inline' : 'none';
            document.querySelector('.sound-off').style.display = enabled ? 'none' : 'inline';
        });

        // Fullscreen toggle
        document.getElementById('fullscreen-btn').addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });

        // Game mode selector
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                soundManager.playClick();
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.gameMode = btn.dataset.mode;
                const aiDifficultyDiv = document.getElementById('ai-difficulty');
                
                if (this.gameMode === 'vs-ai') {
                    aiDifficultyDiv.style.display = 'flex';
                    document.getElementById('p2-name').textContent = 'AI';
                    document.getElementById('p2-avatar-icon').textContent = '🤖';
                    this.ai = new NavakankariAI(this, this.aiDifficulty);
                } else {
                    aiDifficultyDiv.style.display = 'none';
                    document.getElementById('p2-name').textContent = 'Player 2';
                    document.getElementById('p2-avatar-icon').textContent = '👤';
                    this.ai = null;
                }
                
                this.resetGame();
            });
        });

        // AI difficulty selector
        document.getElementById('ai-level').addEventListener('change', (e) => {
            this.aiDifficulty = e.target.value;
            if (this.ai) {
                this.ai.setDifficulty(this.aiDifficulty);
            }
        });

        // Move history toggle
        document.getElementById('toggle-history').addEventListener('click', () => {
            const content = document.getElementById('history-content');
            const toggle = document.getElementById('toggle-history');
            content.classList.toggle('collapsed');
            toggle.textContent = content.classList.contains('collapsed') ? '▲' : '▼';
        });

        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }

    handlePositionClick(pos) {
        if (this.gameOver) return;
        this.clearHint();

        if (this.mustRemove) {
            this.handleRemoval(pos);
        } else if (this.phase === 'placing') {
            this.handlePlacement(pos);
        } else if (this.phase === 'moving') {
            this.handleMovement(pos);
        }
    }

    async handlePlacement(pos) {
        if (this.board[pos] !== null) return;

        this.saveState();
        
        // Place the piece with animation
        this.board[pos] = this.currentPlayer;
        this.piecesToPlace[this.currentPlayer]--;
        this.piecesOnBoard[this.currentPlayer]++;
        this.totalMoves++;

        // Add to move log
        this.addMoveToHistory('place', pos);

        // Play sound
        soundManager.playPlace();
        
        // Render and animate
        this.renderPieces();
        this.animatePlacement(pos);

        // Check for mill
        if (this.checkForMill(pos, this.currentPlayer)) {
            this.millsFormed[this.currentPlayer]++;
            await this.animateMill(pos);
            this.mustRemove = true;
            this.highlightRemovablePieces();
            this.updateStatus(`${this.getPlayerName()} formed a mill! Remove an opponent's piece.`, '⭐');
        } else {
            this.switchPlayer();
        }

        if (this.piecesToPlace[1] === 0 && this.piecesToPlace[2] === 0 && !this.mustRemove) {
            this.phase = 'moving';
            this.updatePhaseIndicator();
        }

        this.updateUI();
        this.checkWinCondition();
        
        // Trigger AI move if applicable
        if (!this.mustRemove && !this.gameOver) {
            this.checkAITurn();
        }
    }

    async handleMovement(pos) {
        const player = this.currentPlayer;
        
        // Select own piece
        if (this.board[pos] === player) {
            soundManager.playSelect();
            this.selectedPiece = pos;
            this.validMoves = this.getValidMoves(pos);
            this.highlightValidMoves();
            this.renderPieces();
            this.updateStatus(`${this.getPlayerName()}: Select destination`, '🎯');
            return;
        }

        // Move to valid position
        if (this.selectedPiece !== null && this.board[pos] === null && this.validMoves.includes(pos)) {
            this.saveState();

            const fromPos = this.selectedPiece;
            const fromCoords = this.positions[fromPos];
            const toCoords = this.positions[pos];

            // Move the piece
            this.board[pos] = player;
            this.board[fromPos] = null;
            this.totalMoves++;

            // Add to move log
            this.addMoveToHistory('move', pos, fromPos);

            // Play sound and create trail
            soundManager.playMove();
            if (typeof particleSystem !== 'undefined') {
                particleSystem.createMoveTrail(
                    fromCoords.x, fromCoords.y,
                    toCoords.x, toCoords.y,
                    player === 1 ? '#FF9933' : '#228B22'
                );
            }

            this.selectedPiece = null;
            this.validMoves = [];
            this.clearHighlights();

            // Animate the move
            this.renderPieces();
            this.animateMovement(fromPos, pos);

            // Check for mill
            if (this.checkForMill(pos, player)) {
                this.millsFormed[player]++;
                await this.animateMill(pos);
                this.mustRemove = true;
                this.highlightRemovablePieces();
                this.updateStatus(`${this.getPlayerName()} formed a mill! Remove an opponent's piece.`, '⭐');
            } else {
                this.switchPlayer();
            }

            // Update flying phase indicator
            this.updatePhaseIndicator();

            this.updateUI();
            this.checkWinCondition();
            
            // Trigger AI move
            if (!this.mustRemove && !this.gameOver) {
                this.checkAITurn();
            }
        }
    }

    handleRemoval(pos) {
        const opponent = this.currentPlayer === 1 ? 2 : 1;
        
        if (this.board[pos] !== opponent) return;

        if (this.isPositionInMill(pos, opponent)) {
            const opponentPositions = this.getPlayerPositions(opponent);
            const allInMills = opponentPositions.every(p => this.isPositionInMill(p, opponent));
            if (!allInMills) {
                soundManager.playError();
                this.updateStatus("Cannot remove a piece that's in a mill!", '❌');
                
                // Shake animation
                gsap.to('.game-status', {
                    x: [-5, 5, -5, 5, 0],
                    duration: 0.3,
                    ease: 'power2.out'
                });
                return;
            }
        }

        const coords = this.positions[pos];

        // Remove the piece
        this.board[pos] = null;
        this.piecesOnBoard[opponent]--;
        this.capturedPieces[this.currentPlayer]++;
        
        // Add to move log
        this.addMoveToHistory('capture', pos);

        // Play sound and create effect
        soundManager.playCapture();
        if (typeof particleSystem !== 'undefined') {
            particleSystem.createCaptureEffect(
                coords.x, coords.y,
                opponent === 1 ? '#FF9933' : '#228B22'
            );
        }

        // Update captured pieces display
        this.updateCapturedPiecesDisplay();

        this.mustRemove = false;
        this.clearHighlights();

        if (this.piecesToPlace[1] === 0 && this.piecesToPlace[2] === 0) {
            this.phase = 'moving';
        }

        this.switchPlayer();
        this.renderPieces();
        this.updateUI();
        this.checkWinCondition();
        
        // Trigger AI move
        if (!this.gameOver) {
            this.checkAITurn();
        }
    }

    // Animation methods
    animatePlacement(pos) {
        const piece = this.piecesGroup.querySelector(`[data-position="${pos}"]`);
        if (piece && typeof gsap !== 'undefined') {
            gsap.fromTo(piece,
                { scale: 0, opacity: 0, transformOrigin: 'center' },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
        }
        
        // Particle effect
        const coords = this.positions[pos];
        if (typeof particleSystem !== 'undefined') {
            particleSystem.createPlaceEffect(
                coords.x, coords.y,
                this.currentPlayer === 1 ? '#FF9933' : '#228B22'
            );
        }
    }

    animateMovement(fromPos, toPos) {
        // Movement is instant, trail effect handles visual feedback
    }

    async animateMill(pos) {
        // Find which mill was formed
        const player = this.board[pos];
        const formedMill = this.mills.find(mill => {
            return mill.includes(pos) && mill.every(p => this.board[p] === player);
        });

        if (formedMill) {
            soundManager.playMill();

            // Get positions for effect
            const millPositions = formedMill.map(p => this.positions[p]);
            
            // Particle effect
            if (typeof particleSystem !== 'undefined') {
                particleSystem.createMillEffect(millPositions);
            }

            // Animate pieces in mill
            formedMill.forEach((p, i) => {
                const piece = this.piecesGroup.querySelector(`[data-position="${p}"]`);
                if (piece && typeof gsap !== 'undefined') {
                    gsap.to(piece, {
                        scale: 1.2,
                        duration: 0.2,
                        delay: i * 0.05,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power2.inOut'
                    });
                }
            });

            // Draw mill line
            this.drawMillLine(millPositions);

            await new Promise(resolve => setTimeout(resolve, 600));
        }
    }

    drawMillLine(positions) {
        this.millHighlights.innerHTML = '';
        
        if (positions.length >= 2) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('class', 'mill-line');
            line.setAttribute('x1', positions[0].x);
            line.setAttribute('y1', positions[0].y);
            line.setAttribute('x2', positions[2].x);
            line.setAttribute('y2', positions[2].y);
            this.millHighlights.appendChild(line);
            
            // Remove after animation
            setTimeout(() => {
                this.millHighlights.innerHTML = '';
            }, 1500);
        }
    }

    getValidMoves(pos) {
        const player = this.board[pos];
        if (player === null) return [];

        // Flying phase
        if (this.piecesOnBoard[player] === 3 && this.phase === 'moving') {
            return Object.keys(this.positions)
                .map(p => parseInt(p))
                .filter(p => this.board[p] === null);
        }

        return this.adjacent[pos].filter(p => this.board[p] === null);
    }

    checkForMill(pos, player) {
        return this.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.board[p] === player);
        });
    }

    isPositionInMill(pos, player) {
        return this.mills.some(mill => {
            if (!mill.includes(pos)) return false;
            return mill.every(p => this.board[p] === player);
        });
    }

    getPlayerPositions(player) {
        return Object.keys(this.board)
            .map(p => parseInt(p))
            .filter(p => this.board[p] === player);
    }

    highlightValidMoves() {
        this.clearHighlights();
        this.validMoves.forEach(pos => {
            const spot = document.querySelector(`.position-spot[data-position="${pos}"]`);
            if (spot) spot.classList.add('valid-move');
        });
    }

    highlightRemovablePieces() {
        this.clearHighlights();
        const opponent = this.currentPlayer === 1 ? 2 : 1;
        const opponentPositions = this.getPlayerPositions(opponent);
        const allInMills = opponentPositions.every(p => this.isPositionInMill(p, opponent));

        opponentPositions.forEach(pos => {
            if (allInMills || !this.isPositionInMill(pos, opponent)) {
                const spot = document.querySelector(`.position-spot[data-position="${pos}"]`);
                if (spot) spot.classList.add('can-remove');
            }
        });
    }

    clearHighlights() {
        document.querySelectorAll('.position-spot').forEach(spot => {
            spot.classList.remove('valid-move', 'can-remove');
        });
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.selectedPiece = null;
        this.validMoves = [];
        this.updateStatus(this.getStatusMessage(), this.phase === 'placing' ? '🎮' : '♟️');
    }

    getPlayerName() {
        if (this.currentPlayer === 2 && this.gameMode === 'vs-ai') {
            return 'AI';
        }
        return `Player ${this.currentPlayer}`;
    }

    getStatusMessage() {
        if (this.phase === 'placing') {
            return `${this.getPlayerName()}: Place your piece`;
        } else {
            const canFly = this.piecesOnBoard[this.currentPlayer] === 3;
            return `${this.getPlayerName()}: ${canFly ? 'Flying! Move anywhere' : 'Select a piece to move'}`;
        }
    }

    // AI Methods
    async checkAITurn() {
        if (this.gameMode !== 'vs-ai' || this.currentPlayer !== 2 || !this.ai) return;
        
        this.isAITurn = true;
        this.updateStatus('AI is thinking...', '🤔');
        
        try {
            const move = await this.ai.getBestMove();
            
            if (move) {
                if (move.type === 'place') {
                    await this.handlePlacement(move.position);
                } else if (move.type === 'move') {
                    this.selectedPiece = move.from;
                    this.validMoves = [move.to];
                    await this.handleMovement(move.to);
                } else if (move.type === 'remove') {
                    this.handleRemoval(move.position);
                }
            }
        } catch (error) {
            console.error('AI error:', error);
        }
        
        this.isAITurn = false;
    }

    // Hint System
    showHint() {
        if (this.gameOver || this.isAITurn) return;
        
        if (!this.ai) {
            this.ai = new NavakankariAI(this, 'medium');
        }
        
        const hint = this.ai.getHint();
        
        if (hint) {
            this.clearHint();
            
            if (hint.type === 'place' || hint.type === 'remove') {
                this.hintPosition = hint.position;
                
                // Highlight hint position
                const spot = document.querySelector(`.position-spot[data-position="${hint.position}"]`);
                if (spot) {
                    gsap.to(spot.querySelector('.spot-bg'), {
                        fill: '#FFD700',
                        duration: 0.3
                    });
                }
                
                // Particle effect
                const coords = this.positions[hint.position];
                if (typeof particleSystem !== 'undefined') {
                    particleSystem.createHintGlow(coords.x, coords.y);
                }
            } else if (hint.type === 'move') {
                // Highlight piece to move
                this.hintPosition = hint.from;
                this.renderPieces();
                
                // Also highlight destination
                const destSpot = document.querySelector(`.position-spot[data-position="${hint.to}"]`);
                if (destSpot) {
                    destSpot.classList.add('valid-move');
                }
                
                const coords = this.positions[hint.to];
                if (typeof particleSystem !== 'undefined') {
                    particleSystem.createHintGlow(coords.x, coords.y);
                }
            }
            
            // Clear hint after 3 seconds
            setTimeout(() => this.clearHint(), 3000);
        }
    }

    clearHint() {
        this.hintPosition = null;
        this.renderPieces();
        
        // Reset any highlighted spots
        document.querySelectorAll('.position-spot .spot-bg').forEach(bg => {
            gsap.to(bg, { fill: '#a08060', duration: 0.3 });
        });
    }

    // Move History
    addMoveToHistory(type, pos, fromPos = null) {
        const moveNum = this.moveLog.length + 1;
        let action = '';
        
        switch (type) {
            case 'place':
                action = `Placed at ${this.getPositionName(pos)}`;
                break;
            case 'move':
                action = `${this.getPositionName(fromPos)} → ${this.getPositionName(pos)}`;
                break;
            case 'capture':
                action = `Captured at ${this.getPositionName(pos)}`;
                break;
        }
        
        const isMill = type !== 'capture' && this.checkForMill(pos, this.currentPlayer);
        
        this.moveLog.push({
            number: moveNum,
            player: this.currentPlayer,
            action,
            isMill
        });
        
        this.updateMoveHistoryDisplay();
    }

    getPositionName(pos) {
        // Convert position to readable name
        const rings = ['Outer', 'Middle', 'Inner'];
        const positions = ['TL', 'T', 'TR', 'R', 'BR', 'B', 'BL', 'L'];
        
        const ring = Math.floor(pos / 8);
        const spot = pos % 8;
        
        return `${rings[ring]}-${positions[spot]}`;
    }

    updateMoveHistoryDisplay() {
        const list = document.getElementById('history-list');
        list.innerHTML = '';
        
        // Show last 10 moves
        const recentMoves = this.moveLog.slice(-10);
        
        recentMoves.forEach(move => {
            const item = document.createElement('div');
            item.className = 'history-item';
            item.innerHTML = `
                <span class="history-number">${move.number}</span>
                <span class="history-player p${move.player}"></span>
                <span class="history-action ${move.isMill ? 'mill' : ''}">${move.action}${move.isMill ? ' ⭐' : ''}</span>
            `;
            list.appendChild(item);
        });
        
        // Scroll to bottom
        list.scrollTop = list.scrollHeight;
    }

    updateCapturedPiecesDisplay() {
        // Player 1's captured pieces (green pieces they captured)
        const p1Captured = document.getElementById('p1-captured-pieces');
        p1Captured.innerHTML = '';
        for (let i = 0; i < this.capturedPieces[1]; i++) {
            const piece = document.createElement('div');
            piece.className = 'captured-piece green';
            p1Captured.appendChild(piece);
        }
        
        // Player 2's captured pieces (saffron pieces they captured)
        const p2Captured = document.getElementById('p2-captured-pieces');
        p2Captured.innerHTML = '';
        for (let i = 0; i < this.capturedPieces[2]; i++) {
            const piece = document.createElement('div');
            piece.className = 'captured-piece saffron';
            p2Captured.appendChild(piece);
        }
    }

    updatePhaseIndicator() {
        document.querySelectorAll('.phase-step').forEach(step => {
            step.classList.remove('active');
        });
        
        let activePhase = this.phase;
        if (this.phase === 'moving' && 
            (this.piecesOnBoard[1] === 3 || this.piecesOnBoard[2] === 3)) {
            activePhase = 'flying';
        }
        
        const activeStep = document.querySelector(`.phase-step[data-phase="${activePhase}"]`);
        if (activeStep) {
            activeStep.classList.add('active');
        }
    }

    checkWinCondition() {
        if (this.phase !== 'moving') return;

        const opponent = this.currentPlayer === 1 ? 2 : 1;
        
        if (this.piecesOnBoard[opponent] < 3) {
            this.endGame(this.currentPlayer === 1 ? 2 : 1, 'Opponent has fewer than 3 pieces');
            return;
        }

        const opponentPositions = this.getPlayerPositions(this.currentPlayer);
        const canMove = opponentPositions.some(pos => this.getValidMoves(pos).length > 0);

        if (!canMove && !this.mustRemove) {
            this.endGame(this.currentPlayer === 1 ? 2 : 1, 'Opponent cannot make any moves');
        }
    }

    endGame(winner, reason) {
        this.gameOver = true;
        
        // Play win sound for human, lose if AI won
        if (this.gameMode === 'vs-ai') {
            if (winner === 1) {
                soundManager.playWin();
            } else {
                soundManager.playLose();
            }
        } else {
            soundManager.playWin();
        }
        
        // Update modal
        const winnerName = (winner === 2 && this.gameMode === 'vs-ai') ? 'AI' : `Player ${winner}`;
        document.getElementById('winner-text').textContent = `${winnerName} Wins!`;
        document.getElementById('win-reason').textContent = reason;
        document.getElementById('win-moves').textContent = this.totalMoves;
        document.getElementById('win-mills').textContent = this.millsFormed[1] + this.millsFormed[2];
        
        // Celebration effect
        if (typeof particleSystem !== 'undefined') {
            particleSystem.createWinCelebration();
        }
        
        // Show modal with delay for effects
        setTimeout(() => {
            document.getElementById('win-modal').classList.add('active');
        }, 500);
        
        this.updateStatus(`Game Over! ${winnerName} wins!`, '🏆');
    }

    updateUI() {
        document.getElementById('p1-to-place').textContent = this.piecesToPlace[1];
        document.getElementById('p1-on-board').textContent = this.piecesOnBoard[1];
        document.getElementById('p1-captured').textContent = this.capturedPieces[1];
        
        document.getElementById('p2-to-place').textContent = this.piecesToPlace[2];
        document.getElementById('p2-on-board').textContent = this.piecesOnBoard[2];
        document.getElementById('p2-captured').textContent = this.capturedPieces[2];

        const p1Turn = document.getElementById('p1-turn');
        const p2Turn = document.getElementById('p2-turn');
        
        if (this.currentPlayer === 1) {
            p1Turn.classList.remove('inactive');
            p2Turn.classList.add('inactive');
        } else {
            p1Turn.classList.add('inactive');
            p2Turn.classList.remove('inactive');
        }

        document.getElementById('undo-btn').disabled = this.moveHistory.length === 0 || this.isAITurn;
        document.getElementById('hint-btn').disabled = this.gameOver || this.isAITurn;
        
        // Animate stat changes
        if (typeof gsap !== 'undefined') {
            gsap.from('.stat-value', {
                scale: 1.2,
                duration: 0.2,
                ease: 'back.out(1.7)'
            });
        }
    }

    updateStatus(text, icon = '🎮') {
        this.statusText.textContent = text;
        this.statusIcon.textContent = icon;
        
        // Animate status change
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.game-status',
                { scale: 0.95, opacity: 0.8 },
                { scale: 1, opacity: 1, duration: 0.2, ease: 'back.out(1.7)' }
            );
        }
    }

    saveState() {
        this.moveHistory.push({
            board: { ...this.board },
            currentPlayer: this.currentPlayer,
            phase: this.phase,
            piecesToPlace: { ...this.piecesToPlace },
            piecesOnBoard: { ...this.piecesOnBoard },
            capturedPieces: { ...this.capturedPieces },
            mustRemove: this.mustRemove,
            millsFormed: { ...this.millsFormed },
            totalMoves: this.totalMoves
        });

        if (this.moveHistory.length > 20) {
            this.moveHistory.shift();
        }
    }

    undo() {
        if (this.moveHistory.length === 0 || this.isAITurn) return;

        const state = this.moveHistory.pop();
        this.board = state.board;
        this.currentPlayer = state.currentPlayer;
        this.phase = state.phase;
        this.piecesToPlace = state.piecesToPlace;
        this.piecesOnBoard = state.piecesOnBoard;
        this.capturedPieces = state.capturedPieces;
        this.mustRemove = state.mustRemove;
        this.millsFormed = state.millsFormed;
        this.totalMoves = state.totalMoves;
        this.selectedPiece = null;
        this.validMoves = [];
        this.gameOver = false;

        this.clearHighlights();
        if (this.mustRemove) {
            this.highlightRemovablePieces();
        }

        // Remove last move from log
        if (this.moveLog.length > 0) {
            this.moveLog.pop();
            this.updateMoveHistoryDisplay();
        }

        this.updateCapturedPiecesDisplay();
        this.updatePhaseIndicator();
        this.renderPieces();
        this.updateUI();
        this.updateStatus(this.getStatusMessage());
    }

    resetGame() {
        // Reset state
        this.board = {};
        for (let i = 0; i < 24; i++) {
            this.board[i] = null;
        }
        
        this.currentPlayer = 1;
        this.phase = 'placing';
        this.piecesToPlace = { 1: 9, 2: 9 };
        this.piecesOnBoard = { 1: 0, 2: 0 };
        this.capturedPieces = { 1: 0, 2: 0 };
        this.selectedPiece = null;
        this.validMoves = [];
        this.mustRemove = false;
        this.gameOver = false;
        this.moveHistory = [];
        this.moveLog = [];
        this.millsFormed = { 1: 0, 2: 0 };
        this.totalMoves = 0;
        this.isAITurn = false;
        this.hintPosition = null;

        // Reset AI if in AI mode
        if (this.gameMode === 'vs-ai') {
            this.ai = new NavakankariAI(this, this.aiDifficulty);
        }

        // Clear displays
        this.clearHighlights();
        this.millHighlights.innerHTML = '';
        document.getElementById('history-list').innerHTML = '';
        document.getElementById('p1-captured-pieces').innerHTML = '';
        document.getElementById('p2-captured-pieces').innerHTML = '';
        
        this.updatePhaseIndicator();
        this.renderPieces();
        this.updateUI();
        this.updateStatus('Player 1: Place your piece', '🎮');
        
        soundManager.playNewGame();
        
        // Clear any particles
        if (typeof particleSystem !== 'undefined') {
            particleSystem.clear();
        }
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.game = new NavakankariGame();
});
