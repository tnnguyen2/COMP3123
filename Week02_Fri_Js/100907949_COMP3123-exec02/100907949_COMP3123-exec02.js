//Exercise 1
let greeter = (myArray) =>{
    const greetText = 'Hello ';
    myArray.forEach(name => console.log(`${greetText}${name}`));
}
console.log('Exercise 1\n----------')
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan\n']);

//Exercise 2
function capitalize(string){
    const[firstLetter, ...rest] = string;
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
}
console.log('Exercise 2\n----------')
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3
function capitalizedColors(colors){
    return colors.map((str)=>{
      const[firstLetter, ...rest]=str;
      return `${firstLetter.toUpperCase()}${rest.join('')}`;
    });
}
const colors = ['red','green','blue']
console.log('\nExercise 3\n----------')
console.log(capitalizedColors(colors))

//Exercise 4
function filterLessThan20(values,maxValue){
    return values.filter((num) =>{
        return num < maxValue;
    });
}
const values =[1,60,34,30,20,5]
console.log('\nExercise 4\n----------')
console.log(filterLessThan20(values,20))

//Exercise 5
function calculateSum(values){
    return values.reduce((nextValue, currentValue)=>{
        return nextValue + currentValue;
    })
}
function calculateProduct(values){
    return values.reduce((nextValue, currentValue)=>{
        return nextValue * currentValue;
    })
}
console.log('\nExercise 5\n----------')
const numbers = [1,2,3,4];
console.log(calculateSum(numbers));
console.log(calculateProduct(numbers));

//Exercise 6
class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} ${this.year}`
    }
}
class Sedan extends Car {
    constructor(model, year, balance){
        super(model,year)
        this.balance = balance;
    }
    info(){
        return `${super.details()} has a balance of $${this.balance.toFixed(2)}`;
    }
}
console.log('\nExercise 6\n----------')
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());