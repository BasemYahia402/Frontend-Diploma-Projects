import { saveTasks, fetchTasks} from "./utils";
import { initTaskList } from "./initProgram";
const addTask = (taskValue) => {
  if (taskValue === "") return;

  const task = {
    value: taskValue,
    isCompleted: false,
  };

  const tasks = fetchTasks("Tasks");
  tasks.push(task);
  saveTasks("Tasks", tasks);
  initTaskList(tasks);
};

export { addTask };
