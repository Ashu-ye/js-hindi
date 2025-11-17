
const tinderUser = {}

tinderUser.is = "123abc"
tinderUser.name = "Monali"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ashu",
            lastName: "Yenpreddiwar"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstName);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj7 = {5: "c", 6: "d"}

const obj3 = {obj1 ,obj2}
console.log(obj3);




// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);
const obj4 = Object.assign({}, obj1,obj2) // both are correct but this method is good for practic
console.log(obj4); // go to mdn doc to understad more about it


const obj5 = {...obj1, ...obj2} // you always use this type of syntax
console.log(obj5)

// when objects comes from data base then you access data like following

const user = [ // this is an array seprated object comes form database
    {
        id:1,
        email: "da@WebGLVertexArrayObject.com"
    },
    {
        id:1,
        email: "da@WebGLVertexArrayObject.com"
    },
    {
        id:1,
        email: "da@WebGLVertexArrayObject.com"
    },
    {
        id:1,
        email: "da@WebGLVertexArrayObject.com"
    }
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this method tells you if given property exit or not
console.log(tinderUser.hasOwnProperty('isLogged'));


// Destructring of object 

const course = {
    coursename: "js in practic",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor} = course //here you assign  courseInstructor as an variable which you directly use as a variable 
const {courseInstructor: instructor} = course  // from now you write " instructor" except courseInstructor this is caled Destructring of object
console.log(instructor);

