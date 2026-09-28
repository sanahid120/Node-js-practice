const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }

    },
    { timestamps: true }


); Note = mongoose.model('Note', noteSchema);
module.exports = Note;