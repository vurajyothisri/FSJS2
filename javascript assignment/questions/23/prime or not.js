// Write a program to check that the number given by the user is a prime number or not.
function primeornot(num){

    let count=0;
    for(let i=2;i<=num;i++){
        if(num%i==0){
            count+=1;
        }
    }
    if(count==1){
        return "Given number is prime"
    }
    else{
        return "Given number is not prime"
    }
}
const prompt = require("prompt-sync")()
let number=prompt('enter the number: ');
console.log(primeornot(number));
