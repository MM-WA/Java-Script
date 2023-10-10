class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe() {
        console.log(`User Name is: ${this.userName}`)
    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        //other way is:
        // super()
        // this.userName = userName
        this.email = email
        this.password = password
    }

    addCourse() {
        return `Course was added by ${this.userName}`
    }
}

const ali = new Teacher("ali", "a@gmail.com", "123")

// console.log(ali.addCourse())
// ali.logMe()

const ahmad = new User("Ahmad")
ahmad.logMe()

console.log(ali instanceof Teacher)
console.log(ahmad instanceof User)