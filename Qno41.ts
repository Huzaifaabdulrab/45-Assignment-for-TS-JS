// // 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function magiciansName(Name:string[]):void{
    for(let magician of magicians){
        console.log(magician +"  "+ "the great magician");  
    }
}
const magicians: string[] =["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];
magiciansName(magicians)








