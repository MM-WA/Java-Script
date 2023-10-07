// (function + array + string) -> object -> null

// let myName = "Waleed      "
// let myName = "Chai      "

// console.log(myName.trueLength)


let Heros = ["thor", "spiderman"]
let string = "Waleed"

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.waleed = function() {
    console.log("Waleed is present in all objects.")
}// a prototype assigned to Object will be present for fun, arr, string
// as every thing is object in JS at the end

Array.prototype.heywaleed = function() {
    console.log(`Waleed says hello`)
}

// heroPower.waleed()
// Heros.waleed()
// string.waleed()

// Heros.heywaleed()
// heroPower.heywaleed() // will give error



// Inheritence

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport // inherting teachingSupport properties in TASupport
                              // (prototypal inheritence)
}

// Teacher.__proto__ = User

// modern syntex of prototypal inheritence
// Object.setPrototypeOf(Teacher, User)

let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

// anotherUserName.trueLength()
// "Waleed".trueLength()
// "iceTea".trueLength() //(autoboxing)JS converts primitive dataTypes into objects if necessary

// console.log(Teacher.name)


// Teacher.__proto__.test = "I am test."
console.log(Teacher.__proto__)