class BaseBot {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }

    think() {
        return `I am thinking...`;
    }

    act() {
        return `I am acting...`;
    }
}

module.exports = BaseBot;