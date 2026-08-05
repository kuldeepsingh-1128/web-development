// import { constants } from "buffer";
import express from "express";
const app=express();
import path,{ join } from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
        username:"kuldeep",
        content:"I love coding.."
    },
    {
        username:"ayush",
        content:"my name is ayush"
    },
    {
        username:"ajay",
        content:"i am a student"
    },
    {
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
    posts.push({username,content});
    res.redirect("/posts");
})

