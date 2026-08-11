import {faker} from "@faker-js/faker";
import mysql from "mysql2";

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


let q="insert into user(id,username,email,password) values ? ";
let data=[];

for(let i=0;i<100;i++){
    data.push(getRandomUser());
}


try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}




// console.log(getRandomUser());