// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//I used a titlecase function to capitalize first letter of every word it was not mandatory 
function toTitleCase(inputString: string): string{
        return inputString.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  });
}


console.log();
function city_country(city: string, country: string):string {

        const formattedCity = toTitleCase(city);
        const formattedCountry = toTitleCase(country);
        return `${formattedCity}, ${formattedCountry}`

}

const city_country1: string =  city_country(`tokyo`, `japan`);

const city_country2: string =  city_country(`rio da Janerio`, `brazil`);

const city_country3: string =  city_country(`paris`, `france`);

console.log(city_country1);
console.log(city_country2);
console.log(city_country3);


//The simpler code without adding a titlecase function

// function cityCountry(city2:string, country2:string):string{
//     return `${city2}, ${country2}`;
// }
// cityCountry(`Tokyo`, `Japan`);
// cityCountry(`rio da Janerio`, `brazil`);
// cityCountry(`paris`, `france`);
