//Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function primeornot(num){
if(num==1){
    return true;
}
    let count=0;
    for(let i=2;i<=num;i++){
        if(num%i==0){
            count+=1;
        }
    }
    if(count==1){
        return true;
    }
    else{
        return false;
    }
}

let prime=[]
for(let i=0;i<=100;i++)
{
    if(primeornot(i)){
        prime.push(i);
    }
}
console.log("Prime number between 0-100: ");
console.log(prime);