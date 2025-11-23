// Arrow Function 
/*
Arrow function():- 
An arrow function in JavaScript is a concise syntax for writing function expressions, introduced in ECMAScript 2015 (ES6). It offers a shorter way to define functions compared to traditional function expressions, particularly useful for simpler, single-line operations or when passing functions as arguments to other functions.
*/

// .this keyword
/**
 .this :-  In JavaScript, the this keyword is a special identifier that refers to the context in which a function is called or a piece of code is executed. Its value is dynamic and determined at runtime, depending on how the function or code block is invoked. 

 */

const user = {
    username: "ashu",
    price: 999,
    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
        
    }    
}

user.welcomeMessage()
// what happen if we change the value of username 
user.username = "mona"
user.welcomeMessage()


// now lets take another example for .this keyword

const user1 = {
    username: "ashu",
    price: 999,
    welcomeMessage1 : function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this) // comment this line and run the code
    }    
}

user1.welcomeMessage1() // and also comment this line
console.log(this); 
/*so here in line 40 when you print "this" it shows empty string but in browser if you run this console.log(this) 
 it show window why this happen because earlier days there is only one way to execute/ learn JS is browser 
 but nowadays we pick the engin in which we execute JS from browser and make give them names like nodeJS deno , bun etc
 and thats why in browser it reffers to window object but in nodejs it gives empty object "{}"
*/


// function chai() {
//     console.log(this);
    
// }
// chai()

// const chai = function () {
//     let username = "ash"
//     console.log(this)
// }
// chai()
// when you print this in function in node environment you get many values why just do google or chatgpt or perplexcity

const chai = () => {
    let username = "ash"
    console.log(this)
}
chai()


// Arrow function syntax with example
// ex1 basic arrow function
const addTwo = (num1 , num2)=> {
    return num1 + num2
}
console.log(addTwo(3,5));

// ex2 implicite return
 /** 
  In JavaScript, an implicit return is a feature of arrow functions (=>) that allows a function to return a value automatically without using the explicit return keyword. This syntax makes code more concise for simple, single-expression functions. here you dont have to use {} and "return" keyword
  NOTE:- implicite return is only use for one line code 
 */
const addthree = (num1 , num2) => num1 + num2 

// Or you can also writ it with () here also you dont have to use return keyword
const addthree1 = (num1 , num2) => (num1 + num2 ) //this technique is mostly use in react 


// how to return object in implicite function 

const addFour = () => ({username : "Akash"})
console.log(addFour());

// what happen if you try to return object without using ()
const addFour1 = () => {username : "Akash"}
console.log(addFour1());


const myarray = [1,3,45,6,7]