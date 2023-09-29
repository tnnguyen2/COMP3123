let express = require('express')

const SERVER_PORT = 8089
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//http://localhost:8089/
app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/plan")
    res.status(500).send("Welcome to Express Web Server")
    //res.send("<h1>Welcome to Express Web Server</h1>")
    //res.send("<h1>Welcome to Express Web Server</h1>") -- Only sends 1 statement
})

//http://localhost:8089/student
app.get("/student",(req,res)=>{
    const stud ={
        sid: 1,
        snm: "Tony Nguyen",
        method: "GET"
    }

    res.send(stud)
})

//http://localhost:8089/student
app.post("/student",(req,res)=>{
    const stud ={
        sid: 1,
        snm: "Tony Nguyen",
        method: "POST",
        header: req.headers
    }

    //res.send(stud)
    res.json(stud)
})

//http://localhost:8089/faculty
app.get("/faculty",(req,res)=>{
    res.send("Hello Faculty")
})

//PATH Parameter
//http://localhost:8089/employee/tony/nguyen
app.get("/employee/:fname/:lname",(req,res)=>{
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname

    res.send(data)

})
//QUERY Parameter
//http://localhost:8089/employee?fnm=tony&lnm=nguyen
app.get("/employee",(req,res)=>{
    const data = req.query
    if(data.id === undefined){
        res.send("Required id as a query param")
    }else{
        res.send(data)
    }
})

//Accept data as a body
//http:localhost:8089/hotels
app.get("/hotels",(req,res)=> {
    const data = req.body
    res.send(data)
})

app.listen(SERVER_PORT,()=>{
    console.log(`Server is running at http://localhost:${SERVER_PORT}`)
})