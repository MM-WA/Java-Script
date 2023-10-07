// object literal

const user = {
    userName: "Waleed",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database.")
        // console.log(`UserName: ${this.userName}`)
        console.log(this)
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)


// constructor function

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.userName}`)
    }

    return this
}


const userOne =  new User("Muhammad", "5", true)
const userTwo = new User("Ahmad", "5", false) // Override userOne without new in both instanceses
const userThree = new User() 

// console.log(userOne)
// console.log(userTwo)
// console.log(userThree)

console.log(userOne.constructor) // tells who is constructor of userOne
console.log(userOne instanceof User)