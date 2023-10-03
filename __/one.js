function sayWaleed() {
    console.log("Waleed")
}

const fun1 = setTimeout(sayWaleed, 2000)

clearInterval(fun1)

function greeting(str) {
    console.log(str)
}

const fun2 = setInterval(greeting, 3000, "Hello")

clearInterval(fun2)

