"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation = ['Bugatti', 'Lamborghini', 'Tesla', 'Honda'];
for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`I would like to own a ${favoriteTransportation[i]} car`);
    if (favoriteTransportation[i] === 'Tesla') {
        break;
    }
}
console.log(`I would like to own a ${favoriteTransportation[3]} motorcycle`);
