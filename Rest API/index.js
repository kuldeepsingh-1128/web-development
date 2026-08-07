// import { constants } from "buffer";
import express from "express";
const app=express();

import path,{ join } from "path";
import { fileURLToPath } from "url";

import { v4 as uuidv4 } from 'uuid';

import methodOverride from "method-override";
app.use(methodOverride('_method'));

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
        id:uuidv4(),
        username:"kuldeep",
        content:"I love coding.."
    },
    {
        id:uuidv4(),
        username:"ayush",
        content:"my name is ayush"
    },
    {
        id:uuidv4(),
        username:"ajay",
        content:"i am a student"
    },
    {
        id:uuidv4(),
        username:"prince",
        content:"i am prince bro"
    }
];

let port=8080;
app.listen(port,()=>{
    console.log("server is runing at the port ",port);
})
app.get("/",(req,res)=>{
    res.send("server working well");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    posts.push({username,content,id:uuidv4()});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);

    if(!(post)){
        return res.render("error.ejs");
    }

    res.render("show.ejs",{post});
})

app.get("/posts/:id/edit" ,(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    
    res.render("edit.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=>p.id===id);
    post.content=newcontent;
    // console.log(post);
    // res.send("patch requist is working");
    res.redirect("/posts");
})


app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>p.id!==id);
    console.log(post);
    res.redirect("/posts");
})

app.use((req,res)=>{
    res.render("error.ejs");
})