// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const prompt = require("prompt-sync")();
let  grade1=prompt("Enter first subject marks: ");
let grade2=prompt("Enter second subject marks: ");
let grade3=prompt("Enter third subject marks: ");
let avg=(Number(grade1)+Number(grade2)+Number(grade3))/3;
let result= Math.ceil(avg);
console.log("Average of 3 subjects: ",result);
if(result>=80 && result<=100){
    console.log(" Grade:A ");
}
else if(result>=70 && result<=89)
{
    console.log("Grade: B");
}
else if(result<=69 && result>=60)
{
    console.log("Grade : c");
}
else if(result>=50 && result<=59)
{
      console.log("Grade: D");
}
else{
    console.log("Grade: F");
}