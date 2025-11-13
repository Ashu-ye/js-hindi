// DECLARING ARRAYS
const myArr = [0,1,4,5,7]
const myHeros = ["Shaktiman", "Spiderman", "Batman"]
const newArry = new Array(1,4,6,7,4,6)

// console.log(myArr[2]);
// console.log(myHeros[1]);
// console.log(newArry[4]);

// Array methods

myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(55)
console.log(myArr);
myArr.shift()
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(6))
console.log(myArr.includes(1))
console.log(myArr.indexOf(3))
console.log(myArr.indexOf(7))

const theArry = myArr.join()
console.log(myArr);
console.log(typeof myArr);
console.log(theArry);
console.log(typeof theArry);

// slice , splice

console.log("A" , myArr)
const myary = myArr.slice(1,3)
console.log(myary);
console.log("a" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("a" , myArr);


