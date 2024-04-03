"use strict";
// let guest_list : string [] = ["Ali", "bilal", "babar","hamza"];
// let not_present : string = 'babar';
// let new_guest : string = 'azam';
// guest_list[2] = new_guest;
// guest_list.unshift('noman','adnan','owais');
// console.log("Unfortunately, I can only invite two people for dinner.");
// while (guest_list.length > 2) {
//     let removedGuest = guest_list.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// guest_list.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
// guest_list.splice(0, guest_list.length);
// console.log(guest_list); // Shows an empty list
//Question# 18
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
