import { addNote } from "./addNote";
import {
  asideAppElement,
  btnAddNoteElement,
  btnAddPinnedNoteElement,
  btn2AddNoteElement,
  btnAsideAddNoteElement,
  btnCloseAsideElement,
  btnCloseSearchElement,
  btnMenuBarElement,
  btnNotesElement,
  btnSearchElement,
  containerAddNoteElement,
  containerNotesElement,
  inputAuthorElement,
  inputContentElement,
  inputTitleElement,
  noteAppElement,
  searchElement,
  asideNotesElement,
  containerShowElement,
  btnLeftArrowElement,
} from "./elements";
import { initialProgram } from "./utils";

initialProgram();

const clickHandler = () => {
  containerNotesElement.classList.add("hide");
  containerAddNoteElement.classList.remove("hide");
  btnAsideAddNoteElement.classList.add("active");
  btnNotesElement.classList.remove("active");
};

btnAsideAddNoteElement.addEventListener("click", clickHandler);
btn2AddNoteElement.addEventListener("click", clickHandler);

btnNotesElement.addEventListener("click", () => {
  containerNotesElement.classList.remove("hide");
  containerAddNoteElement.classList.add("hide");
  btnAsideAddNoteElement.classList.remove("active");
  btnNotesElement.classList.add("active");
  initialProgram();
});

const formatDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

let lastNoteId = 0;
const getData = (isPinned) => {
  lastNoteId += 1;
  let noteValue = {
    id: lastNoteId.toString(),
    title: `${inputTitleElement.value}`,
    author: `${inputAuthorElement.value}`,
    content: `${inputContentElement.value}`,
    date: formatDate(new Date()),
    isPinned,
  };
  inputTitleElement.value = "";
  inputAuthorElement.value = "";
  inputContentElement.value = "";
  return noteValue;
};

const clickAddHandler = (e, isPinned = false) => {
  e.preventDefault();
  if (
    inputTitleElement.value &&
    inputAuthorElement.value &&
    inputContentElement.value
  ) {
    const noteValue = getData(isPinned);
    addNote(noteValue);
  }
};
btnAddNoteElement.addEventListener("click", (e) => {
  clickAddHandler(e);
});

btnAddPinnedNoteElement.addEventListener("click", (e) => {
  clickAddHandler(e, true);
});

btnSearchElement.addEventListener("click", () => {
  btnSearchElement.classList.add("hide");
  btnCloseSearchElement.classList.remove("hide");
  searchElement.classList.remove("hide");
});

btnCloseSearchElement.addEventListener("click", () => {
  btnSearchElement.classList.remove("hide");
  btnCloseSearchElement.classList.add("hide");
  searchElement.classList.add("hide");
});

btnMenuBarElement.addEventListener("click", () => {
  asideAppElement.style.marginLeft = "0";
  noteAppElement.style.marginLeft = "27rem";
  btnCloseAsideElement.classList.remove("hide");
  btnMenuBarElement.classList.add("hide");
});

btnCloseAsideElement.addEventListener("click", () => {
  asideAppElement.style.marginLeft = "-27rem";
  noteAppElement.style.marginLeft = "0";
  btnCloseAsideElement.classList.add("hide");
  btnMenuBarElement.classList.remove("hide");
});

btnLeftArrowElement.addEventListener("click", () => {
  containerShowElement.style.display = "none";
  asideNotesElement.classList.remove("hide");
});
