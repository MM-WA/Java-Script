function sayMyName() {
    console.log("W")
    console.log("A")
    console.log("L")
    console.log("E")
    console.log("E")
    console.log("D")
}

// sayMyName()

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNums(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}

let result = addTwoNums(3, 6)
// console.log("Result: ", result)


function loginUserMessage(userName = "Sam") {
    if(!userName) {
        console.log("Please enter a username")
        return
    }

    return `${userName} just logged in`
}

// console.log(loginUserMessage("Waleed"))
// console.log(loginUserMessage()) //undefined
// console.log(loginUserMessage("Waleed"))


function calculateCartPrice(val1, val2, ...num1) { // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 1000))

const user = {
    name: "Waleed",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    name: "Waleed",
    price: 199
})


const arr = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(arr))
console.log(returnSecondValue([200, 300, 400, 500]))