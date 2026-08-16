const mongoose=require("mongoose");

main().then((res)=>{
    console.log("successfully running..");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,

    },
    price:{
        type:Number,
        min:[1,"price is too low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    }
    })


const book=mongoose.model("book",bookSchema);

book.findByIdAndUpdate('6a81b18a243b1f3a4a59bbda',{price:-599},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})


// book.deleteOne({price: 599}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// let book2=new book({
//     title:"harry potter",
//     author:"kd",
//     price:1599,
//     category:"fiction"
// })
// book2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




// book.find().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// let book1=new book({
//     title:"RD sharma",
//     author:"RD",
//     price:599
// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })