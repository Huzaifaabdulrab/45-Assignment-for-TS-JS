// // 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(names : string[]):void{
    for(let magician of names){
        console.log(magician);
        console.log(`${magician} The great magicians`);
    }
}
let magiciansName : string[] = ["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];
show_magicians(magiciansName)