// CraftingTask.js

class CraftingTask {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }

    execute() {
        // Logic to craft the item
        console.log(`Crafting ${this.quantity} of ${this.item}`);
    }
}

module.exports = CraftingTask;