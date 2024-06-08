const btnNotesElement = document.querySelector(".btn__Notes");
const btnAddNoteElement = document.querySelector("#btn__add");
const btnAddPinnedNoteElement = document.querySelector("#btn__add__pined");

const containerNotesElement = document.querySelector(".container__Notes");
const containerShowNoteElement = document.querySelector(".Note__item");
const containerShowElement = document.querySelector(".container__show__note");
const containerAddNoteElement = document.querySelector(".container__add__note");

const searchElement = document.querySelector(".search");
const btnMenuBarElement = document.querySelector(".bars__menu");
const btnCloseSearchElement = document.querySelector(".search__close");
const btnCloseAsideElement = document.querySelector(".bars__close");
const btnSearchElement = document.querySelector(".search__btn");
const btnAsideAddNoteElement = document.querySelector("#aside__btn__add");
const btn2AddNoteElement = document.querySelector("#btn2_add");
const btnLeftArrowElement = document.querySelector(".left__arrow");

const asideAppElement = document.querySelector("#Aside__App");
const asideNotesElement = document.querySelector(".Aside__Note");

const noteAppElement = document.querySelector("#noteSection");
const notesItemsElement = document.querySelector(".Notes__items");
const notesPinnedElement = document.querySelector(".pinned__Notes__items");

const inputTitleElement = document.querySelector("#title");
const inputAuthorElement = document.querySelector("#Author");
const inputContentElement = document.querySelector("#content");

const getInputSearchElements = () =>
  document.querySelectorAll(".search__input input");
const getNotesElement = () => document.querySelectorAll(".Note");
const getBtnsDeleteElement = () =>
  document.querySelectorAll(".Btn__Delete__Note");

export {
  btnNotesElement,
  btnAddNoteElement,
  btnAddPinnedNoteElement,
  btn2AddNoteElement,
  btnLeftArrowElement,
  containerNotesElement,
  containerAddNoteElement,
  containerShowNoteElement,
  containerShowElement,
  btnMenuBarElement,
  btnCloseSearchElement,
  btnCloseAsideElement,
  btnSearchElement,
  searchElement,
  asideAppElement,
  asideNotesElement,
  btnAsideAddNoteElement,
  noteAppElement,
  notesItemsElement,
  notesPinnedElement,
  inputTitleElement,
  inputAuthorElement,
  inputContentElement,
  getNotesElement,
  getBtnsDeleteElement,
  getInputSearchElements,
};
