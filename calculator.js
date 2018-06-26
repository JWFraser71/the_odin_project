var num1 = 0;
var num2 = 0;
var oper = '';
var answer = 0;

var number = document.getElementById('inputOutput');

var operatorSelection = document.querySelectorAll('.operator');
operatorSelection.forEach((operand) => {
    operand.addEventListener('click', (e) => {
        if (operand.id === "multiply") {
            oper = '*';
            num1 = parseInt(number.value);
            number.value = ''
        } else if (operand.id === "divide") {
            oper = '/';
            num1 = parseInt(number.value);
            number.value = ''
        } else if (operand.id === "add") {
            oper = '+';
            num1 = parseInt(number.value);
            number.value = ''
        } else if (operand.id === "subtract") {
            oper = '-';
            num1 = parseInt(number.value);
            number.value = ''
        }
    });
});

function clearScreen() {
    num1 = 0;
    num2 = 0;
    number.value = '';
    oper = '';
}

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;

}

function multi(num1, num2){
    return num1 * num2;

}

function divide(num1, num2){
    return num1 / num2;

}

function operate(answer) {
    number.value = answer;

}