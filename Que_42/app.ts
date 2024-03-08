// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = [
    "Merlin Mystique",
    "Seraphina Spellbound",
    "Enigma the Enchanter",
    "Astral Alaric",
    "Mystica Mirage"
];

show_magicians(magicianNames);

//(Start of Question 42)Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicianNames: string[]): void {
    magicianNames.forEach((element, index, array) => {
        array[index] = `the Great Magician ${element}`;
    });
}

make_great(magicianNames);

console.log()
show_magicians(magicianNames);

