// 
// Write a program which tells the number of days in a month.
const prompt = require("prompt-sync")();
const month=prompt("Enter the month:  ")
// const da(te=new Date(2023, month, 0).getDate();

console.log(`${month} month has ${new Date(2023, month, 0).getDate()} days`);