// Seeing the World: Think of at least five places in the world you’d like to visit.

let visitPlaces: string[] = [`Singapore`, `New York city`, `South Korea`, `Makkah`, `Moscow`];

// Print your array in its original order.
console.log(visitPlaces);

//Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical order`, [...visitPlaces].sort());

//Show that your array is still in its original order by printing it.
console.log(`Original order after sorting`, visitPlaces);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabetical order`, [...visitPlaces].sort().reverse());

//Show that your array is still in its original order by printing it.
console.log(`Original order after reverse sorting`, visitPlaces);

// Reverse the order of your list. Print the array to show that its order has changed.

visitPlaces.reverse();

console.log(`Reversing the array`, visitPlaces);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

visitPlaces.reverse();

console.log(`Reversing back to original form`, visitPlaces);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

visitPlaces.sort();

console.log(`Stored in alphabetical order`, visitPlaces);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

visitPlaces.sort((a, b)=> b.localeCompare(a));

console.log(`Stored in reverse alphabetical order`, visitPlaces);

