// Enter a description of this program here.
//Simple Calculator
/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */

const calculator = {
  add: function add(a, b) {
    return Number(a) + Number(b);
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  remainder: function remainder(a, b) {
    return a % b;
  }
};

console.log(calculator.add(1, 2));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(num1.value, num2.value, select.value);
});
