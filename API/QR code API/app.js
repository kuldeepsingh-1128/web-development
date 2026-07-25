let btn=document.querySelector(".btn");
let inp=document.querySelector("input");
let img=document.querySelector(".img");

btn.addEventListener("click",async()=>{
    let url=inp.value;
    img.setAttribute("src",`http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`);

})

inp.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
    let url=inp.value;
    img.setAttribute("src",`http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=100x100`);
    }
})