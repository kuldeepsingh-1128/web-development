let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let h3=document.querySelector("h3");


btn.addEventListener("click",function(){
    let items=document.createElement("li");
    items.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    items.appendChild(delbtn);
    ul.appendChild(items);
    counttask(ul.children.length+1);
    inp.value="";
    

});

let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        // console.log("item is deleting");
        let per=this.parentElement;
        console.log(per);
        per.remove();
    })
}
let items=document.createElement("li");
ul.addEventListener("click" , function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("deleting...");
        counttask(ul.children.length);
    };
})


inp.addEventListener("keypress",function(e){
    
    if(inp.value!=""){
    if(e.key=="Enter"){
    let items=document.createElement("li");
    items.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    counttask(ul.children.length+1);
    items.appendChild(delbtn);
    ul.appendChild(items);
    inp.value="";
    }
    }
})

function counttask(count){
    h3.innerText=`Remaining tasks : ${count}`;
}

