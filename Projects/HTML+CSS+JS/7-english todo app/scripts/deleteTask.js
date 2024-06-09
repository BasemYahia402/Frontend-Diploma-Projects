import { inputTaskElement } from "./Elements";
import { initTaskList } from "./initProgram";
import { fetchTasks, saveTasks, showCountTask } from "./utils";

export const deleteTask = (index) => {
  const tasks = fetchTasks("Tasks");
  inputTaskElement.value = "";
  tasks.splice(index, 1);
  saveTasks("Tasks", tasks);
  showCountTask(tasks);
  initTaskList(tasks);
};
