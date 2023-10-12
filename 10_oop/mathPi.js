const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true


}

const chaiPropertyDescriptor = Object.getOwnPropertyDescriptor(chai, "name")
console.log(chaiPropertyDescriptor)

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })

// const chaiPropertyDescriptor_1 = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(chaiPropertyDescriptor_1)


// for(let [key, value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`)
// }


