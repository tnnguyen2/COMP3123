const express = require("express")
const BookModel = require('../models/Book');

const routes = express.Router()

//Get All Books
routes.get("/books", async (req, res) => {
    try {
        const bookList = await BookModel.find();
        res.status(200).json(bookList)
    } catch (error) {
        res.status(500).json(error)
    }

    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    try {
        const newBook = new BookModel({
            ...req.body
        });
        await newBook.save()
        res.status(200).json(newBook)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Add NEW Book"})
})

//Update existing Book By Id
routes.post("/book/:bookid", async (req, res) => {
    try {
        const updatedBook = await BookModel.findByIdAndUpdate({_id : req.params.bookid}, req.body)
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    try{
        //const book = await BookModel.deleteOne({ _id : req.params.bookid })
        const book = await BookModel.findOneAndDelete({_id : req.params.bookid})
        if(!book){
            res.status(200).send({message: "Book Not found"})
        }else{
            res.status(200).send(book)
        }
    }catch(error){
        res.status(500).send(error)
    }
    //res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.bookid);
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})
module.exports = routes