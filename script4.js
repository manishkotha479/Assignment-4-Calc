let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = "First Number: " + num1;
document.getElementById("num2-el").textContent = "Second Number: " + num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let sum = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}

function subtract() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let difference = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + difference;
}

function divide() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let quotient = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + quotient;
}

function multiply() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let product = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + product;
}
