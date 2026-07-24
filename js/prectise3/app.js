// let pera=document.querySelector("p");

// let links=document.querySelectorAll('.box a');

// for(link of links){
//     link.style.color='green';
// }

// let img=document.querySelector('img');
// console.log(img.classList);
// let heading =document.querySelector('h1');
// // console.log(heading.classList.add("green"));
// heading.setAttribute("class","green");

// let box=document.querySelector(".box");


// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);

// // let box=document.querySelector('.box');



// let pera1=document.createElement('p');
// pera1.innerText="hey, I am red!";
// document.querySelector('body').append(pera1);
// // pera1.style.color="red";
// pera1.classList.add("red");

// let h3=document.createElement('h3');
// h3.innerText="hey, I am blue h3!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let btns=document.querySelectorAll('button');
// // console.dir(btns);

// for(btn of btns){
//     // btn.addEventListener("click",seyhii);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked..");
//     });
// }

// function seyhii(){
//     console.log("helo kd");
// }
// function bro(){
//     console.log("hello bro");
// }

// btn.onclick=function(){
//     console.log("btn is clicked...");
// }

// function getcolor() {
//     let num1 = Math.floor(Math.random() * 255);
//     let num2 = Math.floor(Math.random() * 255);
//     let num3 = Math.floor(Math.random() * 255);

//     let color=`rgb(${num1},${num2},${num3})`;
//     return color;
// }

// let colorbtn = document.querySelector("button");

// colorbtn.addEventListener("click", function () {

//     let h3=document.querySelector("h3");
//     let randomcolor=getcolor();
//     h3.innerText=randomcolor;

//     let box=document.querySelector("div");
//     box.style.backgroundColor=randomcolor;
    
// });

// let inp=document.querySelector("input");
// console.dir(inp.innerText);

// inp.addEventListener("keypress",function(event){
//     console.log("code:-",event.code);
//     if(event.code=="KeyD"){
//         console.log("caracter is moving Downword");
//     }
//     else if(event.code=="KeyU"){
//         console.log("caracter is moving up");
//     }
//     else if(event.code=="KeyL"){
//         console.log("caracter is moving left");
//     }
//     else if(event.code=="KeyR"){
//         console.log("caracter is moving right");
//     }
// })


let form=document.querySelector("form");
let inp=document.querySelector("input");
form.addEventListener("submit",function(event){
    event.preventDefault();

    console.log(inp.value);
    console.dir(inp);

})