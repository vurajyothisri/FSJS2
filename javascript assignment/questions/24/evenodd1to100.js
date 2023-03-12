// Write a program to create two array "even" and "odd" having even and odd number
// between the 0 to 100 (0 and 100 included).
function evenornot(num){
    if(num%2==0){
        return true;
    }
return false;
}

let even=[];
let odd=[];

for(let i=0;i<=100;i++){
    if(evenornot(i)){
        even.push(i);
    }
    else{
        odd.push(i);
    }
    
}
console.log("Even numbers between 0 to 100:");
console.log(even);
console.log("Odd numbers between 0 to 100:");
console.log(odd);