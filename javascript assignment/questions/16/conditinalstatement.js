// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
const prompt = require("prompt-sync")()
let month=prompt("Enter the month: ").toUpperCase();
if(month=='SEPTEMBER'|| month=='OCTOBER' || month=='NOVEMBER')
{
    console.log("The season is: Autumn");
}
else if(month=='DECEMBER' || month=="JANUARY" || month=="FEBRUARY"){
    console.log("The season is: Winter");
}
else if(month=='MARCH'|| month=='APRIL' || month=='MAY')
{
    console.log("The season is: Spring");
}
else{
    console.log("The season is :Summer");
}