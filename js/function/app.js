// //function

// function printname(name){
//     console.log(`hello ${name} sir ,welcome back to our website..`);
// }

// printname("ajay");
// printname("ayush");
// printname("kuldeep");

// function printnameage(name,age){
//     console.log(`${name}'s age is ${age}`);
// }

// printnameage("kuldeep",21);



// //scope element

// let a=40;

// function sum(a,b){
//     console.log(a);
//     return a+b;
// }
// sum(4+3);
// console.log(a);


// //block element
// {
//     let a=25;
// }
// console.log(a);

// for(let i=0;i<=5;i++){
//     console.log(i);  //scope=block
// }
// console.log(i);


// let greet='hello';   //globle scope

// function changegreet(){
//     let greet='namaste';    //function scope
//     console.log(greet);
//     function innergreet(){
//         console.log(greet);     //lexical scope
//     }
//     innergreet();
// }

// console.log(greet);
// changegreet();


// //this keyword
// const student={
//     name:"kuldeep",
//     age:21,
//     eng:91,
//     maths:88,
//     science:99,

//     getavg(){
//         let avg=(this.eng+this.maths+this.science)/3;
//         console.log(avg);
//     }

// };


// //Try catch (Error handling)
// console.log("hello");
// // let a=1;
// try{
//     console.log(a);
// }catch(err){
//     console.log("caugh an error... a is not define");
//     console.log(err);
// }
// console.log("hello");


// //Arrow function
// const sum=(a,b)=>{
//     console.log(a+b);
// };

// console.log("hii there!");

// setTimeout(() => {
//     console.log("kuldeep singh profile");
// }, 4000);

// setTimeout(() => {
//     console.log("wellcome to ");
// }, 2000);


// // setInterval(()=>{
// //     console.log("Apna collage");
// // },2000);


// const student={
//     name:"kuldeep",
//     marks:95,
//     prop:this, //global scope

//     getName: function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks:()=>{
//         console.log(this); //parent's scope->window
//         return this.marks;
//     },

//     getInfo1: function(){
//         setTimeout(() => {
//             console.log(this); //student
//         }, 2000);
//     },

//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this); //window
//         }, 2000);
//     },

// };


// let arr=[1,2,3,4,5,6,7,8,9];

// let print=function(el){
//     console.log(el);
// };

// // arr.forEach(print);

// // arr.forEach((el)=>{
// //     console.log(el);
// // });

// // arr.forEach(function(el){
// //     console.log(el);
// // });

// let num=[1,2,3,4,5,6,7,8,9];

// let double=num.map(function(el){
//     return el*el;
// });

// let even=num.filter((el)=>{
//     return el%2==0;
// })

// let arr=[2,4,6,8];
// let checkarr=arr.every((el)=>el%2==0);

// let nums=[1,2,3];
// let result=nums.reduce((res,el)=> res+el );

// let arr1=[3,2,5,9,4,7,8,1,2];

// let max=arr1.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// })


// let num=[10,20,30,40,50];

// let istrue=num.every((el)=>el%10==0);
// console.log(istrue);


// let arr=[3,4,5,2,1,7,8,9];
// let min=arr.reduce((min,el)=>{
//     if(min>el){
//         return el;
//     }
//     else{
//         return min;
//     }
// })
// console.log(min);

// let arr=[1,2,3,4,5,6,7,8,9];
// let newArr=[...arr];
// console.log(newArr);

// let newstring=[..."hello world"];
// console.log(newstring);

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8];

// let num=[...even,...odd];
// console.log(num);

// let data={
//     email:"kuldeep1128@gmail.com",
//     password:"123@kd"
// };

// let copydata={
//     ...data,
//     id:123
// };


// function sum(...args){      //arguments
//     let ans=0;
//     for(let i=0 ;i<args.length;i++){
//         console.log("you gave us.. ",args[i]);
//         ans+=args[i];
//     }
//     return ans;
// };

// //Destructuring

// let names=["kuldeep" ,"rohan","ayush","ajay"];

// // let winner=name[0];
// // let runnerup=name[1];

// let [winner,runnerup,...other]=names;
// console.log(winner);
// console.log(runnerup);


// //Destructuring in object
// let student={
//     name:"kuldeep",
//     age:21,
//     username:"kuldeep_rajput_7773",
//     password:"kd@123"
// }

// let {username:user,password,city="jaipur"}=student;


// squre and sum function
let arr=[2,3,4,5,6];

let squre=arr.map((el)=>el*el);
console.log(squre);
let sum=arr.reduce((acc,el)=>acc+el);
console.log(sum);

let avg=sum/arr.length;
console.log(avg);

document.all[10].innerHTML='first';
document.all[11].innerHTML='second';
document.all[12].innerHTML='third';