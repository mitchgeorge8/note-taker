const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(notes, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }
  return true;
}

function deleteNote(id, notes) {
  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(notes, null, 2)
  );

  return notes;
}

module.exports = { createNewNote, validateNote, deleteNote };
