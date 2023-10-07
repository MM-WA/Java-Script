onst promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         if(!error) {
//             resolve({userName: "Waleed", password: "123"})
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.userName
// }).then((username) => {// Chaining, this will get what previous is returning
//     console.log(username)
// }).catch(function(error) {
//     console.log(error)
// }).finally(() => console.log("The promise is either resolve or rejected."))

// c