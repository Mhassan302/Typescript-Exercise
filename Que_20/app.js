"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
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
console.log(`\nAlso Other Countries i would like to visit ${splicedArray} and ${myArray2[4]}`);
