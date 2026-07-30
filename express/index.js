// const express=require("express");
// const app =express();

// // console.dir(app);

// let port=8080;

// app.listen(port,()=>{
//     console.log(`app listing at port: ${port}`);
// })

// app.get("/",(req,res)=>{
//     res.send("hello,i am root");
//     console.log("you contected home page")
// })
// // app.get("/search",(req,res)=>{
// //     res.send("thank u for searching");
// //     console.log("thank u for searching");
// // })
// // app.get("/apple",(req,res)=>{
// //     res.send("you contected apple page");
// //     console.log("you contected apple page")
// // })
// // app.use((req,res)=>{
// //     res.status(404).send("page not found..");
// // })

// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username,id}=req.params;
//     res.send(`wellcome to the page of @${username}`);
// })

// // app.use((req,res)=>{
// //     console.log("Request recived..");
// //     // res.send("this is a basic response..");
// //     // res.send({
// //     //     "name":"kuldeep",
// //     //     "study":"Btech"
// //     // });
// //     res.send("<h1>html response</h1>");
// // })

// app.get("/search",(req,res)=>{
//     let {q}=(req.query);
//     if(!q){
//         res.send("you not search for anything..");
//     }
//     res.send(`these are the search result for query=${q}`);
// })


import express from 'express';
const app=express();

app.listen(5000,(req,res)=>{
    console.log("server is running on port 5000");
})

app.get("/",(req,res)=>{
    res.send("hello world..");
})
app.get("/search",(req,res)=>{
    res.send("hello world.. \n searching in the world");
})
app.use((req,res)=>{
    res.status(404).send("page not found...");
})