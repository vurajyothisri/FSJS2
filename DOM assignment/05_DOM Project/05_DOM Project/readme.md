# DOM FIFTH ASSIGNMENT (5)
<!-- appeneding the button -->
<!-- button created -->
let button=document.createElement('a');
<!-- class name -->
button.className="btn";
button.href="#";
<!-- content -->
button.innerHTML="Pro Subscription";
<!-- boreder -->

<!-- targeting nav (class=nav-center) -->
let nav=document.getElementsByClassName("nav-center");
<!-- adding at the end of nav center class -->
nav[nav.length-1].append(button);

<!-- adding chinese recipe -->
let chinese=document.createElement('a');

chinese.href="#";

chinese.innerHTML="Chinese (7)";

let recipes=document.querySelector(".tags-container").getElementsByTagName("div");

recipes[recipes.length-1].append(chinese);
<!-- changing h5 color -->

let h5=document.getElementsByClassName("recipe-name");

for( i in h5){
    h5[i].style.color="#983291";
}


<!-- changing p color -->

let p=document.getElementsByClassName("recipe-disp");

for( i in p){
    p[i].style.color="#983291";}


<!-- adding card -->
let div=document.createElement('div');
 
let h1=document.createElement('h1');

div.append(h1);

h1.innerHTML="add 6th card here";

div.className="card";

let rg=document.getElementsByClassName("recipe-gallery");

rg[rg.length-1].append(div);