const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require('mongoose')
const app = express()

const SERVER_PORT = 3001

const DB_CONNECTION_STRING =
    "mongodb+srv://tdotnguyen:JA5Dkz4KLhZMBsTC@cluster0.hgh3k7b.mongodb.net/F2023_COMP3123-books?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database connection successful')
})

app.use(express.json())
app.use(express.urlencoded())


app.use("/library", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MongoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})