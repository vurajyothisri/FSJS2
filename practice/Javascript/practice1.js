// var User=function(firstname,coursecount){
//     this.firstname=firstname;
//     this.coursecount=coursecount;
//     this.getcoursecount=function(){
//         console.log(`course count is:${this.coursecount}`);
//     };
// };
// User.prototype.getfirstname=function(){
//     console.log(this.firstname);
// }
// var jyothi=new User("jyothi",2)
// console.log(jyothi)

// if(jyothi.hasOwnProperty("firstname")){
//     jyothi.getfirstname();
// }
// var sam=new User("sam",'1');
// //console.log(sam
// sam.getcoursecount();
// var User={
//     name:'',
//     getUsername:function(){
//         console.log(`user name is : ${this.name}`)
//     }
// }
// var jyothi=Object.create(User);
// console.log(jyothi);

//      jyothi.name="jyothi";
//      jyothi.getUsername();
//      var sam=Object.create(User,{
//         name:{value:"samm"},
//         coursecount:{value:3}
//      })
//      sam.getUsername();

// function doaddition(x){
//     return function(y){
//         return x+y;
//     }
// }
// var add=doaddition(4);
// console.log(add(5));

// console.log(doaddition(7)(7));
//doaddition()()() curring nothing but closure
// let jyothi={
//     firstname:"Jyothi sri",
//     lastname:'Vura',
//     coursecount:3,
//     getinfo:function(){
//         console.log(`
//         Firstname is ${this.firstname}
//         Lastname is ${this.lastname}
//         no of courses enrolled ${this.coursecount}
//         `)
//     }
// }
// let sam={
//     firstname:"sam",
//     lastname:'antha',
//     coursecount:3,
   
// }
// let send=jyothi.getinfo.bind(sam);
// send();