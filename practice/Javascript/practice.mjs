// let a=10;
// a="hi";
// console.log(a);
// function sum(){
//     var a=10;
//     function sub(parameter){
//         function mul(){
//             console.log(a);
//         }
//         mul();
//     }
//     sub(a)
// }

// sum();
// setTimeout(()=>{
//     console.log('sri');
// },7000);
// setInterval(()=>{
//     console.log('jyothi');
// },1000)

// a.forEach((element)=>{
    
//     console.log(element.concat(" ","ten",""));
// })
// a.map((val)=>
// {
// console.log(val.codePointAt);
// })
// Array.prototype.concatination=function (){
//     console.log("The upper case letters are:",this.length)
  
// }
// console.log(a.concatination());
// const a=["jyothi",'maha','lalith'];
// const b=a.filter((val)=>{ return val.includes("a")})
// console.log(b);
//promise 
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const arr=['html','css','javscript'];
//         if(arr.length<1){
//             resolve("completed")
//         }
//         else{
//             reject("incomplete")
//         }
//     },2000)9
// })
// promise.then((result)=>{
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);
// })
//fetch api
import fetch from "node-fetch";
const url="https://restcountries.com/v2/all";


fetch(url)
.then(
    (response)=>response.jason()).
then(
    (data)=>console.log(data))
.catch(
    (error)=>console.log(error)
)
