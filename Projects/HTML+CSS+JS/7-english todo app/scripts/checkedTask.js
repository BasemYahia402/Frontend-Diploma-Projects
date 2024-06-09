import { fetchTasks, saveTasks, showCountTask } from "./utils";

const checkedTask = (e, index) => {
  e.target.classList.toggle("TaskList__checkboxImg--isChecked");
  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive"
  );

  const tasks = fetchTasks("Tasks");
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasks("Tasks", tasks);
  showCountTask(tasks);
};
export default checkedTask;
