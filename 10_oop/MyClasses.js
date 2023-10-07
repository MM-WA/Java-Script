// ES6

class User {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    displayPassword() { //in classes we dont need "function" keyword to declear a function
        
        // console.log(this.password) //this will display password and then undefined
        return this.password
    }
}


const chai = new User("Chai", "chai@fb.com", "123")
console.log(chai.displayPassword())