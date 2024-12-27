// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3453546456564546445n

 console.log(typeof bigNumber);
 

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["zaid", "nauman", "farhan"]

let myObj = {
    name:"nauman",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);


// -----------------------------------

// Srack (Primitive),Heap (non Primitive)


let myYoutubeName = "Baber Azam"

let anotherName = myYoutubeName
anotherName = "Nauman Akhtar"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "nauman@gmail.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "akhtar@gmail.com"

console.log(usertwo);
console.log(userOne);

