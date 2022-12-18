class Calculator {
    constructor(previousScreen, currentScreen) {
        this.previousScreen = previousScreen;
        this.currentScreen = currentScreen;
    }

    clear() {
        this.currentScreen = '';
        this.previousScreen = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousScreen = document.querySelector('[data-previous]');
const currentScreen = document.querySelector('[data-current]');