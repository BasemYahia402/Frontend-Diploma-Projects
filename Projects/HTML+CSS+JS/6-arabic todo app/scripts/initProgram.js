import {
  getBtnsDeleteElement,
  getBtnsEditeElement,
  getCheckboxElements,
  popupBtnClose,
  popupBtnNo,
  popupBtnYes,
} from "./Elements";
import { closePopup, executeNo, showPopup } from "./PopUp";
import { checkedTask } from "./checkedTask";
import { deleteTask } from "./deleteTask";
import { editeTask } from "./editeTask";
import {
  fetchTasks,
  renderEmptyState,
  renderTaskList,
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
  } else {
    renderEmptyState();
  }
};

const initTaskListener = () => {
  const handlePopup = (message, yesCallback) => {
    showPopup(message);

    const handlePopupClose = () => {
      closePopup();
      cleanupEventListeners();
    };

    const handlePopupYes = () => {
      yesCallback();
      closePopup();
      cleanupEventListeners();
    };

    const handlePopupNo = () => {
      executeNo();
      cleanupEventListeners();
    };

    const cleanupEventListeners = () => {
      popupBtnClose.removeEventListener("click", handlePopupClose);
      popupBtnYes.removeEventListener("click", handlePopupYes);
      popupBtnNo.removeEventListener("click", handlePopupNo);
    };

    // Add the event listeners
    popupBtnClose.addEventListener("click", handlePopupClose);
    popupBtnYes.addEventListener("click", handlePopupYes);
    popupBtnNo.addEventListener("click", handlePopupNo);
  };
  
getBtnsDeleteElement()?.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    handlePopup("هل انت متاكد من حذف هذة المهمة؟", () => {
      deleteTask(index);
    });
  });
});

getBtnsEditeElement()?.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    handlePopup("هل انت متاكد من تعديل هذة المهمة؟", () => {
      editeTask(index);
    });
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
