const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousScreen = document.querySelector('[data-previous]');
const currentScreen = document.querySelector('[data-current]');

let currentOutput = [];

function appearOnCurrentScreen() {

    let buttonPressed = this.value;
    
    currentOutput.push(buttonPressed);
    console.log(currentOutput);
   
    let currentOutputJoined = currentOutput.join('');
    console.log(currentOutputJoined);

    currentScreen.innerHTML = currentOutputJoined;
    
}

function allClear() {
    currentScreen.innerHTML = '';
    currentOutput = [];   
}

for (let number of numberButtons) {
    number.addEventListener('click', appearOnCurrentScreen)
}

allClearButton.addEventListener('click', allClear)