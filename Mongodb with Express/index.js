const express=require("express");
const app=express();
const port=8080;

const mongoose=require("mongoose");
const path=require("path");

const chat=require("./models/chat.js");

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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

//new route
app.get("/chats/new" ,(req,res)=>{
    res.render("newchat.ejs");
})

//create route
app.post("/chats",(req,res)=>{
    let {from,to,msj}=req.body;
    let newchat=new chat({
        from:from,
        to:to,
        msj:msj,
        created_at:new Date()
    })
    // console.log(newchat);
    newchat.save().then((res)=>{
        console.log("successfull created new chat");
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let Chat=await chat.findById(id);
    res.render("edit.ejs" ,{Chat});
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msj:newmsj}=req.body;
    let updatemsj=await chat.findByIdAndUpdate(id,
        {msj:newmsj} ,
        {runValidators:true, new:true});
    res.redirect("/chats");
})

//delete
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedchat=await chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
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
    res.render("index.ejs",{chats});
})