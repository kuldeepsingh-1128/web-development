const mongoose=require("mongoose");

const chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Allchats=[
    {
    from:"rohan",
    to:"kuldeep",
    msj:"send me exam notes and papers.",
    created_at:new Date()
    },
    {
    from:"kuldeep",
    to:"rohan",
    msj:"okii bejta hu ruk..",
    created_at:new Date()
    },
    {
    from:"rohan",
    to:"kuldeep",
    msj:"jaldi bejna thoda exam h",
    created_at:new Date()
    },
    {
    from:"kuldeep",
    to:"rohan",
    msj:"bej rha hu na wait kr thoda..",
    created_at:new Date()
    },
    {
    from:"rohan",
    to:"kuldeep",
    msj:"thik h.. bye",
    created_at:new Date()
    }
];

chat.insertMany(Allchats);