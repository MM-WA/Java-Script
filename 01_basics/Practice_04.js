"use strict" // treate all JS code as newer version

// alert(3 + 3) // we are using nodejs not browser

console.log(3
    +
    3) // code readibility should be high


// number
// bigint
// string => ""
// boolean
// null => standalone value
// undefined
// symbol => for uniqueness

// object

// console.log(typeof null) //object
// console.log(typeof(undefined)) //undefined



// ********************* ConversionOperations ************************

let score = undefined

let numberScore = Number(score)

// console.log(typeof(numberScore))
// console.log(numberScore)


// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "waleed"

let numIsLoggedIn = Boolean(isLoggedIn)


// console.log(typeof numIsLoggedIn)
// console.log(numIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "waleed" => true


// ************************** Operations ****************************

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")