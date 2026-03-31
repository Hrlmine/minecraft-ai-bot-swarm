class AIConsensus {
    constructor(bots) {
        this.bots = bots; // Array of bot instances
        this.tasks = [];
    }

    proposeTask(task) {
        this.tasks.push(task);
        console.log(`Task proposed: ${task}`);
    }

    voteOnTask(task) {
        const votes = this.bots.map(bot => bot.vote(task));
        const voteCount = votes.reduce((acc, vote) => {
            acc[vote] = (acc[vote] || 0) + 1;
            return acc;
        }, {});

        const approved = voteCount[true] || 0;
        const rejected = voteCount[false] || 0;
        console.log(`Votes for task '${task}': ${approved} approved, ${rejected} rejected`);

        return approved > rejected;
    }

    assignTask(task) {
        if (this.voteOnTask(task)) {
            this.bots.forEach(bot => bot.assign(task));
            console.log(`Task '${task}' assigned to bots.`);
        } else {
            console.log(`Task '${task}' rejected by the bots.`);
        }
    }
}

// Example usage:
// const bots = [new Bot(), new Bot()];
// const consensus = new AIConsensus(bots);
// consensus.proposeTask('Gather resources');
// consensus.assignTask('Gather resources');