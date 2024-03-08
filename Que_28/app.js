"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAge = 19;
if (personAge < 2) {
    console.log(`The person is a baby.`);
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a Teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is a elder.");
}
