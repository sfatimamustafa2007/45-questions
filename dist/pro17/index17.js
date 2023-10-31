"use strict";
let guestList2 = [
    'Ali Phool',
    'Zia',
    'Mian Asif',
    'Ali',
    'Ahmad',
    'Qasim',
    'Ali Phool'
];
console.log(`I can invite only two people for dinner.`);
//2 step
while (guestList2.length > 2) {
    let removeGuest = guestList2.pop();
    console.log(`Sorry, ${removeGuest}, I can not invite ypu to dinner`);
}
//part 3
for (let guest of guestList2) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`);
}
//4 part
guestList2.pop();
guestList2.pop();
console.log(`Guest list after dinner`, guestList2);
