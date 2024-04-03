"use strict";
//Question# 31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     // Greet users
// }
//Question# 32
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
