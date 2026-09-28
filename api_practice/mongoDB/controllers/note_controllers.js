
const Note = require("../models/note_model");

async function createNote(req, res) {
    const { title, description } = req.body;
    try {

        const note = await Note.create({ title, description });
        res.status(201)
            .json({
                statusCode: 201,
                status: "success",
                message: "Note created successfully",
                id: note._id,
                title: note.title,
                description: note.description,
                createdAt: note.createdAt
            });

    }
    catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error creating note", error: err });
    }

}


async function readNotes(req, res) {
    try {
        const notes = await Note.find();

        res.status(200).json({ statusCode: 200, status: "success", message: "Notes retrieved successfully", notes: notes });


    }
    catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error reading notes", error: err });
    }

};

async function readNoteByID(req, res) {
    const { id } = req.params;

    try {
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ statusCode: 404, status: "error", message: "Note not found" });
        }

        res.status(200).json({ statusCode: 200, status: "success", message: "Note retrieved successfully", note: note });
    } catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error reading note", error: err });
    }
}

async function updateNote(req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const note = await Note.findByIdAndUpdate(id, { title, description }, { new: true });
        res.status(200).json({ statusCode: 200, status: "success", message: "Note updated successfully", note: note });
    } catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error updating note", error: err });
    }
}

async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndDelete(id);
        res.status(200).json({ statusCode: 200, status: "success", message: "Note deleted successfully", note: note });
    } catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error deleting note", error: err });
    }
}

async function deleteAllNotes(req, res) {
    try {
        await Note.deleteMany();
        res.status(200).json({ statusCode: 200, status: "success", message: "All notes deleted successfully" });
    } catch (err) {
        res.status(500).json({ statusCode: 500, status: "error", message: "Error deleting all notes", error: err });
    }
}

module.exports = { createNote, readNotes, readNoteByID, updateNote, deleteNote, deleteAllNotes };
