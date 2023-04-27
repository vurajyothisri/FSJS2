# DOM SIXTH ASSIGNMENT(6)

## Task1
  <!-- cahnging the logo -->
  let img=document.getElementsByClassName('logo');

  img[0].src="https://ineuron.ai/images/ineuron-logo.png";
## TASK 2
<!-- CAHNGING COST VALUE -->
let cost=document.querySelector(".app_price").getElementsByTagName('span');

cost[0].innerHTML="$10";
<!-- ADDING LINKEDIN -->
let linkedin=document.createElement('div');

linkedin.className="footer_social_ico";

linkedin.innerHTML='<i class="fa-brands fa-linkedin"></i>';

let social_media=document.getElementsByClassName("footer_social");

social_media[0].appendChild(linkedin);

