function sayMyName() {
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("R")
    console.log("A")
    console.log("Y")
}

sayMyName // this is refrance of function 
sayMyName() // this is execution of function men it show output

function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result
    
}
const result = addTwoNum(3, 5)
console.log("result: ", result);


function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Ashu"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


function loginUserMessage1(username = "mona") {
    return `${username} just logged in`
}

console.log(loginUserMessage1());


function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,3998,435)); //in this case only 200 will print 

// rest operator : it is as like spread operator "..." three dots

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200, 300, 400));


function calculateCartPrice2(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 500, 600));


const user = {
    username: "Ashu",
    price: 424
}

// how to pass object in to function and use it

function handelObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handelObject(user)

// or you can also pass object directly 

handelObject({
    username: "sam",
    price: 399
})

// You can also pass array like this 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArry) {
    return getArry[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([243, 435,63,4653]))