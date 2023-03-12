//Create a simple calculator program in JavaScript which can perform the
//addition, substraction, multiplication and division on given number.

let addition=(a,b)=>a+b;
let substraction=(a,b)=>a-b;
let multiplication=()=>a*b;
let modulaodivision=(a,b)=>a%b;
let division=(a,b)=>a/b;


const prompt = require("prompt-sync")();
console.log('1.Addition');
console.log("2.Substraction");
console.log("3.Multiplication");
console.log("4.Modulodivision");
console.log("5.Division");
let choice=prompt("Enter your choice");
let a=prompt("Enter first value");
let b=("Enter second value");
switch(choice){
    case 1:
        addition(a,b);
        break;
    case 2:
        substraction(a,b);
        break;
    case 3:
                
        
}

