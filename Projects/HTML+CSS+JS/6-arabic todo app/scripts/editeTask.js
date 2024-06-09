import { inputTaskElement } from "./Elements";
import { initTaskList } from "./initProgram";
import { fetchTasks, saveTasks } from "./utils";

export const editeTask = (index) => {
  const tasks = fetchTasks("Tasks");
  inputTaskElement.value = tasks[index].value;
  inputTaskElement.focus();
  tasks.splice(index, 1);
  saveTasks("Tasks", tasks);
  initTaskList(tasks);
};
