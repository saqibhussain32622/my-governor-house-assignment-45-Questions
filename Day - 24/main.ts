// Question# 70
// // This function prints numbers from 1 to 5 using a loop
// function printNumbersWithLet() {
//     for (let i = 1; i <= 5; i++) {
//         // Uses `let` for loop variable `i`
//         console.log(i); // Logs numbers 1 through 5
//     }
//     // `i` is not accessible here, outside the loop, because it's defined with `let`
// }

// printNumbersWithLet();






//Question# 71

// let age = 25;
// age = 26; // Works fine because `let` allows reassignment
// console.log(age); // Shows 26


// const Name = "Alice";
// try {
//     name: "Bob"; // This line will cause an error
// } catch (error) {
//     console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
// }






//Question# 72
// Demonstrating block scope
// {
//     let blockLet = "visible inside the block";
//     const blockConst = "also only inside the block";
//     console.log(blockLet); 
//     console.log(blockConst); 
// }

// try {
//     console.log("blockLet` is not accessible outside the block."); 
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }

// try {
//     console.log("blockConst` is not accessible outside the block"); 
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
