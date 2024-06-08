import { fetchFromDB } from "./fetchFromDB";
import { saveToDB } from "./saveToDB";
import { initialProgram } from "./utils";

export const addNote = (value) => {
  const Notes = fetchFromDB("Notes");
  Notes.push(value);
  saveToDB("Notes", Notes);
  initialProgram();
};
