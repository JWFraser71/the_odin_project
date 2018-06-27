var num1;
var num2;
var oper;
var answer;

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

var numberCalculation = document.getElementById('equal');
numberCalculation.addEventListener('click', (e) => {
    if (number.value == typeof('number')) {
        num2 = parseInt(number.value);
        number.value = '';
        operate(num1, num2, oper);
    }
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
function displayResults(answer) {
    number.value = answer;
}

function operate(num1, num2, oper) {
    if (oper == '-') {
        answer = sub(num1, num2);
    } else if (oper == '+') {
        answer = add(num1, num2);
    } else if (oper = '*') {
        answer = multi(num1, num2);
    } else if (oper = '/') {
        answer = divide(num1, num2);
    }
    displayResults(answer);
    
}