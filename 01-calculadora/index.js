const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

const inputFirstValue = $(".first-value");
const inputDisplay = byId("output-display");
const btnOperator = $$(".btn-operator");
const btnNumber = $$(".btn-number");
const btnPointer = $(".btn-pointer");
const btnClear = byId("btn-clear");
const btnResult = byId("btn-result");
const btnDelete = byId("btn-delete");

btnClear.addEventListener("click", () => {
  clear();
});

btnDelete.addEventListener("click", () => {
  inputDisplay.value = inputDisplay.value.slice(0, -1);
});

btnNumber.forEach((boton) => {
  boton.addEventListener("click", () => {
    inputDisplay.value += boton.textContent;
  });
});

btnOperator.forEach((boton) => {
  boton.addEventListener("click", () => {
    inputDisplay.value += boton.textContent;
    inputFirstValue.textContent = inputDisplay.value;
    inputDisplay.value = "";
  });
});

btnPointer.addEventListener("click", () => {
  if (!inputDisplay.value.includes(".")) {
    inputDisplay.value += btnPointer.textContent;
  }
});

btnResult.addEventListener("click", () => {
  operator = inputFirstValue.textContent.slice(-1);
  first = parseFloat(inputFirstValue.textContent);
  last = parseFloat(inputDisplay.value);
  switch (operator) {
    case "+":
      res = addition(first, last);
      break;
    case "-":
      res = subtract(first, last);
      break;
    case "*":
      res = multiplication(first, last);
      break;
    case "/":
      res = division(first, last);
      break;
    case "^":
      res = pow(first, last);
      break;
    case "√":
      res = squareRoot(first);
      break;
    default:
      return;
  }
  clear();
  inputDisplay.value = res;
});

function clear() {
  inputDisplay.value = "";
  inputFirstValue.textContent = "";
}

function addition(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function pow(a, b) {
  if (a === 0 && b === 0) return "Error valor indefinido";
  if (b === 0) return 1;
  return Math.pow(a, b);
}
