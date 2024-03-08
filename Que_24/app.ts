// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

import { log } from "console";

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let Name1: string = `Abdullah`;
let Name2: string = `Ali`;
let Name3: string = `hAsSaN`

//Tests for equality and inequality with strings
console.log(`Is name1 === name2 i predict false`);
console.log(Name1 === Name2);

console.log(`Is name1 !== name2 i predict false`);
console.log(Name1 !== Name2);


//Tests using the lower case function
console.log(`Is name3 === hassan i predict false`);
console.log(Name3 === `hassan`);

console.log(`Is name3(using lower case func) === hassan i predict true`);
console.log(Name3.toLowerCase() === `hassan`);

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 12;
let num2: number = 15;
let num3: number = 12;
let num4: number = 15;

console.log(`Is num1 !== num2 i predict true`)
console.log(num1 !== num2);

console.log(`Is num1 == num2 i predict false`)
console.log(num1 == num2);

console.log(`Is num1 < num2 i predict true`)
console.log(num1 < num2);

console.log(`Is num1 > num2 i predict false`)
console.log(num1 > num2);

console.log(`Is num1 >= num3 i predict true`)
console.log(num1 >= num3);

console.log(`Is num2 <= num1 i predict false`)
console.log(num2 <= num1);

// Tests using "and" and "or" operators
let andNumber1: number = 65;
let andNumber2: number = 79;
let andString1: string = `car`;
let andString2: string = `bike`;

console.log(`using "and" operators`)
console.log(andNumber1 >= 62 && andNumber2 <= 91);
console.log(andString1 == `car` && andString2 == `bycycle`);

console.log(`using "or" operators`)
console.log(andNumber1 >= 91 || andNumber2 <= 91);
console.log(andString1 == `automobile` || andString2 == `bycycle`);


let myArray: number[] = [1,2,3,4,5,6,7,8,9];

let findingIndex: number = 4;
let findingIndex2: number= 11;

//Test whether an item is in a array
console.log(`using .includes to check if item is in array`)
console.log(myArray.includes(findingIndex));
console.log(myArray.includes(findingIndex2));


//Test whether an item is in a array
console.log(`using !(NOT) to check if item is not in array`)
console.log(!myArray.includes(findingIndex2));
console.log(!myArray.includes(2));







