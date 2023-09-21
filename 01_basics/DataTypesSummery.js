// Primitive (called by value)

// 7 Types: Number, BigInt, String, Boolean, null, undefined, Symbol


let number = 12
let bigNumber = 57567658588546535635736575n
let name = "Waleed"
let isLoggedIn = true
let outsideTemp = null // empty not 0
let country //undefined
let num1 = Symbol('123')
let num2 = Symbol('123')

// console.log(num1 === num2)



// Refrence (non primitive)

// Array, Objects, Functions

const heros = ["Ali", "Ahmad", "rizwan"]

let myObj = {
    name: "waleed",
    age: 18
}

const myFunction = function() {
    console.log("Hello World")
}


console.log(typeof heros) //object
console.log(typeof myObj) //object 
console.log(typeof myFunction) //function, function object
