// new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guesArr: string[] = ["Huzaifa", "Raza", "Ali", "Asad", "Muzamil"];

let canNot: string = "Huzaifa";

console.log(`${canNot} CanNot make it for dinner`);

let newguest: string = "Ariyan";

guesArr[guesArr.indexOf(canNot)] = newguest;

// console.log(`Dear ${newguest} You are inivited to a dinner`);

// console.log(guesArr);
guesArr.map((items) =>
console.log(`Dear ${items} You Are Cordinary invited to a Dinner`));


