const name = "Waleed "
const repoCount = 3

// console.log(name + repoCount)

// string interpolation
// console.log(`My name is ${name}and my repo count is ${repoCount}`) 

const name1 = new String("Waleed")
// console.log(name1[0])
// console.log(name1.__proto__)

// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('l'))

// const name2 = name1.substring(0, 4)
// console.log(name2)

const name3 = name1.slice(-4) // leed //A negative position allows
                                     // you to determine a position 
                                     // relative to the end of the string
                                     // -1 -> d, -2 -> e, -3 -> e and so on 
console.log(name3)

const name4 = name1.slice(-4, -2)
console.log(name4) // le


const string1 = "   Waleed    "
console.log(string1)
console.log(string1.trim())

const url = "https://waleed.com/waleed%20asif"
console.log(url.replace("%20", "-"))


console.log(url.includes("waleed"))


const string2 = "Mian-Muhammad-Waleed-Asif"
console.log(string2.split("-", 2))


