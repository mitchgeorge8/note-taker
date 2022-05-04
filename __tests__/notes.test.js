const fs = require("fs");
const { createNewNote, validateNote } = require("../lib/notes");
const notes = require("../db/notes");

jest.mock("fs");

test("Creates a new note object", () => {
  const note = createNewNote({ title: "Test Title", text: "test text" }, notes);

  expect(note.title).toBe("Test Title");
  expect(note.text).toBe("test text");
});

test("Validates note", () => {
  const validNote = { title: "Test Title", text: "test text" };
  const invalidNote = { title: "", text: "" };

  const result1 = validateNote(validNote);
  const result2 = validateNote(invalidNote);

  expect(result1).toBe(true);
  expect(result2).toBe(false);
});
