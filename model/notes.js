const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const notes = mongoose.model('notes', noteSchema);

module.exports = notes;