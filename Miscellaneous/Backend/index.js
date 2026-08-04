import express from "express";
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("server is runing on port -",port);
})

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard get response \n this page is belongs to ${user}`);
})

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`standard post response \n this page is belongs to ${user}`);
})


app.use((req,res)=>{
    res.status(404).send("page not found..");
})

