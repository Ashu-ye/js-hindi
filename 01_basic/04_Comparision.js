console.log(2>1)
console.log(2<1)
console.log(2<=1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


//  ===
console.log("2" === 2)


// Array , Object , Function

const hero = ["Shaktiman", "Krish", "Nagraj"]

let myObj = {
    name: "Ashu",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World")
}



/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


// ++++++++++++++++++++++++++++++++
// stack (Primitive) , Heap(Non-primitive)
let myName = "AshrayYenpreddiwar"
let anothernam = myName

anothernam = "Monali"
console.log(anothernam);
console.log(myName);

let userOne = {
    email: "lala@gmail.com",
    upi: "user@bkikl"
}
let userTwo = userOne
console.log(userOne.email);
console.log(userTwo.email);


userTwo.email = "bala@gmail.ccommm"

console.log(userOne.email);
console.log(userTwo.email);

