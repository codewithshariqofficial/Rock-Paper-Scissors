const Game = {
    choices: {
        rock: { emoji: '✊', beats: 'scissors' },
        paper: { emoji: '✋', beats: 'rock' },
        scissors: { emoji: '✌️', beats: 'paper' }
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
    },

    cacheDOM() {
        this.playerChoiceEl = document.getElementById('player-choice');
        this.aiChoiceEl = document.getElementById('ai-choice');
        this.resultTextEl = document.getElementById('result-text');
        this.choiceBtns = document.querySelectorAll('.btn-choice');
        this.resetBtn = document.getElementById('reset-btn');
    },

    bindEvents() {
        this.choiceBtns.forEach(btn => {
            btn.addEventListener('click', () => this.playRound(btn.dataset.choice));
        });

        this.resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all statistics?')) {
                Stats.reset();
            }
        });
    },

    getRandomMove() {
        const keys = Object.keys(this.choices);
        return keys[Math.floor(Math.random() * keys.length)];
    },

    getWinner(player, ai) {
        if (player === ai) return 'draw';
        return this.choices[player].beats === ai ? 'player' : 'ai';
    },

    playRound(playerMove) {
        const aiMove = this.getRandomMove();
        const winner = this.getWinner(playerMove, aiMove);

        this.updateUI(playerMove, aiMove, winner);
        this.updateStats(winner);
    },

    updateUI(playerMove, aiMove, winner) {
        // Update Icons
        this.playerChoiceEl.textContent = this.choices[playerMove].emoji;
        this.aiChoiceEl.textContent = this.choices[aiMove].emoji;

        // Add Animation
        [this.playerChoiceEl, this.aiChoiceEl].forEach(el => {
            el.classList.remove('animate-pop');
            void el.offsetWidth; // Trigger reflow
            el.classList.add('animate-pop');
        });

        // Update Text
        this.resultTextEl.className = 'result-message';
        if (winner === 'player') {
            this.resultTextEl.textContent = `You Win! ${this.choices[playerMove].emoji} beats ${this.choices[aiMove].emoji}`;
            this.resultTextEl.classList.add('win');
        } else if (winner === 'ai') {
            this.resultTextEl.textContent = `AI Wins! ${this.choices[aiMove].emoji} beats ${this.choices[playerMove].emoji}`;
            this.resultTextEl.classList.add('loss');
        } else {
            this.resultTextEl.textContent = "It's a Draw!";
            this.resultTextEl.classList.add('draw');
        }
    },

    updateStats(winner) {
        if (winner === 'player') Stats.recordWin();
        else if (winner === 'ai') Stats.recordLoss();
        else Stats.recordDraw();
    }
};

// Start the game
document.addEventListener('DOMContentLoaded', () => Game.init());
