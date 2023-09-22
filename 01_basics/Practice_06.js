// Primimitive (call by value)

// 7 types: Number, BigInt, String, Boolean, null, undefined, Symbol


let number = 34
let bigInt = 4354656756745645364564n
let string = "Waleed"
let boolean = true
let temperature = null
let name = undefined
let id = Symbol("123")

// console.log(typeof(id))

// Refrence (non primitive)

// Object, Array, Function

let obj = {
    name: "Waleed",
    email: "waleed@gmail.com"
}

let heros = ["Ali", "Ahmad", "Arbaz"]

myFun = function() {
    console.log("I am funtion")
}

// console.log(typeof(obj))
// console.log(typeof(heros))
// console.log(typeof(myFun))

// *********************** Memory *******************************

let number1 = 55
let number2 = number1
number2 = 65

// console.log(number1)
// console.log(number2)

let obj1 = {
    name: "Muhammad",
    email: "m@gmail.com"
}

let obj2 = obj1

obj2.name = "Mian"

// console.log(obj1)
// console.log(obj2)

// **************************** String ******************************

const name1 = "Waleed"
let repoCount = 5

// String interpolation
// console.log(`My name is ${name1} and my repo count is ${repoCount} `)

const name2 = new String("Mian-Muhammad-Waleed-Asif")

// console.log(name2.length)
// console.log(name2.toUpperCase())
// console.log(name2.toLowerCase())
// console.log(name2.substring(0,4))
// console.log(name2.slice(-4, -1))
// console.log(name2.indexOf('W'))
// console.log(name2.charAt(8))

const name3 = "    Waleed    "
// console.log(name3)
// console.log(name3.trim())

const url = "https://waleed.com/waleed%20asif"
console.log(url.includes("%20"))
console.log(url.replace("%20", '-'))

