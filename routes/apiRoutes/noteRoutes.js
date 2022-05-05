const router = require("express").Router();
const { nanoid } = require("nanoid");
const notes = require("../../db/notes.json");
const { createNewNote, validateNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = nanoid(12);

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete("/notes/:id", (req, res) => {
  const result = deleteNote(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

module.exports = router;
