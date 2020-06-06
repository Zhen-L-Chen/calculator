/* basic arithmetic operations */
let firstNum = "";
let secondNum = "";
let temporaryNum = "";
let operator = "";



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
    return a / b;
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
const calBody = document.querySelector('.answers');
function initButtons(num){
    for(let i = 0; i < num; i++){
        const newDiv = document.createElement("button");
        newDiv.textContent = `${i}`;
        newDiv.className = `btn${i}`;
        calBody.appendChild(newDiv);
    }
}

initButtons(10);

let answers = document.querySelector('.answers');

function single(e){
    temporaryNum += e.target.innerText;
    console.log(temporaryNum);
}; 

answers.addEventListener('click', single);

function updateOp(e){
    operator = e.target.innerText;
    firstNum = temporaryNum;
    temporaryNum = "";
};

let operating = document.querySelector('.operator');

operating.addEventListener('click', updateOp);

function equal(e){
    secondNum = temporaryNum;
    let a = Number(firstNum);
    let b = Number(secondNum);
    let result = operate(operator, a, b);
    firstNum = "";
    secondNum = "";
    temporaryNum = "";
};

let equality = document.querySelector('.equality');
equality.addEventListener('click', equal);