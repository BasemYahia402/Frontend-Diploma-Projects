import { fetchTasks, saveTasks } from "./utils";

export const checkedTask = (e, index) => {
  const tasks = fetchTasks("Tasks");
  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive"
  );
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasks("Tasks", tasks);
};
