//Write a javascript program which takes the input of filename as 
//string and prints the extension of the file in the console

const prompt=require("prompt-sync")();
let filename=prompt("Enter file name with extension: ");
 
let extension=filename.split(".");
console.log("Extension of the file: ",extension[extension.length-1]);