# DOM FIRST ASSIGNMENT (1)
## TASK 1
<img src="\outputimages\taskone.png">

### Solution for task one
<!-- To change the contact to project, give id to contact -->
let project=document.querySelector('#project');
project.innerHTML='Project';
<!-- to target the ul created a id=list ,create hireme element and append to ul using append method -->
let list=document.querySelector("#list");

let hireme=document.createElement("li");

hireme.innerHTML="Hire Me";

list.append(hireme)
## Task 2

<!-- for task two we remove hireme and social_media icons using remove method -->
<!-- we already create element for hire me so we directly remove the elment -->
hireme.remove();

let social_media=document.querySelector("#social_media");

social_media.remove();


## Task 3

<!-- To change an freelauncer and National and International Client to an employee and iNeuron intelligence pvt lt -->
<!-- specifying id=employee to freelauncer and id=ineuron to National and International Client-->

let employee=document.querySelector("#employee");

let ineuron=document.querySelector("#ineuron");

employee.innerTEXT="an Employee";

ineuron.innerHTML="iNeuron intelligence Pvt Ltd";

## Task 4

<!-- chaneging the image from avatar to hitesh sir by specifying id=image to img tag -->

let image=document.querySelector("#image");

image.src="https://media.licdn.com/dms/image/C4D03AQGl-adCfRTfFA/profile-displayphoto-shrink_800_800/0/1655552914877?e=2147483647&v=beta&t=J1Pilh5vMu6C7E1iesIg0yY7zt1hnovRpLH7P-vgSUM";


## Task 5
<!-- adding button support me -->
let cbutton=document.querySelector(".hero-right-section-btns");

let button=document.createElement('button');

button.innerHTML="Support Me";

cbutton.append(button);

# DOM SECOND ASSIGNMENT(2)

## Tast 1 (changing the background color of h3 tag)

let h3=document.getElementsByTagName("h3");

let i;

for(i in h3){

    h3[i].style.backgroundColor="#dadaf8";

}


## Task 2 creating another div tag

let div=document.createElement('div');

let h3=document.createElement('h3');

let p=document.createElement('p');

div.append(h3,p);

h3.innerHTML="Skills";

p.innerHTML="I posses a very good command over the Full Stack Development likr MERN which can be seen in my work over the Github";

p.style.padding="5px 15px";

p.style.fontsize=" 16px;"

p.style.fontweigth=" 600";

p.style.display="none";

div.className="accordian";

let adiv=document.querySelector(".accordian-wrapper");

adiv.appendChild(div)


h3.addEventListener("click", ()=>{ if (p.style.display === "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }});






# DOM THIRD ASSIGNMENT(3)
## Task (change the placeholders)
<!-- first box -->
let entername=document.getElementsByClassName("enterName");

entername[0].placeholder="FSJS 2.0";

let enteremail=document.getElementsByClassName("enterMail");

enteremail[0].placeholder="fsjs@ineuron.ai";

let entermeassage=document.getElementsByClassName("enterMessage");

entermeassage[0].placeholder="Hello World";

<!-- second box -->

let username=document.getElementsByClassName("userName");

username[0].placeholder="FSJS 2.0";

let useremail=document.getElementsByClassName("userEmail");

useremail[0].placeholder="fsjs@ineuron.ai";

let usermessage=document.getElementsByClassName("userMessage");

usermessage[0].placeholder="Hello world";


