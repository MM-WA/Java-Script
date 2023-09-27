// for of (gives values of over which it iterates)

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for(let element of arr) {
//     console.log(element)
// }

const greeting = "Hello World!"

for(let char of greeting) {
    // console.log(char)
}

// Map

const map = new Map() // holds key, value pairs and doesn't repeat any thing
map.set("PK", "Pakistan")
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("PK", "Pakistan") // will not repeat

for(const key of map) {
    // console.log(key)
}

for(const [key, value] of map) {
   // console.log(key + ': ' + value)
}

const obj = { // object can't be iterated by for of loop
    game1: "NFS",
    "game2": "Spiderman"
}

// for(const [key, value] of obj) {
//     console.log(key + ': ' + value)
// }