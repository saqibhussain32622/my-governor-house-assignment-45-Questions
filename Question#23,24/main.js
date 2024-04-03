"use strict";
// //Question# 23
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // True
// console.log("Is car == 'toyota'? I predict False.");
// console.log(car == 'toyota'); // False
// // Additional tests:
// console.log("Is car !== 'honda'? I predict True.");
// console.log(car !== 'honda'); // True
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru'); // False
// console.log("Is car != 'ford'? I predict True.");
// console.log(car != 'ford'); // True
// console.log("Is car > 'ford'? I predict True.");
// console.log(car > 'ford'); // True
// console.log("Is car < 'toyota'? I predict False.");
// console.log(car < 'toyota'); // False
// console.log("Is car.length >= 6? I predict True.");
// console.log(car.length >= 6); // True
// console.log("Is car.startsWith('su')? I predict True.");
// console.log(car.startsWith('su')); // True
// console.log("Is car.endsWith('aru')? I predict True.");
// console.log(car.endsWith('aru')); // True
// console.log("Is car.includes('bar')? I predict False.");
// console.log(car.includes('bar')); // False
//Question# 24
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in an array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in an array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
