function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let operand1 = "";
let operand2 = "";
let operator = ""
let operatorClicked = false;
let display = document.getElementById('displayText');
function doMath(num1, num2, operatorValue) {
    let solution;
    if (operatorValue === '+') {
        solution = add(num1, num2);
    }
    else if (operatorValue === '-') {
        solution = subtract(num1, num2);
    }
    else if (operatorValue === '*') {
        solution = multiply(num1, num2);
    }
    else if (operatorValue === '/') {
        solution = divide(num1, num2);
    }
    operand1 = solution;
    operand2 = '';
    operator = '';
    operatorClicked = false;
    display.textContent = operand1;
    document.querySelector('.active').classList.remove('active');
}
function whatClicked(event) {
    targetClass = event.target.className;
    targetValue = event.target.value;
    console.log(targetClass, targetValue)
    if (targetClass === 'operator' && targetValue !== '=') {
        event.target.classList.add('active')
        operator = targetValue;
        operatorClicked = true;
    }
    else if (targetClass === 'operator' && targetValue === '=') {
        doMath(operand1, operand2, operator);
    }
    else if (targetClass === 'operand' && !operatorClicked) {
        operand1 += targetValue;
        display.textContent = operand1;
    }
    else if (targetClass === 'operand' && operatorClicked) {
        operand2 += targetValue;
        display.textContent = operand2;
    }
    else if (targetClass === 'clear') {
        operand1 = "";
        operand2 = "";
        operator = "";
        display.textContent = '0';
    }
    console.log(operand1 + operator + operand2);
}
const buttons = document.querySelectorAll('button');
console.log(buttons);
let clicked;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', whatClicked)
}

