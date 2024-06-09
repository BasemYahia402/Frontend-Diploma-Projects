import { appElement, taskListElement } from "./Elements";
import checkmark from "../assets/icon-checkmark.svg";
import deleteIcon from "../assets/icon-basket.svg";
import editeIcon from "../assets/pen-to-square-solid.svg";
import EmptyList__img from "../assets/icon-empty.svg";
const renderTaskList = (tasks) => {
  taskListElement.innerHTML = "";
  tasks.forEach((task) => {
    taskListElement.innerHTML += `
    <li class="TaskList__taskContent${
      task.isCompleted ? " TaskList__taskContent--isActive" : ""
    } ">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="${checkmark}" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>
          ${task.value}
        </p>
        <img src="${deleteIcon}"
             class='TaskList__deleteIcon'
             alt="basket-icon"
        />
        <img src="${editeIcon}"
             class='TaskList__editeIcon'
             alt="edite-icon"
        />
      </div>
    </li>`;
  });
};

const fetchTasks = (key) => {
  const tasks = localStorage.getItem(key);
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasks = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const toggleDarkMode = () => {
  appElement.classList.toggle("App--isDark");
  saveTasks("isDarkMode", appElement.classList.contains("App--isDark"));
};

const renderEmptyState = () => {
  taskListElement.innerHTML = `<li class='EmptyList'>
      <img class='EmptyList__img' src="${EmptyList__img}" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>`;
};

export {
  renderTaskList,
  fetchTasks,
  saveTasks,
  toggleDarkMode,
  renderEmptyState,
};
