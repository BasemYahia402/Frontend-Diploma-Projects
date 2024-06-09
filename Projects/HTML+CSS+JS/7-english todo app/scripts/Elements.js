const btnDarkThemeElement = document.querySelector(".App--theme");
const btnIconMoonElement = document.querySelector(".moon");
const btnIconSunElement = document.querySelector(".sun");
const imgSectionElement = document.getElementById("image-section");
const mainElement = document.querySelector("main");
const btnAddElement = document.querySelector(".TaskSearchBar__button");
const inputTaskElement = document.querySelector(".taskInput");
const taskListElement = document.querySelector(".TasksList");
const taskCountElement = document.querySelector(".count__tasks");
const getcheckboxImgElements = () =>
  document.querySelectorAll(".TaskList__checkboxImg");
const getcircleElements = () => document.querySelectorAll(".circle");

const getBtnAllElement = () => document.querySelectorAll(".btn-all");
const getBtnActiveElement = () => document.querySelectorAll(".btn-active");
const getBtnCompleteElement = () => document.querySelectorAll(".btn-complete");
const getBtnClearElement = () => document.querySelectorAll(".btn-clear");

const getBtnsDeleteElement = () =>
  document.querySelectorAll(".TaskList__deleteIcon");
const getCheckboxElements = () =>
  document.querySelectorAll(".TaskList__checkbox");
const getTasksElements = () =>
  document.querySelectorAll(".TaskList__taskContent");

export {
  btnDarkThemeElement,
  mainElement,
  btnAddElement,
  inputTaskElement,
  taskListElement,
  taskCountElement,
  btnIconMoonElement,
  btnIconSunElement,
  imgSectionElement,
  getcheckboxImgElements,
  getcircleElements,
  getBtnAllElement,
  getBtnActiveElement,
  getBtnCompleteElement,
  getBtnClearElement,
  getBtnsDeleteElement,
  getCheckboxElements,
  getTasksElements,
};
