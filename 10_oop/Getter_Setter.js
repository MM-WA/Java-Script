class User {
    constructor(email, password) {
        this._email = email
        this._password = password
    }

    set email(value) { //max call stack size overflow will occur if props and method has same names
        this._email = value
    }

    get email() {
        return this._email.toUpperCase()
    }

    set password(value) {
        this._password = value
    }

    get password() {
        return this._password.toUpperCase()
    }
} 

const waleed = new User("w@gmail.com", "abc")

console.log(waleed.password)