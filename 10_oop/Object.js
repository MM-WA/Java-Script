function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.value = 4 // at end everything in JS is almost object
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.value)
// console.log(multiplyBy5.prototype)


function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.incriment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 125)

chai.printMe()