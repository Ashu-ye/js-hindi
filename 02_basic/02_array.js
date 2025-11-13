const marvel_heros = ["thor", "Ironnan", "spiderman"]
const dc_hero = ["superman", "flash", "batman"]

/*
marvel_heros.push(dc_hero) // it merge dc_hero as an element means that array is a 4th element in marvel_heros
console.log(marvel_heros)
*/

/*
const allHeros = marvel_heros.concat(dc_hero) 
console.log(allHeros) // to run this code properly first comment above code 
*/

/*
following is an example of spread operator yo use spread operator you have to use ...var_name
its bacilly like a .concat method but most of developers use spread method to seprate array 
*/
const all_new_hero = [...marvel_heros , ...dc_hero]
console.log(all_new_hero);


// .flat property 
/*
the .flat() method is used to flatten nested arrays. 
This means it takes an array that contains other arrays as elements 
and combines them into a single, one-dimensional array. 
*/
const another_array = [1, [2, 3], [4, [5, 6]]];
const real_another_array = another_array.flat(2)
console.log(real_another_array)
/**
here 3 is the depth of array you want to sort
you can also write "Infinity" except of number like below example 
*/
const real_another_array1 = another_array.flat(1) //
console.log(real_another_array1)

const real_another_array2 = another_array.flat(Infinity)
console.log(real_another_array2)



// .isArray :- it is use to ask is given value is array or not
console.log(Array.isArray("Ashray"));
console.log(Array.isArray(dc_hero));

// .from :- it is use to make string or value in to array
console.log(Array.from("Monali"));
nary = Array.from("monali")
console.log(Array.isArray(nary))


console.log(Array.from({name: "Ishwar"})); 
/*
this is an intresting case here you take object so for that you have to define that which array 
you have to make is it of key array or of value array thats why it give empty string
*/

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3))

