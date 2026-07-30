import express from "express";
import { type } from "os";
import instadata from "./data.json" with {type:"json"};


const app=express();
let port=5000;

//for run server form outside the directory
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
app.set("views",path.join(__dirname,"/views"));


app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

app.set("view engine" ,"ejs");

app.get("/",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1;
    // res.render("home.ejs",{num:value});
    res.render("home.ejs",{value});
})

// app.get("/ig/:username",(req,res)=>{
//     let followers=["kuldeep","rohan","draun","khushboo","Drashti","priyanka"];
//     let {username}=req.params;
//     console.log(username);
//     res.render("instagram.ejs",{username ,followers});

// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    // const instadata=require("./data.json");
    
    const data=instadata[username];
    if(!data){
        res.render("error.ejs");
    }
    console.log(data);
    res.render("instagram.ejs",{data});
})


app.use((req,res)=>{
    let value =(req.url);
    // res.status(404).send(`404 , ${value} page not found`);
    res.render("error.ejs");
})
