// declaring symbol
const mysym = Symbol("theKey")
// declaring objects
const Jsuser = {
    "full name": "Ashray prashant yenpreddiwar",
    name: "Ashray",
    age: 18,
    location: "chandrapur",
    email: "ashu@gmail.com",
    [mysym]: "toTheKey" // this is how you declare symbol in objects
}

// printing objects

console.log(Jsuser.email); // here key recognise itself as a string
console.log(Jsuser ["email"]); // in this type yo have to write key as a string 
console.log(Jsuser["full name"]); // it is a best example that why it is need to use this type to print value

// access the symbol 
console.log(Jsuser[mysym]);
console.log(typeof Jsuser[mysym]);

Jsuser.email = "ashray22@gmail.com"
// Object.freeze(Jsuser) // this method lock object and cannot update value further
Jsuser.email = "ashray22@gmail.commm"
console.log(Jsuser)


Jsuser.greeting = function () {
    console.log("hellow JS user");
    
}
Jsuser.greetingTwo = function () {
    console.log(`hellow JS user, ${this.name}`); 
    // "this" keyword is to refrence the same object like here i have to take 'name' of obj
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo());
