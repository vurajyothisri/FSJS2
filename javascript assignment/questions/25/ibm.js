//  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// /Write a function which calculates bmi. BMI is used to broadly define different weight groups
//  in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the 
//  information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

function IBM(w,h){
    h1=h*0.01
    return w/(h1*h1);
}

 
const prompt = require("prompt-sync")()
let weight=prompt("Enter the weight: ")
let height=prompt("Enter your height in cm: ");

let Ibm=IBM(weight,height);
console.log(Math.round(Ibm))
 if(Math.round(Ibm)<18.5)
 {
    console.log("BMI : ",Math.round(Ibm))
    console.log("Your are under weight")
 }
 else if(Math.round(Ibm)>=18.5 && Math.round(Ibm)<=24.9)
 {
    console.log("BMI: ",Math.round(Ibm));
    console.log("Normal weight");
 }

 else if(Math.round(Ibm)>=25 && Math.round(Ibm)<=29.9 )
 {
    console.log("BMI: ",Math.round(Ibm));
    console.log("Over weight");
 }

 else
 {
    console.log("BMI: ",Math.round(Ibm));
    console.log("obese");
 }