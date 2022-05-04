const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes"),
    JSON.stringify({ notes }, null, 2)
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

module.exports = { createNewNote, validateNote };
