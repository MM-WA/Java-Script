class User {
    constructor(userName) {
        this.username = userName
    }

    logMe() {
        comnsole.log(`Username is ${this.username}`)
    }

    static createId() { //this will not be available to any instance or child class of this class
        return "123" //suppose this is creating unique id for every instance
    }
}


const waleed = new User("Waleed")

// console.log(waleed.createId())


class Teacher extends User{
    constructor(userName, eamil) {
        super(userName)
        this.email = eamil
    }
}

const hassan = new Teacher("Hassan", "H@gmail.com")

// console.log(hassan.createId())

