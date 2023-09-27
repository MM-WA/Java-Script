// for each

const coding = ["c++", "java", "ruby", "python", "Js"]

// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach((val) => {
//     console.log(val)
// })

// function print(item) {
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const coding2 = [
    {
        languageName: "c++",
        fileName: ".cpp"
    },
    {
        languageName: "javascript",
        fileName: ".js"
    },
    {
        languageName: "python",
        fileName: ".py"
    }
]

coding2.forEach((item) => {
    console.log(item.languageName)
})