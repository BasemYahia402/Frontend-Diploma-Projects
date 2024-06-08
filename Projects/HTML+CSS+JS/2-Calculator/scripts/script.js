import { calculateResult, updateScreen } from "./util.js";

// all declaration
const themesToggle = document.querySelector(".themes__toggle");
const keys = document.querySelectorAll(".calc__key");

let storeNumber = "";
let currentNumber = "";
let operation = "";

// Light and Dark Themes
const toggleDarkTheme = () =>
  themesToggle.classList.toggle("themes__toggle--isActive");

const toggleDarkThemeEnter = (event) =>
  event.key === "Enter" && toggleDarkTheme();

themesToggle.addEventListener("keydown", toggleDarkThemeEnter);
themesToggle.addEventListener("click", toggleDarkTheme);

// add number to screen
keys.forEach((button) => {
  button.addEventListener("click", () => keyHandler(button));
});

const keyHandler = (button) => {
  const keyValue = button.dataset.value;
  const keyType = button.dataset.type;

  if (keyType === "operation") return processOperator(keyValue);
  numberButtonHandler(keyValue);
};

const numberButtonHandler = (number) => {
  if (number === "." && currentNumber.includes(".")) return;
  if (number === "0" && !currentNumber) return;

  if (currentNumber.length < 16) {
    currentNumber += number;
    return updateScreen(currentNumber);
  }
};

// Logic for operations
const processOperator = (operator) => {
  switch (operator) {
    case "r":
      resetButtonHandler();
      break;
    case "Backspace":
      deleteButtonHandler();
      break;
    case "Enter":
      calculateResult(currentNumber, storeNumber, operation);
      break;
    default:
      operationButtonHandler(operator);
      break;
  }
};

const resetButtonHandler = () => {
  storeNumber = "";
  currentNumber = "";
  operation = "";
  updateScreen(currentNumber);
};

const deleteButtonHandler = () => {
  if (currentNumber) {
    currentNumber = currentNumber.slice(0, -1);
    updateScreen(currentNumber);
  } else {
    storeNumber = storeNumber.toString().slice(0, -1);
    updateScreen(storeNumber);
  }
};

const operationButtonHandler = (operator) => {
  if (!currentNumber && !storeNumber) return;
  if (currentNumber && !storeNumber) {
    storeNumber = currentNumber;
    currentNumber = "";
    operation = operator;
  } else if (storeNumber) {
    if (currentNumber) calculateResult(currentNumber, storeNumber, operation);
  }
};

// Use keyboard as input source
const avialableNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const avialableOperations = ["+", "-", "*", "/"];
const allAvialbleKeys = [
  ...avialableNumbers,
  ...avialableOperations,
  "Backspace",
  ,
  "Enter",
  "r",
];
window.addEventListener("keydown", (event) => {
  keyBoard(event.key);
});

const keyBoard = (key) => {
  if (allAvialbleKeys.includes(key)) {
    const keyButton = document.querySelector(`[data-value="${key}"]`);
    keyButton.classList.add("hover");
    keyButton.click();
    setTimeout(() => keyButton.classList.remove("hover"), 300);
  }
};
