/*  let, const, and var Difference 
:= The keywords var, let, and const are used to declare variables in JavaScript, 
but they differ in their scope, hoisting behavior, and reassignability.  

  ============ var =========
  :- var declarations are either globally scoped or function-scoped. 
  If declared outside any function, they are global. If declared inside a function, 
  they are local to that function.

  =========== let and const =========== 
  let and const: let and const declarations are block-scoped. 
  This means they are limited to the block (code within curly braces {}) 
  in which they are declared.

  ===========DIFFERENCE BETWEEN let and const =========
  let :- Variables declared with let can be reassigned to a new value 
          after their initial declaration
  
  const :- Variables declared with const cannot be reassigned to a new value 
            after their initial declaration. 
            They are intended for values that remain constant throughout the program.
*/
let a = 10 
const b =20
var c = 30 

console.log(a);
console.log(b);
console.log(c);


var f = 30 

if(true){

    let d = 10 
    const e = 20
    f = 32678
}


//  TRY TO COMMENT BELOW CODE ONE BY ONE TO UNDERSTAND
// console.log(d);
// console.log(e);
console.log(f);

let h = 500
if(true){

    let h = 10 
    const e = 20
    f = 32678
    console.log("Ineer h :- ", h);
    
}

console.log("Outer h :- ", h);
