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


user.deleteOne({name:"ayush"})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// user.updateOne({age:{$gte:21}},{age:20})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// user.findById({'_id':"6a8076761cde498cf377d958"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// user.findOne({age:{$gt:20}})
// .then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

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