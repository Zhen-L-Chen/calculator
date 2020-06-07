/* basic arithmetic operations */
let firstNum = "";
let secondNum = "";
let temporaryNum = "";
let operator = "";
let tempOp = "";

function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    if(b !== 0){
        return a / b;  
    }else{
        return 'cannot divide by 0';
    }
}

function operate(operator, a, b){
    if(operator === '+'){
        return add(a, b);
    }else if(operator === '-'){
        return substract(a, b);
    }else if(operator === 'x'){
        return multiply(a, b);
    }else if(operator === '/'){
        return divide(a, b);
    }else{
        return 'syntax error'
    }
}

/* DOM calculator buttons */
const calBody = document.querySelector('.buttons');
function initButtons(num){
    for(let i = 0; i < num; i++){
        const newDiv = document.createElement("button");
        newDiv.textContent = `${i}`;
        newDiv.className = `btn${i}`;
        calBody.appendChild(newDiv);
    }
}
/* intialize the buttons with the numbers*/
initButtons(10);

/* update input live*/
let buttons = document.querySelector('.buttons');
let answers = document.querySelector('.answers');

function single(e){
    temporaryNum += e.target.innerText;
    answers.textContent = temporaryNum;
}; 

buttons.addEventListener('click', single);

function updateTempNum(){
    if(firstNum === ""){
        firstNum = temporaryNum;
    }else{
        a = Number(firstNum);
        b = Number(temporaryNum);
        firstNum = operate(tempOp, a, b);
    }
}

/* temporary number, first number updated when an operator is clicked on*/
function updateOp(e){
    if(operator === ""){
        operator = e.target.innerText;
        updateTempNum();
    }else{
        tempOp = operator;
        operator = e.target.innerText
        updateTempNum();
    }
    temporaryNum = "";
};

let operating = document.querySelector('.operator');

operating.addEventListener('click', updateOp);

/*compute results when the equal sign is clicked on*/
function equal(e){
    secondNum = temporaryNum;
    let a = Number(firstNum);
    let b = Number(secondNum);
    let result = operate(operator, a, b);
    answers.textContent = result;
    firstNum = "";
    secondNum = "";
    temporaryNum = "";
};

let equality = document.querySelector('.equality');
equality.addEventListener('click', equal);