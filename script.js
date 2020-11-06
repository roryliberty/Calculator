const calculator = {
    displayValue: '0',
    firstNum: null,
    waitingForSecondNum: null,
    operator: null,
}

const keys = document.querySelector(".buttons");

function updateDisplay() {
    const display = document.querySelector('.screen');

    if (calculator.displayValue === '0') {
        calculator.displayValue = '';
    }
    
    display.value = calculator.displayValue;
}

function inputDigit(digit) {
    if (calculator.waitingForSecondNum === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondNum = false;
    }   else {
        calculator.displayValue = calculator.displayValue + digit;
    }
}

function handleOperator(newOperator) {
    const inputValue = parseFloat(calculator.displayValue);

    if (calculator.firstNum === 'null' && !isNaN(inputValue)) {
        calculator.firstNum = inputValue;
    }   else if (calculator.operator) {
        const result = calculate(calculator.firstNum, inputValue, calculator.operator);

				calculator.displayValue = String(result);
				calculator.firstNum = result;
    }

    calculator.waitingForSecondNum = true;
    calculator.operator = newOperator;
    console.log(calculator);
}

function calculate(firstNum, secondNum, operator) {
    if (operator === '+') {
        return firstNum + secondNum;
    }   else if (operator === '-') {
        return firstNum - secondNum;
    }   else if (operator === 'x') {
        return firstNum * secondNum;
    }   else if (operator === '/') {
        return firstNum / secondNum;
    }

    return secondNum;
}

function clearCalc() {
    calculator.displayValue = '0';
    calculator.firstNum = null;
    calculator.waitingForSecondNum = null;
    calculator.operator = null;
}

keys.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        console.log(calculator.firstNum);
        console.log(calculator.operator);
        return;
    }

    if (target.classList.contains('digit')) {
        inputDigit(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear-btn')) {
        clearCalc();
        updateDisplay();
    }
});