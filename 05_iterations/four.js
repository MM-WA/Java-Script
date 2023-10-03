// for in (gives keys of over which it iterates)

const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for(const key in obj) {
    // console.log(`${key}  is shortcut for ${obj[key]}`) //[] syntex is must
}

const programing = ["cpp", "java", "swift", "python"]

for(const key in programing) {
    // console.log(key)
}

// const map = new Map() // holds key, value pairs and doesn't repeat any thing
// map.set("PK", "Pakistan")
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("PK", "Pakistan")

// for(const key in map) { // map can't be iterated through for in loop
//     console.log(key)
// }

const string = "abcdefghij"
// for(let char in string) {
//     console.log(char)
// }