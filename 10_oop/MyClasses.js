// // ES6

// class User {
//     constructor(userName, email, password) {
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     displayPassword() { //in classes we dont need "function" keyword to declear a function
        
//         // console.log(this.password) //this will display password and then undefined
//         return this.password
//     }

//     changeUserName() {
//         return this.userName.toUpperCase()
//     }
// }


// const chai = new User("Chai", "chai@fb.com", "123")

// // console.log(chai.displayPassword())
// console.log(chai.changeUserName())





// Behinde The Scenes

function User(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.displayPassword = function() {
    return this.password
}

User.prototype.changeUserName = function() {
    return this.userName.toUpperCase()
}


const tea = new User("tea", "chai@fb.com", "123")

console.log(tea.displayPassword())
console.log(tea.changeUserName())