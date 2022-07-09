function add(num1, num2) {
    return num1 + num2;
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

function operate(operator) {

}

function whatClicked() {
    clicked = buttons[i].value;
    console.log(clicked);
}
const buttons = document.querySelectorAll('button');
console.log(buttons);
let clicked;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {clicked = event.target.value; console.log(clicked)})
}