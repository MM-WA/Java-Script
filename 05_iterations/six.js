// arr.filter()

// const coding = ["c++", "java", "ruby", "python", "Js"]

// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item // forEach doesn't return anything
// })

// console.log(values)

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let returnedNums = numArr.filter((num, index, arr) => {
    // console.log(num, index, arr)
    return num > 4
})

console.log(returnedNums)

// let returnedNums = []
// numArr.forEach((num) => {
//     if(num > 4) {
//         returnedNums.push(num)
//     }
// })

// console.log(returnedNums)
 
