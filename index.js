const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let input = '';
let operator = '';
let operand1 = '';
let operand2 = '';

for (let button of buttons) {
  button.addEventListener('click', function() {
    if (button.id === 'clear') {
      input = '';
      operator = '';
      operand1 = '';
      operand2 = '';
      updateDisplay();
    } 
  });
}

function updateDisplay() {
  display.textContent = input;
}