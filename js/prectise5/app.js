let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor){nextcolor()};
//     },delay);
// }

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise reject");
        }
        h1.style.color=color;
        console.log("color change to :",color);
        resolve();
    },delay);
    })
}
async function color() {
    try{
        await changecolor("red",1000);
        await changecolor("blue",1000);
        await changecolor("green",1000);
        await changecolor("yellow",1000);
    }
    catch(err){
        console.log("error occur:",err);
    }

    console.log(5);
    console.log("hello");
}
color();
// changecolor("red",1000,()=>{
//     changecolor("blue",1000,()=>{
//         changecolor("yellow",1000,()=>{
//             changecolor("pink",1000);
//         })
//     });
// })


// // callback hell
// function saveDB(Data, success, failure) {
//     let internet = Math.floor(Math.random() * 10 + 1);
//     if (internet > 5) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveDB("kuldeep singh", () => {
//     console.log("Data1 save successfully...");
//     saveDB("riet collage", () => {
//         console.log("Data2 save successfully...");
//     }, () => {
//         console.log("internet problem2");
//     })
// }, () => {
//     console.log("internet problem");
// })


// //promise
// function saveDB(Data) {

//     return new Promise((resolve, reject) => {
//         let internet = Math.floor(Math.random() * 10 + 1);
//         if (internet > 5) {
//             resolve("success:Data save successfull..");
//         } else {
//             reject("failure:week connection..");
//         }

//     })
// }

// // console.log(saveDB("kuldeep singh"));
// let request=saveDB("kuldeep singh");  //request is promise object
// request.then(()=>{
//     console.log("promise is Resolved");
// })
// .catch(()=>{
//     console.log("promise is Rejected!!");
// })

// saveDB("kuldeep singh").then((resolve)=>{
//     console.log("Data1 is saved..");
//     console.log(resolve);
//     return saveDB("hello");
// })
// .then((result)=>{
//     console.log("Data2 is saved..")
//     console.log(result);
//     return saveDB("hii");
// })
// .then((result)=>{
//     console.log("Data3 is saved..")
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise is Rejected!!");
//     console.log(error);
// })


// async function greet() {
//     let age=false;
//     if(age){

// }else{
//     throw("404 page not found")
// }
// }
// greet()
// .then(()=>{
//     console.log("promise success");
// })
// .catch((err)=>{
//     console.log("promise faild.. with err:",err);
// })

// let demo=async ()=>{
//     return 5;
// }
// console.log(demo());

// function getnum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },300)
        
//     })
// }

// async function demo() {
//     await getnum();
//     await getnum();
//     await getnum();
    
// }

// console.log(demo());