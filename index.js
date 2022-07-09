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
    if (num2 === '0') {
        return 'Nope. Press AC'
    }
    else {
        return parseFloat((num1 / num2).toFixed(5));
    }
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
    if (targetClass === 'operator' && operatorClicked && targetValue !== '=') {
        doMath(operand1, operand2, operator);
        operator = targetValue;
        event.target.classList.add('active');
        operatorClicked = true;
    }
    else if (targetClass === 'operator' && targetValue !== '=') {
        event.target.classList.add('active');
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
        document.querySelector('.active').classList.remove('active');
    }
    else if (targetClass === 'delete') {
        let newNum;
        if (operatorClicked === false) {
            //remove last character from operand1 update display
            newNum = operand1.slice(0, -1);
            operand1 = newNum;
            display.textContent = operand1;
        }
        else if (operatorClicked === true) {
            //last character from operand2 and update
            newNum = operand2.slice(0, -1);
            operand2 = newNum;
            display.textContent = operand2;
        }
    }
    else if (targetClass === 'sign') {
        let newNum;
        if (operatorClicked === false) {
            if (operand1[0] === '-') {
                newNum = operand1.substring(1);
                operand1 = newNum;
                display.textContent = operand1;
            }
            else if (operand1[0] !== '-') {
                newNum = '-' + operand1;
                operand1 = newNum;
                display.textContent = operand1;
            }
        }
        else if (operatorClicked === true) {
            if (operand2[0] === '-') {
                newNum = operand2.substring(1);
                operand2 = newNum;
                display.textContent = operand2;
            }
            else if (operand2[0] !== '-') {
                newNum = '-' + operand2;
                operand2 = newNum;
                display.textContent = operand2;
            }
        }
    }
    console.log(operand1 + operator + operand2);
}
const buttons = document.querySelectorAll('button');
console.log(buttons);
let clicked;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', whatClicked)
}

