"use strict";
// //Question# 29
// let favorite_fruits: string[] = ["apples", "bananas", "cherries"];
// if (favorite_fruits.includes("bananas")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apples")) {
//     console.log("You really like apples!");
// }
// // Continue with more fruits
//Question# 30
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
