const express=require("express");
const app=express();
const port=8080;

const mongoose=require("mongoose");
const path=require("path");

const chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

main().then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port,()=>{
    console.log("server is running...");
})

app.get("/",(req,res)=>{
    res.send("root working..")
})



// let chat1=new chat({
//     from:"rohan",
//     to:"kuldeep",
//     msj:"send me exam notes and papers.",
//     created_at:new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

app.get("/chats",async (req,res)=>{
    let chats=await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})