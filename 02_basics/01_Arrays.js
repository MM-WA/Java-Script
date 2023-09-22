const arr = [1, 2, 3, 4, 5]
const arr2 = ["Mian", "Muhammad", "Waleed", "Asif"]

const arr3 = new Array(1, 2, 3, 4, 5)
// console.log(arr3[3])


// Array methods
// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr.includes(3))
// console.log(arr.indexOf(4))

// const newArr = arr.join()
// console.log(newArr)
// console.log(arr)


// slice, splice

console.log("A ", arr)

let myn1 = arr.slice(1, 3)
console.log(myn1)

console.log("B ", arr)


let myn2 = arr.splice(1, 3) // removes the specified range from origional array
console.log(myn2)

console.log("C ", arr)

