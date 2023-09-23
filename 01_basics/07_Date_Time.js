let myDate = new Date()
// console.log(typeof(myDate))

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

// let myCreatedDate = new Date(2023, 0, 22) // months start from 0 in JS
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 22, 5, 8)
// let myCreatedDate = new Date("2023-09-22")
// let myCreatedDate = new Date("09-22-2023")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getTime())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp / 1000)) //to convert milli seconds into seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)






// newDate.toLocaleString("default", {
//     weekday: "long"
// })
