let url="https://catfact.ninja/fact";

// let joke=fetch(url);

// console.log(joke);

// fetch(url)
// .then((response)=>{
//     // console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((Data2)=>{
//     console.log(Data2.fact);
// })



// .catch((err)=>{
//     console.log("ERROR:",err);
// })

// async function getfact(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);

//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);

//     }catch(err){
//         console.log("ERROR:",err);
//     }
// }

//Cat fact

let btn=document.querySelector(".btn1");
let p=document.querySelector("#pera")

async function getfact() {
    try{
        let res=await axios.get(url);
        p.innerText=(res.data.fact);
    }catch(err){
        console.log("ERROR:",err);
    }
}

btn.addEventListener("click",()=>{
    getfact();
})


//DOG


let btn2=document.querySelector(".btn2");
let img=document.querySelector(".image");

async function getimg() {
    try{
        let res=await axios.get("https://dog.ceo/api/breeds/image/random");
        let url=(res.data.message);
        img.setAttribute("src",url);
    }catch(err){
        img.setAttribute("alt","Error");
    }
}

btn2.addEventListener("click",()=>{
    getimg();
})


//Jokes
let btn3=document.querySelector(".btn3");
let p2=document.querySelector(".pera2");

async function getjoke() {
    const config={headers:{Accept:"application/json"}}
    let res=await axios.get("https://icanhazdadjoke.com/",config);
    p2.innerText=(res.data.joke);
}

btn3.addEventListener("click",()=>{
    getjoke();
})



// //university
// let inp=document.querySelector("input");
// let p4=document.querySelector(".pera4");
// let btn4=document.querySelector(".btn4");

// btn4.addEventListener("click",async()=>{
//     let country=inp.value;
//     let colarr=await getdetail(country);
//     printclg(colarr);
// })

// function printclg(colarr){
//     let list=document.querySelector(".list");
//     list.innerText="";
//     for(col of colarr){
//         console.log(col);
//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
//     // inp.value="";
// }

// async function getdetail(country) {
//     try{
//         let res=await axios.get("http://universities.hipolabs.com/search?name="+country);
//         return res.data;
//     }catch(err){
//         console.log("Error:",err);
//     }
// }



//university
let inp=document.querySelector("input");
let p4=document.querySelector(".pera4");
let btn4=document.querySelector(".btn4");

btn4.addEventListener("click",async()=>{
    let state=inp.value;
    let colarr=await getdetail();
    printclg(colarr,state);
})

function printclg(colarr,state){
    let list=document.querySelector(".list");
    list.innerText="";
    for(col of colarr){
        if(col["state-province"]==state){
            let li=document.createElement("li");
            li.innerText=col.name;
            list.appendChild(li);

            console.log(col.name);
            console.log(col["state-province"]);
        }
    }
    // inp.value="";
}

async function getdetail() {
    try{
        let res=await axios.get("http://universities.hipolabs.com/search?name=India");
        return res.data;
    }catch(err){
        console.log("Error:",err);
    }
}

inp.addEventListener("keypress",async (e)=>{
    if(e.key==="Enter"){
        let state=inp.value;
        let colarr=await getdetail();
        printclg(colarr,state);
    }
})