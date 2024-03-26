// let guest_list = ['ali', 'kashif', 'bilal', 'ali', 'khan'];
// for (var i = 0; i < guest_list.length; i++)
//     (console.log('Requested sir' + guest_list[i] + ',\n we invited you on dinner tomorrow. \n\nThank you'));
// var not_present = 'bilal';
// var new_guest = 'azam';
// guest_list[2] = new_guest;
//for (var i = 0; i < guest_list.length; i++)
//  (console.log('Requested sir' + guest_list[i] + ',\n we invited you on dinner tomorrow. \n\nThank you'));
//console.log("Mr. ".concat(not_present, "will not coming tomorrow dinner."));



//Question# 16
var guests = ["Ali", "bilal", "babar"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("azam");
guests.splice(guests.length / 2, 0, "kashif");
guests.push("khan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
