const express = require('express')

let studentRoutes = express.Router()

studentRoutes.route("/")
    .get((req, res) => {

        res.send("<h2>GET - Student")
    })
    .post((req, res) => {
        res.send("<h2>POST - Student")
    })

studentRoutes.get("/fulltime", (req, res) => {
    res.send("<h2>GET - Full Time Student</h2>")
})

studentRoutes.post("/fulltime", (req, res) => {
    res.send("<h2>POST - Full Time Student")
})

studentRoutes.get("/parttime", (req, res) => {
    res.send("<h2>GET - Part Time Student")
})

module.exports = studentRoutes