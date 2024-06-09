import { inputTaskElement } from "./Elements";
import { initTaskList } from "./initProgram";
import { fetchTasks, saveTasks } from "./utils";

export const deleteTask = (index) => {
  const tasks = fetchTasks("Tasks");
  inputTaskElement.value = "";
  tasks.splice(index, 1);
  saveTasks("Tasks", tasks);
  initTaskList(tasks);
};
