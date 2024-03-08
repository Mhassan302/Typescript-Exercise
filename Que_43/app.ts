// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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


function make_great(magicianNames: string[]): string[] {

    const greatMagicians: string[] = magicianNames.slice();

    greatMagicians.forEach((element, index, array) => {
        array[index] = `the Great Magician ${element}`;
    });

    return (greatMagicians);

}

const greatMagicians: string[] = make_great(magicianNames)

console.log(`\t Original Array`)
console.log();
show_magicians(magicianNames)

console.log(`\n\tModified Array`)
console.log();
show_magicians(greatMagicians)



