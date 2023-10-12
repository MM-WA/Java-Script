function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        set: function(value) {
            this._email = value.toUpperCase()
        },

        get: function() {
            return this._email.toString()
        }
    })

    Object.defineProperty(this, "password", {
        set: function(value) {
            this._password = value
        },

        get: function() {
            return this._password
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email)

chai.email = "abc@d.com" //now the setter will be triggered