// let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor){nextcolor()};
//     },delay);
// }

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


//promise
function saveDB(Data) {

    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10 + 1);
        if (internet > 5) {
            resolve("success:Data save successfull..");
        } else {
            reject("failure:week connection..");
        }
        
    })
}

// // console.log(saveDB("kuldeep singh"));
// let request=saveDB("kuldeep singh");  //request is promise object
// request.then(()=>{
//     console.log("promise is Resolved");
// })
// .catch(()=>{
//     console.log("promise is Rejected!!");
// })

saveDB("kuldeep singh").then(()=>{
    console.log("promise is Resolved");
})
.catch(()=>{
    console.log("promise is Rejected!!");
})