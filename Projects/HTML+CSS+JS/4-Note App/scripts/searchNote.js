import { fetchFromDB } from "./fetchFromDB";
import { displayFilteredNotes } from "./utils";

export const searchNote = (title) => {
  const Notes = fetchFromDB("Notes");
  displayFilteredNotes(Notes, title);
};
