let http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
const Employee = require("./Employee")

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write('<h1>Welcome to Lab Exercise 03</h1>');

            res.write('<h3><a href="/employee">Employees</a><br><br>');
            res.write('<a href="/employee/names">Employee Names</a><br><br>');
            res.write('<a href="/employee/totalSalary">Total Salary</a></h3>');

            res.end();
            return;
        }
        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write('<h1><a href="/">Home</a></h1>');
            res.write('<pre>');
            res.write(JSON.stringify(Employee,null,2));
            res.write('<pre>');
            res.end();
            return;
        }
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const sortedNames = Employee.map(Employee => `${Employee.firstName} ${Employee.lastName}`).sort();
            res.write('<h1><a href="/">Home</a></h1>');
            res.write('<pre>');
            res.write(JSON.stringify(sortedNames,null,2));
            res.write('<pre>');
            res.end();
            return;
        }
        if (req.url === '/employee/totalSalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100 }
            const totalSalary = Employee.reduce((acc, Employee) => acc + Employee.Salary, 0);
            res.write('<h1><a href="/">Home</a></h1>');
            res.write('<pre>');
            res.write(JSON.stringify({ total_salary: totalSalary }));
            res.write('<pre>');
            res.end();
            return;
        }
    }
        res.end(`{"Error": "${http.STATUS_CODES[404]}"}`)
})

server.listen(port)
console.log(`Server listening on port http://localhost:${port}/`)

