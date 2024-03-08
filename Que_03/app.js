//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
var personName = "Muhammad hassan majid";
//Step 1 lowercase 
var lowerCaseName = personName.toLowerCase();
console.log("LowerCase : ".concat(lowerCaseName));
//Step 2 uppercase
var upperCaseName = personName.toUpperCase();
console.log("UpperCase : ".concat(upperCaseName));
//Step 3 titlecase
var titleCaseName = personName.split(" ").map(function (i) { return i[0].toUpperCase() + i.substring(1); }).join(" ");
console.log("TitleCase : ".concat(titleCaseName));
