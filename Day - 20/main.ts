//Question# 58
// // This program calculates the average of all scores given
// function averageScore(...scores: number[]): number {
//     // Adds all scores together and divides by the number of scores
//     let total = scores.reduce((sum, score) => sum + score, 0);
//     return total / scores.length;
// }

// // Example: finding the average of four scores
// console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// // We add up all the scores, then divide by how many there are.



//Question# 59
// This program makes a function that adds a specific number
// function makeAdder(valueToAdd: number): (number) => number {
//     // This is the magic box. It takes a number and adds your special number to it
//     return function(number: number): number {
//         return number + valueToAdd;
//     };
// }

// // Making a magic box that adds 5
// let addFive = makeAdder(5);
// console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// // We made a function (magic box) that adds 5 to any number.



//Question# 60
// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "John";
    let age = 30;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
