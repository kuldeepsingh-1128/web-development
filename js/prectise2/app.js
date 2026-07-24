// let todo=[];

// let req=prompt("please enter your request");

// console.log(req);

// while(true){
//     if(req=='quit'){
//         console.log("quiting app....");
//         break;
//     }

//     if(req=='list'){
//         console.log("---------------------");
//         for(let i=0;i<=todo.length;i++){
//             console.log(i+1 , todo[i]);
//         }
//         console.log("---------------------")
//     }else if(req=='add'){
//         let task=prompt("please enter the task you want to add..");
//         todo.push(task);
//         console.log("task added..");
//     }else if(req=='delete'){
//         let idx=prompt("plese enter the task index=");
//         todo.splice(idx,1);
//         console.log("Task deleted...");

//     }else{
//         console.log("this is a wrong req");
//     }
//     req=prompt("please enter your request");
// }


// //sum and number of digit...
// let number=prompt("Enter a number=");
// let sum=0;
// let count=0;

// let copy=number;

// while(copy>0){
//     digit=copy%10;
//     sum+=digit; 
//     count++;
//     copy=Math.floor(copy/10);
// }

// console.log(`total number of digit in this ${number} is = ${count}`);
// console.log(`total sum of digit in this ${number} is = ${sum}`);


// //object literals.....
// let student={
//     name:'kuldeep singh',
//     branch:"AI&DS",
//     age:21
// }

// const insta={
//     username:"kuldeep_rajput_7_7_7_3",
//     follower:532,
//     following:444,
//     likes:2000
// }


// //nested object
// const classInfo={
//     aman:{
//         id:1,
//         marks:96,
//         address:'jaipur'
//     },

//     kuldeep:{
//         id:2,
//         marks:99,
//         address:'jhunjhunu'
//     }
//     ,

//     ajay:{
//         id:3,
//         marks:86,
//         address:'dalhi'
//     }
// };


// // Math function
// let num=Math.random();
// let num1=Math.floor(Math.random());

// // from 1 to 6
// let num2=Math.floor(Math.random()*6)+1;



// guess the number game
let num=Math.floor(Math.random()*100)+1;
let choose=prompt("enter a number");
// console.log(`the number is ${num}`);

// while(choose!=num){
//     choose=prompt("try again!! enter a number");

//     if(choose=='quit'){
//         console.log("you are quiting game..");
//         break;
//     }
// }
// if(choose==num){
//     console.log("Wow , you won...");
//     console.log(`the number is ${num}`);
// }

// while(true){
//     if(choose=='quit'){
//         console.log("you are quiting game..");
//         break;
//     }

//     if(choose==num){
//         console.log("Wow , you won...");
//         console.log(`the number is ${num}`);
//         break;
//     }else if(choose<num){
//         choose=prompt("hint : your guess number is small ,plz try another");
//     }
//     else if(choose>num){
//         choose=prompt("hint : your guess number is big ,plz try another");
//     }
// }

