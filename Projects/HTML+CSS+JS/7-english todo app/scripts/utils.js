import {
  mainElement,
  btnIconMoonElement,
  btnIconSunElement,
  taskListElement,
  imgSectionElement,
  taskCountElement,
} from "./Elements";
import checkmark from "../images/icon-check.svg";
import deleteIcon from "../images/icon-cross.svg";
import { initTaskList } from "./initProgram";
import lightImg from "../images/bg-desktop-light.jpg";
import darkImg from "../images/bg-desktop-dark.jpg";

const renderTaskList = (tasks) => {
  taskListElement.innerHTML = "";
  tasks.forEach((task) => {
    taskListElement.innerHTML += `
    <li class=" d-flex TaskList__taskContent${
      task.isCompleted ? " TaskList__taskContent--isActive" : ""
    } " draggable="true">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg${
          task.isCompleted ? " TaskList__checkboxImg--isChecked" : ""
        }' src="${checkmark}" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>
          ${task.value}
        </p>
      </div>
            <img src="${deleteIcon}"
             class='TaskList__deleteIcon'
             alt="basket-icon"
      />
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
  mainElement.classList.toggle("App--isDark");
  document.body.classList.toggle("App--isDark");

  if (btnIconMoonElement.classList.contains("hide")) {
    btnIconMoonElement.classList.remove("hide");
    btnIconSunElement.classList.add("hide");
    btnIconMoonElement.classList.add("rotate");
    imgSectionElement.style.backgroundImage = `url(${lightImg})`;
  } else {
    btnIconMoonElement.classList.add("hide");
    btnIconSunElement.classList.remove("hide");
    btnIconSunElement.classList.add("rotate");
    imgSectionElement.style.backgroundImage = `url(${darkImg})`;
  }
  saveTasks("isDarkMode", mainElement.classList.contains("App--isDark"));
};

const renderEmptyState = (Message) => {
  taskListElement.innerHTML = `<li class='EmptyList'>
      <p class="tasksMessage">${Message}</p>
    </li>`;
};

const showCountTask = (Tasks) => {
  let count = Tasks.length;
  Tasks.forEach((task) => {
    if (task.isCompleted) {
      if (count) --count;
    }
  });
  taskCountElement.innerHTML = `${count} items left`;
};

const showAllTask = () => {
  const tasks = fetchTasks("Tasks");
  initTaskList(tasks);
};

const showActiveTask = () => {
  const tasks = fetchTasks("Tasks");
  const activeTasks = tasks.filter((task) => !task.isCompleted);
  initTaskList(activeTasks);
};

const showCompleteTask = () => {
  const tasks = fetchTasks("Tasks");
  const CompleteTasks = tasks.filter((task) => task.isCompleted);
  initTaskList(CompleteTasks);
};

const clearCompleteTask = () => {
  const tasks = fetchTasks("Tasks");
  const filteredTasks = tasks.filter((task) => !task.isCompleted);
  saveTasks("Tasks", filteredTasks);
  initTaskList(filteredTasks);
};

export {
  renderTaskList,
  fetchTasks,
  saveTasks,
  toggleDarkMode,
  renderEmptyState,
  showCountTask,
  showAllTask,
  showActiveTask,
  showCompleteTask,
  clearCompleteTask,
};
