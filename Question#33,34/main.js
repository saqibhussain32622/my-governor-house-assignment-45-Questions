// //Question# 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });
//Question# 34
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
