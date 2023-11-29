const express = require('express')

let studentRoutes = express.Router()

studentRoutes.route("/")
    .get((req, res) => {

        res.send("<h2>GET - StudentList")
    })
    .post((req, res) => {
        res.send("<h2>POST - StudentList")
    })

studentRoutes.get("/fulltime", (req, res) => {
    res.send("<h2>GET - Full Time StudentList</h2>")
})

studentRoutes.post("/fulltime", (req, res) => {
    res.send("<h2>POST - Full Time StudentList")
})

studentRoutes.get("/parttime", (req, res) => {
    res.send("<h2>GET - Part Time StudentList")
})

module.exports = studentRoutes