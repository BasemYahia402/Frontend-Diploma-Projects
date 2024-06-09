import {
  getBtnActiveElement,
  btnAddElement,
  getBtnAllElement,
  getBtnClearElement,
  getBtnCompleteElement,
  btnDarkThemeElement,
  inputTaskElement,
} from "./Elements";
import { addTask } from "./addTask";
import { initDataOnSatartup } from "./initProgram";
import {
  clearCompleteTask,
  showActiveTask,
  showAllTask,
  showCompleteTask,
  toggleDarkMode,
} from "./utils";

initDataOnSatartup();

btnDarkThemeElement.addEventListener("click", toggleDarkMode);

btnAddElement.addEventListener("click", (event) => {
  event.preventDefault();
  addTask(inputTaskElement.value);
  inputTaskElement.value = "";
});

getBtnAllElement()?.forEach((btn) => {
  btn.addEventListener("click", () => {
    showAllTask();
    btn.classList.add("active");
    getBtnActiveElement()?.forEach((btn) => btn.classList.remove("active"));
    getBtnCompleteElement()?.forEach((btn) => btn.classList.remove("active"));
  });
});
getBtnActiveElement()?.forEach((btn) => {
  btn.addEventListener("click", () => {
    showActiveTask();
    btn.classList.add("active");
    getBtnAllElement()?.forEach((btn) => btn.classList.remove("active"));
    getBtnCompleteElement()?.forEach((btn) => btn.classList.remove("active"));
  });
});
getBtnCompleteElement()?.forEach((btn) => {
  btn.addEventListener("click", () => {
    showCompleteTask();
    btn.classList.add("active");
    getBtnAllElement()?.forEach((btn) => btn.classList.remove("active"));
    getBtnActiveElement()?.forEach((btn) => btn.classList.remove("active"));
  });
});
getBtnClearElement()?.forEach((btn) => {
  btn.addEventListener("click", clearCompleteTask);
});
