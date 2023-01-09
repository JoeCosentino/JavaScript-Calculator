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
    } else if (button.id === 'delete') {
      input = input.substring(0, input.length - 1);
      updateDisplay();
    } else if (button.id === 'add' || button.id === 'subtract' || button.id === 'multiply' || button.id === 'divide') {
      operator = button.id;
      operand1 = input;
      input = '';
      updateDisplay();
    } else if (button.id === 'equals') {
      operand2 = input;
      let result = '';
      switch (operator) {
        case 'add':
          result = parseFloat(operand1) + parseFloat(operand2);
          break;
        case 'subtract':
          result = parseFloat(operand1) - parseFloat(operand2);
          break;
        case 'multiply':
          result = parseFloat(operand1) * parseFloat(operand2);
          break;
        case 'divide':
          result = parseFloat(operand1) / parseFloat(operand2);
          break;
      }
      input = result.toString();
      operator = '';
      operand1 = '';
      operand2 = '';
      updateDisplay();
    } else {
      input += button.textContent;
      updateDisplay();
    } 
  });
}

function updateDisplay() {
  display.textContent = input;
}