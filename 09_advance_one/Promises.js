// Promise, Async-Await, fetch

// 01
// const promiseOne = new Promise(function(resolve, reject) {
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function() {
//         console.log("Async task is completed")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log("Promise resolved")
// })


// 02
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2")
//         resolve()
//     }, 1000)

// }).then(function() {
//     console.log("Promise 2 completed")
// })


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({userName: "Waleed", email: "waleed@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         if(!error) {
//             resolve({userName: "Waleed", password: "123"})
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 3000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.userName
// }).then((username) => {// Chaining, this will get what previous is returning
//     console.log(username)
// }).catch(function(error) {
//     console.log(error)
// }).finally(() => console.log("The promise is either resolve or rejected."))


// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         if(!error) {
//             resolve({userName: "JavaScript", password: "123"})
//         } else {
//             reject("ERROR: JavaScript went wrong.")
//         }
//     }, 1000)
// })


// 03
// async function consumePromiseFive() {
//     const result = await promiseFive
//     console.log(result)
// } //error can't be handeled in this way


// async function consumePromiseFive() {
//     try {
//         const result = await promiseFive
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const result = await response.json()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()


// 04
fetch("https://jsonplaceholder.typicode.com/users") //returns a promise
.then(function(response) {
    return response.json()
})
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


