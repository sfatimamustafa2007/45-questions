"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList1 = void 0;
let guestList1 = [
    "Zia",
    "Ali",
    "Ahmad",
    "Qasim",
];
exports.guestList1 = guestList1;
for (let guest of guestList1) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
//add begin in array
let newGuest = "Ali Phool";
//unshift
guestList1.unshift(newGuest);
console.log(guestList1);
//add to middle
let newGuestInMiddle = "Mian Asif";
let middleIndex = Math.floor(guestList1.length / 2);
guestList1.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestList1);
//4 step
let newGuestAtEnd = "Muhammad Ali";
guestList1.push(newGuest);
console.log(guestList1);
//final step
console.log("New set of invitation messages:");
for (let guest of guestList1) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
