// Calculator Animation Script

// Function to create and append the calculator
function createCalculator() {
    const calculatorContainer = document.getElementById("calculator-container");

    // Create calculator elements
    const calculator = document.createElement("div");
    calculator.id = "calculator";
    calculator.innerHTML = `
        <input type="text" id="display" readonly>
        <div id="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToDisplay('/')">/</button>
        </div>
    `;

    // Append calculator to the container
    calculatorContainer.appendChild(calculator);
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to append a value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to calculate the result
function calculateResult() {
    const displayValue = document.getElementById("display").value;

    try {
        const result = eval(displayValue);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Create the calculator when the page loads
document.addEventListener("DOMContentLoaded", function () {
    createCalculator();
});
