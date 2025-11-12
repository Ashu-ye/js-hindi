// ============================ Numbers =================================

const score = 400 // here Js automatically define that it is a number 
console.log(score);

const ssccoorree = new Number(2354) // here you specifically define that it is a number
console.log(ssccoorree);



console.log(ssccoorree.toString().length); //it change into string and return the length of string
console.log(ssccoorree.toFixed(2)); //it gives two value after decimal point

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // by default it set in to American standards 
console.log(hundreds.toLocaleString('en-IN')) 



// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs()); /* A numeric expression for which the absolute value is needed. 
Returns the absolute value of a number 
(the value without regard to whether it ispositive or negative). 
For example, the absolute value of -5 is the same as the absolute value of 5. */

console.log(Math.round(32.5));
console.log(Math.min(4,7,8,34,87,9));
console.log(Math.max(4,7,8,34,87,9));
console.log(Math.random());





