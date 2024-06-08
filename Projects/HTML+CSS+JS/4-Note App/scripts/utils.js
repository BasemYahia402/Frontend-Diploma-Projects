import deleteNote from "./deleteNote";
import {
  asideNotesElement,
  btnLeftArrowElement,
  containerShowElement,
  containerShowNoteElement,
  getBtnsDeleteElement,
  getInputSearchElements,
  getNotesElement,
  notesItemsElement,
  notesPinnedElement,
} from "./elements";
import { fetchFromDB } from "./fetchFromDB";
import { searchNote } from "./searchNote";

const renderNotes = (notes) => {
  notesItemsElement.innerHTML = "";
  notesPinnedElement.innerHTML = "";

  notes.forEach((note) => {
    const noteContainer = note.isPinned
      ? notesPinnedElement
      : notesItemsElement;
    noteContainer.innerHTML += `
        <div class="Note" data-id= "${note.id}" >
          <h1 class="Title__Note">${note.title}</h1>
          <p class="Content__Note">${note.content}</p>
          <div class="Date__Delete__Note">
            <div class="Date__Note"><p>${note.date}</p></div>
            <div class="Btn__Delete__Note">Delete</div>
          </div>
        </div>
      `;
  });
};

const displayFilteredNotes = (notes, searchTerm = "") => {
  const filteredNotes = notes.filter(
    (note) =>
      !searchTerm || note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  renderNotes(filteredNotes);
  programOperation();
};

const renderDetailsNote = (Note) => {
  containerShowNoteElement.innerHTML = `
            <div class="Note">
              <h1 class="Title__Note">
                ${Note.title}
              </h1>
              <div class="Date__Note">
                <div class="Date__Note"><p>${Note.date} / by ${Note.author}</p></div>
              </div>
              <p class="Content__Note">
                ${Note.content}
              </p>
            </div>
  `;
};

const isMobileScreen = () => {
  return window.innerWidth <= 767;
};

const programOperation = () => {
  getNotesElement().forEach((note) => {
    note.addEventListener("click", () => {
      if (isMobileScreen()) {
        console.log("inside mobile");
        containerShowElement.style.display = "block";
        btnLeftArrowElement.classList.remove("hide");
        asideNotesElement.classList.add("hide");
      }
      const Notes = fetchFromDB("Notes");
      const clickedNoteId = note.dataset.id;
      console.log(clickedNoteId);
      const clickedNote = Notes.find((note) => note.id === clickedNoteId);
      if (clickedNote) {
        renderDetailsNote(clickedNote);
      }
    });
  });

  getBtnsDeleteElement().forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const Notes = fetchFromDB("Notes");
      const clickedNoteId = btn.closest(".Note").dataset.id;
      const clickedNoteIndex = Notes.findIndex(
        (note) => note.id === clickedNoteId
      );
      if (clickedNoteIndex !== -1) {
        deleteNote(Notes, clickedNoteIndex);
      } else {
        console.error("Note with the clicked ID not found.");
      }
    });
  });

  getInputSearchElements().forEach((input) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        searchNote(this.value);
      }
    });
  });
};

const initialProgram = () => {
  const Notes = fetchFromDB("Notes");
  renderNotes(Notes);
  programOperation();
};

export { displayFilteredNotes, renderDetailsNote, initialProgram };
