import { getBtnsDeleteElement, getCheckboxElements } from "./Elements";
import checkedTask from "./checkedTask";
import { deleteTask } from "./deleteTask";
import dragAndDrop from "./draganddrop";
import {
  fetchTasks,
  renderEmptyState,
  renderTaskList,
  showCountTask,
  toggleDarkMode,
} from "./utils";

const initDataOnSatartup = () => {
  fetchTasks("isDarkMode") && toggleDarkMode();
  initTaskList(fetchTasks("Tasks"));
};

const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTaskList(tasks);
    initTaskListener();
    showCountTask(tasks);
    dragAndDrop();
  } else {
    renderEmptyState("No tasks yet...");
  }
};

const initTaskListener = () => {
  getBtnsDeleteElement()?.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      deleteTask(index);
    });
  });

  getCheckboxElements()?.forEach((box, index) => {
    box.addEventListener("click", (e) => checkedTask(e, index));
    box.addEventListener(
      "keydown",
      (e) => e.key === "Enter" && checkedTask(e, index)
    );
  });
};
export { initDataOnSatartup, initTaskList, initTaskListener };
