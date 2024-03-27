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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
