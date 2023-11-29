const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const user = require("./user.json");
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

//http://localhost:8081/home
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
//http://localhost:8081/profile
router.get('/profile', (req,res) => {
  try{
      const userJson = JSON.stringify(user, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(`${userJson}`);
  }catch(e){
    console.log("user.json not found");
  }
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  password is valid then send response as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
//http://localhost:8081/login?username=bret&password=bret@123
router.get('/login', (req,res) => {
    const data = req.query
    if(data.username !== user.username){
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify({status: false, message: "User Name is invalid"}, null, 2));
    } else if(data.password !== user.password ){
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify({status: false, message: "Password is invalid"}, null, 2));
    } else {
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify({status: true, message: "User Is valid"}, null, 2));
    }
});



/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
//http://localhost:8081/logout?username
router.get('/logout', (req,res) => {
  res.send(`<b>${req.query.username} Successfully Logout.</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port http://localhost:'+ (process.env.port || 8081));