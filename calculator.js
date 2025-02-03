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

//calls function based on given operand
function operate(num1, num2, operand) {
    if (operand === "+")
    {
        return add(num1, num2);
    }

    else if (operand === "-")
    {
        return subtract(num1, num2);
    }

    else if (operand === "*")
    {
        return multiply(num1, num2);
    }

    else
    {
        return divide(num1, num2);
    }
}

//represent each part of an operation
let num1 = 10, num2 = 2, operand = "*";

console.log(operate(num1, num2, operand))





