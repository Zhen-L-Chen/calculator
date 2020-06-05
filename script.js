/* basic arithmetic operations */

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

function operate(a, operator, b){
    if(operator === '+'){
        add(a, b);
    }else if(operator === '-'){
        substract(a, b);
    }else if(operator === 'x'){
        multiply(a, b);
    }else if(operator === '/'){
        divide(a, b);
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
let singleOne = 0;

function single(e){
    let a = e.target.innerText;
    console.log(a);
    this.singleOne = a;
};

answers.addEventListener('click', single);

console.log(singleOne);