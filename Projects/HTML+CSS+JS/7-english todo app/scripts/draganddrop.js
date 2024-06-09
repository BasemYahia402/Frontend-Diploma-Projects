import { getTasksElements, taskListElement } from "./Elements";

const dragAndDrop = () => {
  let dragItem = null;
  let originalPosition = null;

  getTasksElements()?.forEach((task) => {
    // Function to handle drag start
    const handleDragStart = (event) => {
      dragItem = task;
      originalPosition = Array.from(task.parentNode.children).indexOf(task);
      task.style.opacity = "0.5";

      // For touch devices, preventDefault to avoid triggering unwanted scrolling
      if (event.type === "touchstart") {
        event.preventDefault();
      }
    };

    // Function to handle drag end
    const handleDragEnd = () => {
      dragItem = null;
      task.style.opacity = "1";
    };

    // Function to handle drag over
    const handleDragOver = (event) => {
      event.preventDefault();
    };

    // Function to handle drop
    const handleDrop = (event) => {
      event.preventDefault();
      const dropTarget = event.currentTarget;
      if (dragItem && dropTarget !== dragItem) {
        const newPosition = Array.from(dropTarget.parentNode.children).indexOf(
          dropTarget
        );
        if (originalPosition < newPosition) {
          dropTarget.parentNode.insertBefore(dragItem, dropTarget.nextSibling);
        } else {
          dropTarget.parentNode.insertBefore(dragItem, dropTarget);
        }
      }
    };

    // Add event listeners for drag events
    task.addEventListener("dragstart", handleDragStart);
    task.addEventListener("dragend", handleDragEnd);
    task.addEventListener("dragover", handleDragOver);
    task.addEventListener("drop", handleDrop);

  });
};

export default dragAndDrop;
