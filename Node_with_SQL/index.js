import {faker} from "@faker-js/faker";
import mysql from "mysql2";
import express from "express";
import methodOverride from "method-override";


const app=express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

import path,{join} from "path";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'insta_user',
    password:'root'
});

let getRandomUser=()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    // avatar: faker.image.avatar(),
    faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  ];
}




app.listen("8080",()=>{
    console.log("server is listening at port 8080");
})

app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;

    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
        let count=result[0]["count(*)"];
        res.render("count.ejs",{count});
    })
    }catch(err){
        console.log(err);
    }
    // res.send("app is working well");
})

app.get("/user",(req,res)=>{
    let q=`SELECT id,username,email FROM user`;

    try{
        connection.query(q,(err,users)=>{
        if(err) throw err;
        res.render("table.ejs",{users});
    })
    }catch(err){
        console.log(err);
    }
    // res.send("app is working well");
})

app.get("/user/:id/edit",(req,res)=>{
    // res.send("edit page");
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        let user=result[0];
        console.log(user.password);
        res.render("edit.ejs",{user});
    })
    }catch(err){
        console.log(err);
    }
    // res.send("app is working well");
})

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {username:newuser,password:enterpass}=req.body;
    let q=`select * from user where id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        let user=result[0];
        console.log(user.password);
        if(user.password != enterpass){
            res.send("wrong password..");
        }else{
            let q2=`update user set username='${newuser}' where id='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");
            })
            
        }

    })
    }catch(err){
        res.send("you can't edit username. Error occurr...");
    }
    
})

app.delete("/user/:id",(req,res)=>{
    let {id}=req.params;
    let q=`delete from user where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");
        })
    }catch{
        res.send("error");
    }
})

app.get("/user/:id/add",(req,res)=>{
    let id=faker.string.uuid();
    console.log(id);
    res.render("add.ejs",{id});
})

app.post("/user/:id/add",(req,res)=>{
    let id=req.params.id;
    let {username,email,password}=req.body;
    let q=`insert into user (id,username,email,password) values ('${id}','${username}','${email}','${password}')`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.redirect("/user");
        })
    }catch{
        res.send(err);
    }
})





// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }
