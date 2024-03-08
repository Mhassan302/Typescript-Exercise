"use strict";
// //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Using program from Question no 20/Que_20
let myArray = [`Japan`, `Tokyo`, `Incredible food`, `Torii Gates`];
myArray.splice(3, 0, `Mount Fuji`);
console.log(`things I love about`, myArray[0]);
let startOfArray = 1;
myArray.slice(startOfArray).forEach(Element => {
    console.log(Element);
});
let ifManga = myArray.indexOf(`Manga`);
if (ifManga === -1) {
    console.log(`Ohh, i forgot to add Manga`);
}
;
let myArray2 = [` Germany`, ` South Korea`, ` England`, `India`];
myArray2.splice(1, 0, ` Turkey`);
let splicedArray = myArray2.slice(0, 4);
//Intentionally throwing a error
console.log(`\nAlso Other Countries i would like to visit ${splicedArray} and ${myArray2[5]}`);
//Fixing the error
console.log(`\nAlso Other Countries i would like to visit ${splicedArray} and ${myArray2[4]}`);
