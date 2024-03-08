// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface car{
    manufacturer: string;
    model: string;
    color?: string;
    feature?: string;
}

function cardata(manufacturer: string, model: string, options?:Record<string, any>): car{
    const carOBJ: car = {
        manufacturer: manufacturer,
        model: model,
        ...(options || {})
    }
    return carOBJ
} 

const carData1: car = cardata(`Toyota`, `Camri`, {color: `Red`})
const carData2: car = cardata(`Honda`, `Civic`, {features: `Sunroof`})
const carData3: car = cardata(`Nissan`, `GTR`, {color: `Blue`, type:`Sports`})

console.log(carData1)

console.log(carData2)

console.log(carData3)
