let operand1 = null;
let operand2 = null;
let operator = null;
let displayValue = ''; // Variable to store the current display value

let waitingForSecondOperand = false; // To track when the second operand is being entered

// Function to update the display
function populateDisplay() {
    const display = document.querySelector(".display");
    display.textContent = displayValue;
}

// Function to handle number button clicks
function numberClick(value) {
    if (waitingForSecondOperand) {
        displayValue = value; // Start a new number for the second operand
        waitingForSecondOperand = false;
    } else {
        displayValue += value; // Append clicked number to displayValue
    }
    populateDisplay();
}

// Function to handle operator button clicks
function operatorClick(value) {
    if (operand1 === null) {
        operand1 = parseFloat(displayValue); // Store the first operand
    } else if (operator) {
        operand2 = parseFloat(displayValue); // Store the second operand
        let result = operate(operand1, operand2, operator); // Perform the calculation
        displayValue = String(result); // Update the display with the result
        operand1 = result; // Store the result as the first operand for the next calculation
    }
    operator = value; // Store the selected operator
    waitingForSecondOperand = true; // Prepare to accept the second operand
    populateDisplay();
}

// Function to handle equals button
function equalsClick() {
    if (operator !== null && operand1 !== null) {
        operand2 = parseFloat(displayValue); // Store the second operand
        let result = operate(operand1, operand2, operator); // Perform the calculation
        displayValue = String(result); // Display the result
        operand1 = result; // Set the result as the first operand for the next calculation
        operator = null; // Clear the operator
        waitingForSecondOperand = true; // Wait for new input for the next calculation
        populateDisplay();
    }
}

// Event listeners for number buttons
const numberButtons = document.querySelectorAll('.btn:not(.operator):not(#clear):not(#equals)');
numberButtons.forEach(button => {
    button.addEventListener('click', () => numberClick(button.textContent));
});

// Event listeners for operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => operatorClick(button.textContent));
});

// Event listener for the equals button
document.getElementById('equals').addEventListener('click', () => equalsClick());

// Clear button functionality
document.getElementById('clear').addEventListener('click', () => {
    displayValue = ''; // Reset display
    operand1 = null;
    operand2 = null;
    operator = null;
    waitingForSecondOperand = false;
    populateDisplay(); // Update the display
});

// Operate function to calculate results
function operate(operand1, operand2, operator) {
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
            console.log("Invalid operator: " + operator);
            return null;
    }
}

// Basic operations
function add(para1, para2) {
    return para1 + para2;
}

function sub(para1, para2) {
    return para1 - para2;
}

function mul(para1, para2) {
    return para1 * para2;
}

function div(para1, para2) {
    if (para2 === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return para1 / para2;
}

/* had code fixed by an AI hence the plenty comments, */