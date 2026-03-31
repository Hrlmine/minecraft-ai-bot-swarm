class LeaderBot {
    constructor() {
        this.workers = [];
    }

    addWorker(worker) {
        this.workers.push(worker);
    }

    removeWorker(worker) {
        this.workers = this.workers.filter(w => w !== worker);
    }

    coordinateTasks(task) {
        this.workers.forEach(worker => {
            // Assign the task to the worker
            worker.performTask(task);
        });
    }

    getWorkerStatus() {
        return this.workers.map(worker => worker.getStatus());
    }
}

module.exports = LeaderBot;