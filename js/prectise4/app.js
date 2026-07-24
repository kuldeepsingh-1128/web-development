let pera=document.querySelector("p");
let inp=document.querySelector("input");

inp.addEventListener("input",function(){
    pera.innerText=(inp.value);
})