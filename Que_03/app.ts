//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let personName = "ahsan majId hAmEed";

//Step 1 lowercase 

let lowerCaseName: string = personName.toLowerCase()

console.log(`LowerCase : ${lowerCaseName}`);

//Step 2 uppercase

let upperCaseName: string = personName.toUpperCase()

console.log(`UpperCase : ${upperCaseName}`);

//Step 3 titlecase

let titleCaseName = personName.split(" ").map((i: string) => i[0].toUpperCase()+ i.substring(1)).join(" ")

console.log(`TitleCase : ${titleCaseName}`);




