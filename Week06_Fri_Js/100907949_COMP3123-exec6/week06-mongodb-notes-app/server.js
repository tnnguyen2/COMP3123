const express = require('express');
const noteRoutes = require("./routes/NoteRoutes")
const mongoose = require('mongoose');

const SERVER_PORT = 3000

const DB_URL = "mongodb+srv://tdotnguyen:JA5Dkz4KLhZMBsTC@cluster0.hgh3k7b.mongodb.net/F2023_COMP3123-notes?retryWrites=true&w=majority"
const app = express();
app.use(express.json())
app.use(express.urlencoded())


app.use("/notebook", noteRoutes)

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atlas Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.route('/')
    .get((req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});