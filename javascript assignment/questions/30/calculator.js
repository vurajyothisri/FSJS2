//Create a simple calculator program in JavaScript which can perform the
//addition, substraction, multiplication and division on given number.

let addition=(a,b)=>a+b;
let substraction=(a,b)=>a-b;
let multiplication=(a,b)=>a*b;
let modulaodivision=(a,b)=>{  
    return a%b;
}
let division=(a,b)=>{
    return a/b;
}
const prompt = require("prompt-sync")();
console.log('1.Addition');
console.log("2.Substraction");
console.log("3.Multiplication");
console.log("4.Modulodivision");
console.log("5.Division");
let choice=Number(prompt("Enter your choice (1-5): "));
let a=prompt("Enter first value: ");
let b=prompt("Enter second value: ");
let res=0;
switch(choice){
    case 1:
        res=addition(a,b);
        console.log("Result: ",res);
        break;
    case 2:
        res=substraction(a,b);
        console.log("Result: ",res);
        break;
    case 3:
        res=multiplication(a,b);
        console.log("Result: ",res);
        break;
    case 4:
        re=modulaodivision(a,b);
        console.log("Result: ",res);
        break;
    case 5:
        res=division(a,b);
        console.log("Result: ",res);
        break;
    default:
        console.log("Enter the mention values");                    
        
}

