import { getDaysInMonth } from "./util.js";

// Select inputs, button, and result elements
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector("button");
const resultYear = document.querySelector(".Year");
const resultMonth = document.querySelector(".Month");
const resultDay = document.querySelector(".Day");

// Add event listeners
submitButton.addEventListener("click", handleSubmit);
inputElements.forEach((item, index, array) => {
  item.addEventListener("keydown", (event) =>
    handleEnterKey(event, index, array)
  );
});

function handleSubmit(event) {
  event.preventDefault();
  calculateAge(
    parseInt(inputDay.value),
    parseInt(inputMonth.value),
    parseInt(inputYear.value)
  );
}

function handleEnterKey(event, index, array) {
  if (event.key === "Enter") {
    event.preventDefault();
    const nextIndex = (index + 1) % array.length;
    array[nextIndex].focus();
    if (index === array.length - 1) {
      submitButton.click();
    }
  }
}

function calculateAge(day, month, year) {
  if (!validateInputs(day, month, year)) return;

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let ageYear = currentYear - year;
  let ageMonth = currentMonth - month;
  let ageDay = currentDay - day;

  // Handle negative age values
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth += 12;
  }
  if (ageDay < 0) {
    const daysInLastMonth = getDaysInMonth(currentMonth - 1, currentYear);
    ageDay += daysInLastMonth;
    ageMonth--;
  }
  if (ageYear < 0) {
    showError(inputYear);
    return;
  }

  clearError(inputYear);
  displayResult(ageYear, ageMonth, ageDay);
}

function validateInputs(day, month, year) {
  const regexDay = /^([1-9]|[12][0-9]|3[01])$/;
  const regexMonth = /^([1-9]|1[0-2])$/;
  const regexYear = /^\d{4}$/;
  const daysInMonth = getDaysInMonth(month, year);

  if (!regexDay.test(day) || day > daysInMonth) {
    showError(inputDay);
    return false;
  }
  clearError(inputDay);

  if (!regexMonth.test(month)) {
    showError(inputMonth);
    return false;
  }
  clearError(inputMonth);

  if (!regexYear.test(year)) {
    showError(inputYear);
    return false;
  }
  clearError(inputYear);

  return true;
}

function showError(inputElement) {
  inputElement.classList.add("card__input--error");
}

function clearError(inputElement) {
  inputElement.classList.remove("card__input--error");
}

function displayResult(year, month, day) {
  resultYear.textContent = year;
  resultMonth.textContent = month;
  resultDay.textContent = day;
}
