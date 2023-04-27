# DOM FOURTH ASSIGNMENT (4)
## Background color changing
<!-- First changing the text color of training and speed by targeting the class -->
let ts=document.getElementsByClassName("one-third");

let j

for( j in ts){
    ts[j].style.color="#ffffff";
    
    }

<!-- now  changing the color of cost because it has different classes -->

let cost=document.getElementsByClassName("one-third no-border");

let i;

for( i in cost){
    cost[i].style.color="#ffffff";
    
    }

<!-- first character background changing -->

let bg1=document.getElementsByClassName("clash-card__unit-stats clash-card__unit-stats--barbarian clearfix");

bg1[0].style.backgroundColor="#ec9b3b";

<!-- second character background changing -->

let bg2=document.getElementsByClassName("clash-card__unit-stats clash-card__unit-stats--archer clearfix");

bg2[0].style.backgroundColor="#ee5487";

<!-- third character background changing -->

let bg3=document.getElementsByClassName("clash-card__unit-stats clash-card__unit-stats--giant clearfix");

bg3[0].style.backgroundColor="#f38e18";

<!-- fourth character background changing -->
let bg4=document.getElementsByClassName("clash-card__unit-stats clash-card__unit-stats--goblin clearfix");

bg4[0].style.backgroundColor="#82bb30";


<!-- fifth character background changing -->

let bg5=document.getElementsByClassName("clash-card__unit-stats clash-card__unit-stats--wizard clearfix");

bg5[0].style.backgroundColor="#4facff";