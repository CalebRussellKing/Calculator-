let inputField = document.getElementById("input"); // Reference to the input field
let currentInput = "", storedValue = "", operator = ""; // Variables to store input and operations

// Function to handle number button clicks
function button_number(button) {
    currentInput += button; // Append clicked number to current input
    updateDisplay();
}

// Function to store selected operator
function showSelectedOperator(op) {
    if (!currentInput) return; // Do nothing if input is empty
    storedValue = currentInput; // Store current input
    operator = op; // Store selected operator
    currentInput = ""; // Clear input for next number
    updateDisplay();
}

// Function to calculate the expression
function calculate() {
    if (!storedValue || !currentInput) return; // Do nothing if inputs are missing
    currentInput = eval(storedValue + operator + currentInput).toString(); // Evaluate and convert to string
    storedValue = operator = ""; // Reset stored values
    updateDisplay();
}

// Function to clear all inputs
function clear_all() {
    currentInput = storedValue = operator = ""; // Reset all values
    updateDisplay();
}

// Function to remove the last digit
function backspace() {
    currentInput = currentInput.slice(0, -1); // Remove last character
    updateDisplay();
}

// Function to update the display field
function updateDisplay() {
    inputField.value = currentInput; // Update input field with current input
}

