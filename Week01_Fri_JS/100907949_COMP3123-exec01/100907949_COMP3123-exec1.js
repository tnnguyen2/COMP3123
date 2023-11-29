//Exercise 1
function capitalFirstLetter(input) {
    let words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}
console.log("\nExercise 1\n-----------")
console.log(capitalFirstLetter("the quick brown fox"))

//Exercise 2
function max(num1, num2, num3){
    let largest = num1;

    if(num2>largest){
        largest = num2;
    }
    if(num3>largest){
        largest = num3
    }
    return largest;
}
console.log("\nExercise 2\n-----------")
console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440))

//Exercise 3
function right(input){
    let lastThree= input.slice(-3);
    return lastThree + input.slice(0, -3);
}
console.log("\nExercise 3\n-----------")
console.log(right("Python"))
console.log(right("Javascript"))
console.log(right("Hi"))

//Exercise 4
function angle_Type(angle){
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    }
}
console.log("\nExercise 4\n-----------")
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

