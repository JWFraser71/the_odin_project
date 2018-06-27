var num1;
var num2;
var oper;
var answer;

var number = document.getElementById('inputOutput');

var allNumbers = document.querySelectorAll('.number');
allNumbers.forEach((eachNumber) => {
    eachNumber.addEventListener('click', (e) => {
        if (eachNumber.id == 'one') {
            number.value +='1';
        } else if (eachNumber.id == 'two') {
            number.value +='2';
        } else if (eachNumber.id == 'three') {
            number.value +='3';
        } else if (eachNumber.id == 'four') {
            number.value +='4';
        } else if (eachNumber.id == 'five') {
            number.value +='5';
        } else if (eachNumber.id == 'six') {
            number.value +='6';
        } else if (eachNumber.id == 'seven') {
            number.value +='7';
        } else if (eachNumber.id == 'eight') {
            number.value +='8';
        } else if (eachNumber.id == 'nine') {
            number.value +='9';
        } else if (eachNumber.id == 'zero') {
            number.value +='0';
        }
    });
});

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
    num2 = parseInt(number.value);
    number.value = '';
    operate(num1, num2, oper);
});

var clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', (e) => {
    clearScreen();
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
    } else if (oper == '*') {
        answer = multi(num1, num2);
    } else if (oper == '/') {
        answer = divide(num1, num2);
    }
    displayResults(answer);
    
}