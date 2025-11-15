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

const obj3 = {obj1 ,obj2}
console.log(obj3);




// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);
const obj4 = Object.assign({}, obj1,obj2) // both are correct but this method is good for practic
console.log(obj4); // go to mdn doc to understad more about it


const obj5 = {...obj1, ...obj2} // you always use this type of syntax
console.log(obj5)