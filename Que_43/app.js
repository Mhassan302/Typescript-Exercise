"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
let magicianNames = [
    "Merlin Mystique",
    "Seraphina Spellbound",
    "Enigma the Enchanter",
    "Astral Alaric",
    "Mystica Mirage"
];
function make_great(magicianNames) {
    const greatMagicians = magicianNames.slice();
    greatMagicians.forEach((element, index, array) => {
        array[index] = `the Great Magician ${element}`;
    });
    return (greatMagicians);
}
const greatMagicians = make_great(magicianNames);
console.log(`\t Original Array`);
console.log();
show_magicians(magicianNames);
console.log(`\n\tModified Array`);
console.log();
show_magicians(greatMagicians);
