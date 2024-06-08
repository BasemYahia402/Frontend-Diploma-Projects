const calculateResult = (currentNumber, storeNumber, operation) => {
  if (currentNumber && storeNumber && operation) {
    switch (operation) {
      case "+":
        storeNumber = parseFloat(storeNumber) + parseFloat(currentNumber);
        break;
      case "-":
        storeNumber = parseFloat(storeNumber) - parseFloat(currentNumber);
        break;
      case "/":
        storeNumber = parseFloat(storeNumber) / parseFloat(currentNumber);
        break;
      case "*":
        storeNumber = parseFloat(storeNumber) * parseFloat(currentNumber);
        break;
    }
    currentNumber = "";
    updateScreen(storeNumber);
  }
};

const updateScreen = (value) => {
  const calcResult = document.querySelector(".calc__result");
  let formattedValue = "";
  if (value && value !== "-") {
    formattedValue = parseFloat(value).toLocaleString("en");
  }
  calcResult.innerText = !formattedValue ? "0" : formattedValue;
};

export { calculateResult, updateScreen };
