# DOM EIGHT ASSIGNMENT(8)
## Task1(Adding scroll bar)
let scroll=document.querySelector("aside ");
scroll.style.overflowY="scroll";
## Task2

document.body.style.backgroundImage = "url()";

## Task 3
let navbutton=document.querySelector(".navbar-toggler");

let items=document.querySelector("#navbarTogglerDemo01");

navbutton.addEventListener("click",(e)=>{
    
 if (items.style.display === "none") {

items.style.display = "block";

  } 
  
else {

items.style.display = "none";

  }
    
});