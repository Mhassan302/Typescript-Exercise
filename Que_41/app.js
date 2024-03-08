"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magicians: string[] = [`Merlin Mystique`, `Seraphina Spellbound`, `Enigma the Enchanter`, `Astral Alaric`, `Mystica Mirage`]
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = [`Merlin Mystique`, `Seraphina Spellbound`, `Enigma the Enchanter`, `Astral Alaric`, `Mystica Mirage`];
show_magicians(magicianNames);
