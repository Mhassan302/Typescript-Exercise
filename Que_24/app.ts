// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

import { log } from "console";

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let person1: string = `Abdullah`;
let person2: string = `Ali`;
let person3: string = `hAsSaN`

//Tests for equality and inequality with strings
console.log(`Is person1 === person2 i predict false`);
console.log(person1 === person2);

console.log(`Is person1 !== person2 i predict false`);
console.log(person1 !== person2);


//Tests using the lower case function
console.log(`Is person3 === hassan i predict false`);
console.log(person3 === `hassan`);

console.log(`Is person3(using lower case func) === hassan i predict true`);
console.log(person3.toLowerCase() === `hassan`);

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1: number = 12;
let number2: number = 15;
let number3: number = 12;

console.log(`Is number1 !== number2 i predict true`)
console.log(number1 !== number2);

console.log(`Is number1 == number2 i predict false`)
console.log(number1 == number2);

console.log(`Is number1 < number2 i predict true`)
console.log(number1 < number2);

console.log(`Is number1 > number2 i predict false`)
console.log(number1 > number2);

console.log(`Is number1 >= number3 i predict true`)
console.log(number1 >= number3);

console.log(`Is number2 <= number1 i predict false`)
console.log(number2 <= number1);

// Tests using "and" and "or" operators
let andNumber1: number = 65;
let andNumber2: number = 79;
let andString1: string = `plane`;
let andString2: string = `bike`;

console.log(`using "and" operators`)
console.log(andNumber1 >= 62 && andNumber2 <= 91);
console.log(andString1 == `plane` && andString2 == `bycycle`);

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







