//Write a program which tells the number of days in a month, now consider leap year.

const prompt = require("prompt-sync")();

let year=prompt("Enter the year: ");
let month=prompt("Enter the month: ");
let date=new Date(year,month,0).getDate();
console.log(`The ${month} month has ${date} days`);