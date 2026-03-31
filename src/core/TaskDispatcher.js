class TaskDispatcher {
    constructor() {
        this.workers = [];
        this.tasks = [];
    }

    registerWorker(worker) {
        this.workers.push(worker);
    }

    addTask(task) {
        this.tasks.push(task);
        this.dispatchTasks();
    }

    dispatchTasks() {
        while (this.tasks.length > 0 && this.workers.length > 0) {
            const task = this.tasks.shift();
            const worker = this.workers.shift();
            worker.executeTask(task);
        }
    }
}

module.exports = TaskDispatcher;
