"use strict";
// 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let countries = ["Japan", "Dubai", "Sudia", "Iraq"];
//simple methode;
console.log("I like to visit :", countries);
//map methode;
countries.map((count) => console.log(`I like to visit ${count} country`));
