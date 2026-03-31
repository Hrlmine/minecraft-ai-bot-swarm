class WorkerBot {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    assignTask(task) {
        this.tasks.push(task);
    }

    executeTasks() {
        while (this.tasks.length > 0) {
            const task = this.tasks.shift();
            console.log(`${this.name} executing task: ${task}`);
            // Logic to execute the task
        }
    }
}

// Example usage:
const bot1 = new WorkerBot('Bot1');
bot1.assignTask('Collect resources');
bot1.assignTask('Build shelter');
bot1.executeTasks();
