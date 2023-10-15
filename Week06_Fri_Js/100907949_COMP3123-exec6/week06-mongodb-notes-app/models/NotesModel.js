const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
let noteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription:{
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["HIGH" , "LOW" , "MEDIUM"],
        required: true
    },
    dateAdded: Date,
    dateUpdated: Date
})
module.exports = mongoose.model('note',noteSchema)