const User = {
    _email: "w@gmail.com",
    _password: "abc",

    set email(value) {
        this._email = value
    },

    get email() {
        return this._email.toUpperCase()
    }
}

const tea = Object.create(User) //will create object from specified object
console.log(tea.email)

const chai = Object.create(tea)
console.log(chai.email)

//here user is a prototype for tea and tea is a prototype for chai. Thus forms
//a prototype chain