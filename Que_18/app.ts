// Seeing the World: Think of at least five places in the world you’d like to visit.

let placeToVisit: string[] = [`Tokyo`, `Los angeles`, `Mumbai`, `Rome`, `Venus`];

// Print your array in its original order.
console.log(placeToVisit);

//Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical order`, [...placeToVisit].sort());

//Show that your array is still in its original order by printing it.
console.log(`Original order after sorting`, placeToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabetical order`, [...placeToVisit].sort().reverse());

//Show that your array is still in its original order by printing it.
console.log(`Original order after reverse sorting`, placeToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.

placeToVisit.reverse();

console.log(`Reversing the array`, placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

placeToVisit.reverse();

console.log(`Reversing back to original form`, placeToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

placeToVisit.sort();

console.log(`Stored in alphabetical order`, placeToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

placeToVisit.sort((a, b)=> b.localeCompare(a));

console.log(`Stored in reverse alphabetical order`, placeToVisit);

