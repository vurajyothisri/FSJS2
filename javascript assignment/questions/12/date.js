// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date=new Date();
let day=date.getDate();
let month=date.getMonth();
let year=date.getFullYear();
let hour=date.getHours();
let minutes=date.getMinutes();
console.log(`YYYY-MM-DD HH:mm : ${year}-${month+1}-${day}  ${hour-12}:${minutes}`  );
console.log(`DD-MM-YYYY HH:mm: ${day}-${month+1}-${year}   ${hour-12}:${minutes}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month+1}/${year}   ${hour-12}:${minutes}`);
