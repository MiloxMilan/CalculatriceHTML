///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////By Milox (MIlan)////////////////
//https://github.com/MiloxMilan/calcultriceHTML ///
///////////////////////////////////////////////////




const display = document.querySelector('.display');

function addValue(value) {
    display.innerHTML += value;
}

function addSquare() {
    display.innerHTML += "^2";
}

function addSquareRoot() {
    display.innerHTML += "√(";
}

function logarithm() {
    display.innerHTML += "log(";
}

function erase() {
    let value = display.innerHTML;
    value = value.substring(0, value.length - 1);
    display.innerHTML = value;
}

function calculate() {
    let expression = display.innerHTML;

    // Replace ^2 with **2 for exponentiation
    expression = expression.replace(/\^2/g, '**2');

    // Handle square root
    expression = expression.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');

    // Handle logarithm
    expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');

    let result = eval(expression);
    display.innerHTML = result;
}

function clearScreen() {
    display.innerHTML = '';
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case '0': addValue(0); break;
        case '1': addValue(1); break;
        case '2': addValue(2); break;
        case '3': addValue(3); break;
        case '4': addValue(4); break;
        case '5': addValue(5); break;
        case '6': addValue(6); break;
        case '7': addValue(7); break;
        case '8': addValue(8); break;
        case '9': addValue(9); break;
        case '+': addValue('+'); break;
        case '-': addValue('-'); break;
        case '/': addValue('/'); break;
        case 'x': addValue('*'); break;
        case '(': addValue('('); break;
        case ')': addValue(')'); break;
        case '.': addValue('.'); break;
        case 'Backspace': erase(); break;
        case '=': calculate(); break;
        case 'Enter': calculate(); break;
    }
});
