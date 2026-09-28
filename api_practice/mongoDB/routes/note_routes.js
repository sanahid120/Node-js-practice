const express = require("express");
const { createNote,readNotes,readNoteByID,updateNote,deleteNote,deleteAllNotes } = require("../controllers/note_controllers");
const notesRoute = express.Router();



notesRoute.post("/create", createNote);
notesRoute.get("/read",readNotes);
notesRoute.get("/readNoteByID/:id", readNoteByID);
notesRoute.patch("/update/:id", updateNote);
notesRoute.delete("/delete/:id", deleteNote);
notesRoute.delete("/deleteallnotes", deleteAllNotes);


module.exports = notesRoute;