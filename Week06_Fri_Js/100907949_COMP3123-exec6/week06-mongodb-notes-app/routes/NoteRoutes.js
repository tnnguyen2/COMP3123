const express = require("express")
const noteModel = require('../models/NotesModel')
const routes = express.Router()


//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    try {
        const newNote = new noteModel({
            ...req.body
        });
        await newNote.save()
        res.status(200).json(newNote)
        //TODO - Write your code here to returns all note
    } catch (error) {
        res.status(500).send({message: "Note Content can not be empty"})
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    try {
        const noteList = await noteModel.find();
        res.status(200).json(noteList)
        //TODO - Write your code here to returns all note
    } catch (error) {
        res.status(500).send(error)
    }
})

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteid', async (req, res) => {
    // Validate request
    try {
        const note = await noteModel.findById({_id: req.params.noteid});
        if (!note) {
            res.status(200).send({message: "Note Not found"})
        } else {
            res.status(200).send(note)
        }
    } catch (error) {
        res.status(500).send({message: "An error occured"})
    }
    //TODO - Write your code here to return only one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteid', async (req, res) => {
    // Validate request
    try {
        const updatedNote = await noteModel.findByIdAndUpdate({_id: req.params.noteid}, req.body)
        res.status(200).json(updatedNote)
    } catch (error) {
        res.status(500).json(error)
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteid', async (req, res) => {
    // Validate request
    try {
        const note = await noteModel.findOneAndDelete({_id: req.params.noteid})
        if (!note) {
            res.status(200).send({message: "Note Not found"})
        } else {
            res.status(200).send(note)
        }
        //TODO - Write your code here to delete the note using noteid
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = routes