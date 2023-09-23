// singleton
// Object.create


// object literals
let mySym = Symbol("keys")

let user = {
    [mySym]: "key1", // to define Symbol as user property
    name: "Waleed",
    age: 18,
    "email": "waleed@gmail.com",
    location: "Lahore",
    isLoggedIn: false,
    daysLoggedIn: ["Monday", "Wednesday"],
}

// console.log(user.name)
// console.log(user["email"])
// console.log(user[mySym]) // to access symbol as user property  

user.email = "waleed@hotmail.com"
// console.log(user["email"])

// Object.freeze(user) //will not propogate any change in object

// console.log(user)

user.greeting = function() {
    console.log("Hello User!")
}

user.greeting2 = function() {
    console.log(`Hello User!, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greeting2())
