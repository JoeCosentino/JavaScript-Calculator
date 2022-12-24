const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousScreen = document.querySelector('[data-previous]');
const currentScreen = document.querySelector('[data-current]');

currentOutput = [];

function appearOnCurrentScreen() {
    console.log('number has been clicked');
    let x = this.value;
    currentOutput.push(x);
    console.log(currentOutput);

    const currentOutputJoined = currentOutput.join('');
    console.log(currentOutputJoined);

    currentScreen.innerHTML = currentOutputJoined;
}

function allClear() {
    console.log('all clear');
}

for (let number of numberButtons) {
    number.addEventListener('click', appearOnCurrentScreen)
}

allClearButton.addEventListener('click', allClear)