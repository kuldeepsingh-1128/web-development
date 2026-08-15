const mongoose =require("mongoose");

main()
.then(()=>{
    console.log("successful Run");
})
.catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
})

const user=mongoose.model("user",userSchema);

user.find({}).then((result)=>{
    console.log(result[0]);
}).catch((err)=>{
    console.log(err);
})



// user.insertMany([
//     {name:"ajay",age:18,city:"churu"},
//     {name:"manoj",age:21,city:"delhi"},
//     {name:"rahul",age:23,city:"panjab"}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// const user2=new user({
//     name:"ayush",
//     age:20,
//     city:"jaipur"
// })
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));