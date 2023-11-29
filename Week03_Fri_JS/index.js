//console.log(module)
//global.console.log(global)
const msg = require("./message");
const arit = require("./arithmatic")
const {sum, Student} = require("./arithmatic")
const employee = require("./employee")
const welcome = require("./college")

console.log(msg)
console.log(msg.sayHello("Tony"))
console.log(msg.college)

console.log(arit)
console.log(arit.sum(10,5))
console.log(sum(100,50))
console.log(arit.sub(10,5))
console.log(arit.mul(10,5))

let s1 = new arit.Student(1,"Tony")
s1.print()

let s2 = new Student(2,"Michael")
s2.print()

let emp1 = new employee(100,"John")
emp1.print()

console.log(welcome)
