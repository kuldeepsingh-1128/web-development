//convert JSON data into JS
let json='{"fact":"Cats have 32 muscles that control the outer ear (compared to humans 6 muscles each). A cat can rotate its ears independently 180 degrees, and can turn in the direction of sound 10 times faster than those of the best watchdog.","length":226}';
console.log(json);

let vaildres=JSON.parse(json);
console.log(vaildres)
console.log(vaildres.fact)



//convert js data into JSON
let student={
    name:"kuldeep",
    age:21,
};
console.log(student);
let studentJson=JSON.stringify(student);
console.log(studentJson);


//hoppscoth and postman use to fach requist

