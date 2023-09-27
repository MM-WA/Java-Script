const user = {
    userName: "waleed",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage() 

// console.log(this) // in browser global object is window


// function chai() {
//     let userName = "waleed"
//     console.log(this)
// }

// chai()

// const chai = function() {
//     let userName = "waleed"
//     console.log(this.name)
// }

// chai()

const chai = () => {
    let userName = "waleed"
    console.log(this)
}

chai()

// 

// const addTwo = (num1, num2) => num1 + num2 // implicit return 
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({userName: "waleed"})//object must be returned in paranthesis in implicit return

console.log(addTwo(4, 5))