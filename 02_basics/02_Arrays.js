let arr1 = ["Ali", "Ahmad", "Anwar", "Haseeb"]
let arr2 = ["Salman", "Wasti", "Mohid", "Mudasser"]

// arr1.push(arr2)
// console.log(arr1)
// console.log(arr1[4][0])

// let allName = arr1.concat(arr2)
// console.log(allName)

// let newAllName = [...arr1, ...arr2] // spread operator
// console.log(newAllName) 

// let arr3 = [1, 2, 3, 4, [5, 6], 7, [3, 5, [8, 9]]]
// let arr3Result = arr3.flat(Infinity)
// console.log(arr3Result)

console.log(Array.isArray("Waleed"))
console.log(Array.from("Waleed"))
console.log(Array.from({name: "Waleed"})) // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
