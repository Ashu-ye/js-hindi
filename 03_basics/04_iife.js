// Immediately Invoke Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE, pronounced "iffy") in JavaScript is a function that is defined and executed immediately after its creation. It is a common pattern used to create a private scope for variables, preventing them from polluting the global scope. 

// this iife is called name iife
(function chai() {
    console.log(`DB CONNECTED`);
    
} )(); //Note:- here you have to use semicolen ";" at the end its compulsory otherwise it throw error if you write multiple iife 

// using arrow function
// this iife is called unnamed iife
(()=> {
    console.log("the connection");
    
}) ();

// passing parameter
((name)=> {
    console.log(`DB CONNECTED ${name}`);
    
}) ("BeastASHU");
