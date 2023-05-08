let valOne = 6;

if(valOne >= 5){
    console.log("The value is greater than 5");
} else{
    console.log("The value is less than 5");
}

let valTwo = 6;
if(valTwo % 2 === 0){
    console.log("The number is even");
} else{
    console.log("The number is odd");
}

let str = "";
if(str === ""){
    console.log("The string is empty");
} else{
    console.log("Not empty")
}

let success = true;

if(success){
    console.log("Yay, success");
} else{
    console.log("Oh no, Failure");
}

let num = 10;

if(num > 5 && num < 15){
    console.log("Yes the nr is between 5 and 15")
} else{
    console.log("No the nr is not between 5 and 15")
}

let age = 18;

if(age >= 18){
    console.log("You may enter")
} else{
    console.log("You may not")
}

// loop exercises

let value = 10;

for(let i = 0; i < value; i++){
console.log(i)
}

let arrayName = ["Mike", "Jimmy", "Susan", "Tom", "Tim"];

for(let i = 0; i < arrayName.length; i++){
    console.log(arrayName[i]);
}

let arrayNumber = [232, 323, 434, 455, 665, 32];
let total = 0;

for(let i = 0; i < arrayNumber.length; i++){
    // total = total + arrayName[i];
    total += arrayNumber[i];
    console.log(total);
}

for(let i = 0; i < arrayName.length; i++){
    let user = arrayName[i];

    if(user === "Tom"){
        console.log("Welcome Tom")
    } 
}