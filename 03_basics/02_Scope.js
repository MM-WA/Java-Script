// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const userName = "Waleed"

    function two() {
        const website = "youtube"
        console.log(userName)
    }

    // console.log(website)

    two()
}

// one()

if(true) {
    const userName = "Waleed"

    if(userName === "Waleed") {
        const website = " youtube"
        // console.log(userName + website)
    }

    // console.log(website)
}
// console.log(userName)



// ******************** Interesting ************************


addone(5) // no error
function addone(num) {
    return num + 1
}

// addone(5)

addTwo(5) // error
const addTwo = function(num) {
    return num + 1 
}

// addTwo(5)