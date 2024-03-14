"use strict";
// // 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function magiciansName(Name) {
    for (let magician of magicians) {
        console.log(magician + "  " + "the great magician");
    }
}
const magicians = ["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];
magiciansName(magicians);
