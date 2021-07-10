const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Change a title");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const leftNotes = notes.filter((note) => note.title !== title);
  if (leftNotes.length < notes.length) {
    saveNotes(leftNotes);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("Note is not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.red.inverse("Your notes"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const readingNote = notes.find((note) => note.title === title);
  if (readingNote) {
    console.log(chalk.green.inverse(readingNote.title));
    console.log(readingNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJsON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
};
