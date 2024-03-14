// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let fruites1: string = "Apple";
let fruite2: string = "Mango";
console.log(fruites1 == fruite2);

// • Tests using the lower case function

let name1: string = " Huzaifa";
console.log(name1.toLowerCase() == "Huzaifa");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1: number = 20;
let number2: number = 30;

console.log(number1 == number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 >= number2);

// • Tests using "and" and "or" operators

let value1: boolean = true;
let value2: boolean = false;

console.log(value1 && value2);
console.log(value1 || value2);

// • Test whether an item is in a array

let fruites= ["Apple", "Mango", "Banana",]
console.log("is 'Grapes' not in fruits ");
console.log(fruites.includes("Apple"));
console.log(fruites.includes("Grapes"));

console.log(fruites.indexOf("Mango"));
console.log(fruites.indexOf("Strubarry"));