const currentNumber = document.querySelector('.current-number');

const previousNumber = document.querySelector('.previous-number p');
const mathSign = document.querySelector('.math-sign');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn');


let result = '';


function displayNumbers () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'
    currentNumber.innerHTML += this.textContent;
}
function operate () {

}

function showResult () {

}
function clearScreen () {

}
function clearHistory () {

}


//Listener buttons

operatorsButtons.forEach((button) => button.addEventListener('click', operate));
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers));
historyBtn.addEventListener('click', clearHistory);