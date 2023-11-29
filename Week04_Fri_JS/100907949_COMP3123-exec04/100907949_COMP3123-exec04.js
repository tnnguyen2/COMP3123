let express = require('express')

const SERVER_PORT = 8089
let app = express()
app.use(express.json())

//http://localhost:8089/hello
app.get("/hello",(req,res)=>{
    res.send("Home Express JS")
})

//QUERY Parameter
//http://localhost:8089/user?firstname=Tony&lastname=Nguyen
app.get("/user",(req,res)=>{
    const data = req.query;
        res.send(data)
})

//PATH Parameter
//http://localhost:8089/user/tony/nguyen
app.post("/user/:firstname/:lastname",(req,res)=>{
    const data = req.params
    let firstname = req.params.firstname
    let lastname = req.params.lastname

    res.send(data)

})

app.listen(SERVER_PORT,()=>{
    console.log(`Server is running at http://localhost:${SERVER_PORT}`)
})