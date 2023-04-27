# DOM SEVENTH ASSIGNMENT(7)

## Task 1(REMOVING ELEMENTS CONTAINS 2.0)


let remove=documnet.querySelector(".main__languages").getElementsByTagName('a');
for(let i in remove){
    if(remove[i].innerHTML.includes(2.0)){
         remove[i].remove()
         }
}

## Task 2
let input=document.querySelector(".main__form-input");
input.placehoder="iNeuron";
input.disabled=false;
let btn=document.querySelector(".main__form-btn");
btn..disabled=false;