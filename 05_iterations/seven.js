// arr.map()

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = numArr.map((num, index, arr) => {
//     // console.log(num, index, arr)
//     return num + 10
// })


//chaining
const newNums = numArr // in chaining 1st method pass values to 2nd and so on
                      .map((num) => num * 10) 
                      .map((num) => num + 1)
                      .filter((num) => num >= 40)
console.log(newNums)

