import { saveToDB } from "./saveToDB";
import { initialProgram } from "./utils";

const deleteNote = (Notes, index) => {
  Notes.splice(index, 1);
  saveToDB("Notes", Notes);
  initialProgram();
};
export default deleteNote;
