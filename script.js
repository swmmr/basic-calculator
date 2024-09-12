function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

let num1;
let num2;
let operator;

function operate(a, b, sign) {
    if (sign == "+") {
        add(a, b);
    }
    else if (sign == "-") {
        subtract(a, b);
    }
    else if (sign == "*") {
        multiply(a, b);
    }
    if (sign == "/") {
        divide(a, b);
    }
}