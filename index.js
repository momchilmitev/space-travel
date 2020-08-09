let htmlSelectors = {
	operands: document.querySelectorAll('.calc-operand'),
	operators: document.querySelectorAll('.calc-operator'),
	'decimal-point': document.querySelector('.calc-decimal-point'),
	remove: document.querySelector('.calc-remove'),
	reset: document.querySelector('.calc-result--reset-btn'),
	equals: document.querySelector('.calc-equals'),
	'result-final': document.querySelector('.calc-result--final'),
	'result-progress': document.querySelector('.calc-result--progress'),
};

let firstOperand = '';
let firstIsSelected = false;
let secondOperand = '';
let operator = '';

let allOperandBtns = htmlSelectors['operands'];
let allOperatorBtns = htmlSelectors['operators'];
let decimalPointBtn = htmlSelectors['decimal-point'];
let equalsBtn = htmlSelectors['equals'];
let removeBtn = htmlSelectors['remove'];
let resetBtn = htmlSelectors['reset'];
for (let index = 0; index < allOperandBtns.length; index++) {
	let operandBtn = allOperandBtns[index];

	operandBtn.addEventListener('click', operandClickListenerHandler);
}
for (let index = 0; index < allOperatorBtns.length; index++) {
	let operatorBtn = allOperatorBtns[index];

	operatorBtn.addEventListener('click', operatorClickListenerHandler);
}
decimalPointBtn.addEventListener('click', decimalPointClickListenerHandler);
equalsBtn.addEventListener('click', equalsClickListenerHandler);
removeBtn.addEventListener('click', removeSymbolClickListenerHandler);
resetBtn.addEventListener('click', resetClickListenerHandler);

function operandClickListenerHandler(e) {
	let selectedOperand = e.target.textContent;
	let resultFinalDiv = htmlSelectors['result-final'];

	if (!firstIsSelected) {
		firstOperand += selectedOperand;
		resultFinalDiv.textContent = firstOperand;
	} else {
		secondOperand += selectedOperand;
		resultFinalDiv.textContent = secondOperand;
	}
}

function operatorClickListenerHandler(e) {
	let selectedOperator = e.target.getAttribute('data-target');
	let resultProgressDiv = htmlSelectors['result-progress'];

	if (firstOperand !== '') {
		if (selectedOperator === 'add') {
			operator = '+';
		} else if (selectedOperator === 'subtract') {
			operator = '-';
		} else if (selectedOperator === 'multiply') {
			operator = '*';
		} else {
			operator = '/';
		}

		resultProgressDiv.textContent = firstOperand + operator;
		firstIsSelected = true;
	}
}

function decimalPointClickListenerHandler() {
	let resultFinalDiv = htmlSelectors['result-final'];

	if (firstOperand !== '' && !firstOperand.includes('.')) {
		firstOperand += '.';
		resultFinalDiv.textContent += '.';
	}

	if (secondOperand !== '' && !secondOperand.includes('.')) {
		secondOperand += '.';
		resultFinalDiv.textContent += '.';
	}
}

function removeSymbolClickListenerHandler() {
	let finalResultDiv = htmlSelectors['result-final'];

	if (!firstIsSelected) {
		let newFirstOperand = '';

		for (let i = 0; i < firstOperand.length - 1; i++) {
			newFirstOperand += firstOperand[i];
		}

		firstOperand = newFirstOperand;
		if (firstOperand === '') {
			finalResultDiv.textContent = 0;
		} else {
			finalResultDiv.textContent = firstOperand;
		}
	} else {
		let newSecondOperand = '';

		for (let i = 0; i < secondOperand.length - 1; i++) {
			newSecondOperand += secondOperand[i];
		}

		secondOperand = newSecondOperand;
		if (secondOperand === '') {
			finalResultDiv.textContent = 0;
		} else {
			finalResultDiv.textContent = secondOperand;
		}
	}
}

function equalsClickListenerHandler() {
	let resultProgressDiv = htmlSelectors['result-progress'];
	let resultFinalDiv = htmlSelectors['result-final'];

	if (firstOperand !== '' && secondOperand !== 0) {
		let firstNumber = Number(firstOperand);
		let secondNumber = Number(secondOperand);
		let sum = 0;

		switch (operator) {
			case '+':
				sum = firstNumber + secondNumber;
				break;
			case '-':
				sum = firstNumber - secondNumber;
				break;
			case '*':
				sum = firstNumber * secondNumber;
				break;
			case '/':
				sum = firstNumber / secondNumber;
				break;
		}

		resultProgressDiv.textContent = `${firstNumber} ${operator} ${secondNumber}`;

		if (Number.isInteger(sum)) {
			resultFinalDiv.textContent = sum;
		} else {
			resultFinalDiv.textContent = sum.toFixed(2);
		}
	}
}

function resetClickListenerHandler() {
	let resultProgressDiv = htmlSelectors['result-progress'];
	let resultFinalDiv = htmlSelectors['result-final'];

	firstOperand = '';
	firstIsSelected = false;
	secondOperand = '';
	operator = '';

	resultProgressDiv.textContent = 0;
	resultFinalDiv.textContent = 0;
}
