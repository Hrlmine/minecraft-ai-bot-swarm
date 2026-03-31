class BotManager {
    constructor() {
        this.bots = [];
        this.leader = null;
    }

    addBot(bot) {
        this.bots.push(bot);
    }

    setLeader(bot) {
        this.leader = bot;
    }

    coordinate() {
        if (!this.leader) {
            console.log('No leader set.');
            return;
        }
        this.bots.forEach(bot => {
            if (bot !== this.leader) {
                this.leader.command(bot);
            }
        });
    }
} 

module.exports = BotManager;