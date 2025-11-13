// Dates

let myDate = new Date()
console.log(myDate)
console.log(typeof myDate); // date is a object in Js

// following are the methods to simplicite the date in readible mannar
console.log("to date string: " + myDate.toDateString());
console.log("to ISO string: " +myDate.toISOString());
console.log("to JSON: " +myDate.toJSON());
console.log("to Local date string: " +myDate.toLocaleDateString());
console.log("to local string: " +myDate.toLocaleString());


// this is how you declare your own date and time
let myOwnDate = new Date(2025, 3, 5)
console.log(myOwnDate.toLocaleString());
let myOwnDate1 = new Date("2024-04-07")
console.log(myOwnDate1.toLocaleString());
let myOwnDate2 = new Date("02-05-2022")
console.log(myOwnDate2.toLocaleString());
let myOwnDate3 = new Date(2025, 3, 5)
console.log(myOwnDate3.toLocaleString());

// Time stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myOwnDate.getTime());
console.log(Math.floor(Date.now()/1000));
