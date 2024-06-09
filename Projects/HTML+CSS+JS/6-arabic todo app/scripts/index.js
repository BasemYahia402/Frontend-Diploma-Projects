import {
  btnAddElement,
  btnDarkThemeElement,
  inputTaskElement,
  taskListElement,
  taskListLink,
} from "./Elements";
import { addTask } from "./addTask";
import { initDataOnSatartup } from "./initProgram";
import { fetchTasks, toggleDarkMode } from "./utils";

initDataOnSatartup();

btnDarkThemeElement.addEventListener("click", toggleDarkMode);
btnAddElement.addEventListener("click", (event) => {
  event.preventDefault();
  addTask(inputTaskElement.value);
  inputTaskElement.value = "";
});

taskListLink.addEventListener("click", () => {
  const tasks = fetchTasks("Tasks");
  const hasCompletedTasks = tasks.some((task) => task.isCompleted);
  if (hasCompletedTasks) {
    taskListElement?.classList.toggle("TaskList__list--hideCompleted");
    taskListLink?.classList.toggle("TaskList__link--isActive");
  }
});
