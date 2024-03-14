"use strict";
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
Object.defineProperty(exports, "__esModule", { value: true });
// if block
let alien_color = "Blue";
if (alien_color === "Blue") {
    console.log(" 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
// else block
alien_color = "red";
if (alien_color === "Green") {
    console.log(" 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// let alien : string="green"
// alien = "blue"
// if(alien==="green"){
//     console.log("the player just earned 5 points for shooting the alien.!")
// }else{
//     console.log("the player just earned 10 points.")
// }
// alien = "red"
// if(alien==="green"){
//     console.log("the player just earned 5 points for shooting the alien.!")
// }else{
//     console.log("the player just earned 10 points.")
// }
