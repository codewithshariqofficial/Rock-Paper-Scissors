const Stats = {
    data: {
        wins: 0,
        losses: 0,
        draws: 0
    },

    init() {
        const savedStats = localStorage.getItem('rps_stats');
        if (savedStats) {
            this.data = JSON.parse(savedStats);
        }
        this.updateUI();
    },

    save() {
        localStorage.setItem('rps_stats', JSON.stringify(this.data));
        this.updateUI();
    },

    recordWin() {
        this.data.wins++;
        this.save();
    },

    recordLoss() {
        this.data.losses++;
        this.save();
    },

    recordDraw() {
        this.data.draws++;
        this.save();
    },

    reset() {
        this.data = {
            wins: 0,
            losses: 0,
            draws: 0
        };
        this.save();
    },

    updateUI() {
        document.getElementById('wins').textContent = this.data.wins;
        document.getElementById('losses').textContent = this.data.losses;
        document.getElementById('draws').textContent = this.data.draws;
    }
};

// Initialize stats when the script loads
Stats.init();
