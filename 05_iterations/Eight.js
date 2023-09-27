// arr.reduce()

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (accumulater, currentValue) {
//     console.log(`acc: ${accumulater} and currVal: ${currentValue}`)
//     return accumulater + currentValue
// }, 0) // initialized accumulater

// const myTotal = myNum.reduce((acc, currVal) => (acc + currVal), 0)

const myTotal = myNum.reduce((acc, currVal, index, arr) => {
    // console.log(currVal, index, arr)
}, 0)

// console.log(myTotal)

let shoppingCart = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
    {
        itemName: "data science course",
        price: 7999
    },
    {
        itemName: "py course",
        price: 4999
    }
]

let totalBill = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalBill)