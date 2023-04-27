// Even numbers are divisible by 2 and the remainder is zero. How do you check,
// if a number is even or not using JavaScript? Create a program which checks
// that the given number is even or odd.
const prompt = require("prompt-sync")()
let number= prompt("Enter th number: ");

if(number%2==0)
{
    console.log("The given number %d is divisible by 2.So, it is even number",number);
}
else
{
   console.log("The given number %d is not divisible by 2.So , it is not even  number",number); 
}