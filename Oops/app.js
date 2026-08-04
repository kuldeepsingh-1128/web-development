
// let arr=[1,2,3,1,2,3];
// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hello new student ${name}`);
//         }
//     }
//     return person;
// }

// //constructor -does not return anything and start with capitel letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`hello bhai ${this.name}`);
// }

// let p1=new Person("kuldeep",21);
// let p2=new Person("ayush",20);
// console.log(p1)
// console.log(p1.talk());
// console.log(p2)
// console.log(p2.talk())


// class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`THIS IS STUDENT ${this.name} DETAILS`)
    }
}
let p1=new Person("kuldeep",21);
console.log(p1);
console.log(p1.talk());
