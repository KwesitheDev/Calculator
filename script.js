let operand1;
let operand2;
let operator;

//Operate function

function operate(operand1, operand2, operator) {
    operator = String(operator)
    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return sub(operand1, operand2);
        case '*':
            return mul(operand1, operand2);
        case '/':
            return div(operand1, operand2);
        default:
            console.log("Invalid operand or operator" + operator);
            return null;
    }
}

function add(para1, para2){
    return para1 + para2;
    
}

function sub(para1, para2){
    return para1 - para2;
    
}

function mul(para1, para2){
    
    return para1 * para2;
    
}

function div(para1, para2){
      
    if (para2 === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return para1/para2;
    
}

// populate display function.
let displayValue = '';
 function populateDisplay(){
    const display = document.querySelector(".display");
    display.textContent = displayValue;
 }

 function numberClick(value){
    displayValue += value;
    populateDisplay();
 }

const numberButtons = document.querySelectorAll('.btn:not(.operator):not(#clear):not(#equals)');
numberButtons.forEach(button => {
    button.addEventListener('click', () => numberClick(button.textContent));
});

//Clear buttonn
const clear = document.querySelector("#clear");
clear.addEventListener('click', () =>{
    displayValue = ''; // Reset display
    populateDisplay(); // Update the display
})
