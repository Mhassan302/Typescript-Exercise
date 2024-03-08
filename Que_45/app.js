"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function cardata(manufacturer, model, options) {
    const carOBJ = Object.assign({ manufacturer: manufacturer, model: model }, (options || {}));
    return carOBJ;
}
const carData1 = cardata(`Toyota`, `Camri`, { color: `red` });
const carData2 = cardata(`Honda`, `Civic`, { features: `Sunroof` });
const carData3 = cardata(`Nissan`, `GTR`, { color: `blue`, type: `Sports` });
console.log(carData1);
console.log(carData2);
console.log(carData3);
