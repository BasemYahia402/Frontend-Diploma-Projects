const btnDarkThemeElement = document.querySelector(".toggle__checkbox");
const appElement = document.querySelector(".App");
const btnAddElement = document.querySelector(".TaskSearchBar__button");
const inputTaskElement = document.querySelector(".TaskSearchBar__input");
const taskListElement = document.querySelector(".TaskList__list");
const taskListLink = document.querySelector(".TaskList__link");
const PopUpElement = document.querySelector("#popup");
const PopUpElementMessage = document.querySelector("#popup-message");
const popupBtnClose = document.querySelector(".popup__close");
const popupBtnYes = document.querySelector(".popup--yes");
const popupBtnNo = document.querySelector(".popup--no");
const getBtnsDeleteElement = () =>
  document.querySelectorAll(".TaskList__deleteIcon");
const getBtnsEditeElement = () =>
  document.querySelectorAll(".TaskList__editeIcon");
const getCheckboxElements = () =>
  document.querySelectorAll(".TaskList__checkbox");

export {
  btnDarkThemeElement,
  appElement,
  btnAddElement,
  inputTaskElement,
  taskListElement,
  taskListLink,
  PopUpElementMessage,
  PopUpElement,
  popupBtnClose,
  popupBtnYes,
  popupBtnNo,
  getBtnsDeleteElement,
  getCheckboxElements,
  getBtnsEditeElement,
};
