//Question# 46
// let laptop = {
//     make: "Dell",
//     model: "XPS 15",
//     year: 2021,
//     describe: function() {
//         console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//     }
// };
// laptop.describe();



//Question# 47
// let laptops = [
//     { make: "Dell", model: "XPS 15", year: 2021 },
//     { make: "Apple", model: "MacBook Pro", year: 2020 },
//     { make: "HP", model: "Spectre x360", year: 2021 }
// ];
// let [laptop1, laptop2] = laptops;
// console.log(laptop1);
// console.log(laptop2);



//Question# 48
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
