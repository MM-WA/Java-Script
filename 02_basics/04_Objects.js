// const tinderUser = new Object() // singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Waleed"
tinderUser.age = 18

// console.log(tinderUser)

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Waleed",
            lastName: "Asif"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //(targetObj, sourceObjects)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

let users = [
    {
        name: "Waleed",
        email: "w@gmail.com"
    },

    {
        name: "Asif",
        email: "a@gmail.com"
    }
]

// console.log(users[1].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

 // Object Destructuring

 const course = {
    courseName: "Js",
    coursePrice: "999",
    courseInstructor: "Waleed"
 }

//  console.log(course.courseInstructor)

// const {courseInstructor} = course
// const {courseInstructor: instructor} = course
// console.log(instructor)

 

// json
// {
//     "name": "Waleed",
//     "email": "waleed@gmail.com"
// }

// or

// [
//     {},
//     {},
// ]