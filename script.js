const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".sign");
const evaluate = document.querySelector(".evaluate");

let displayText = "";
let num1 = "";
let num2 = "";
let operator;
let turn = true;


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


function operate(a, b, sign) {
    let ans;
    if (sign == "+") {
        ans = add(a, b);
    }
    else if (sign == "-") {
        ans = subtract(a, b);
    }
    else if (sign == "×") {
        ans = multiply(a, b);
    }
    if (sign == "÷") {
        if (b == 0) {
            return "NOT ALLOWED, PLEASE CLEAR";
        }
        ans = divide(a, b);
    }
    return ans;
}

clearButton.addEventListener("click", () => {
    displayText = "";
    num1 = "";
    num2 = "";
    display.innerHTML = "0";
    turn = true;
});

evaluate.addEventListener("click", () => {
    if (num1 == "" || num2 == "") {
        alert("ERROR");
    }
    num1Converted = Number(num1);
    num2Converted = Number(num2);
    num1 = operate(num1Converted, num2Converted, operator);
    num1.toString();
    num2 = "";
    displayText = num1;
    display.innerHTML = displayText;
    turn = true;
});

digits.forEach(function(button) {
    button.addEventListener("click", function() {
        if (turn) {
            num1 += this.innerHTML;
            displayText += this.innerHTML;
        } else {
            num2 += this.innerHTML;
            displayText += this.innerHTML;
        }
        display.innerHTML = displayText;
    });
});

operators.forEach(function(button) {
    button.addEventListener("click", function() {
        if (turn) {
            operator = this.innerHTML;
            displayText += " " + operator + " ";
            display.innerHTML = displayText;
            turn = false;
        }
        else {
            num1Converted = Number(num1);
            num2Converted = Number(num2);
            num1 = operate(num1Converted, num2Converted, operator);
            num1.toString();
            num2 = "";
            operator = this.innerHTML;
            displayText = num1 + " " + operator + " ";
            display.innerHTML = displayText;
            turn = false;
        }
    });
});
