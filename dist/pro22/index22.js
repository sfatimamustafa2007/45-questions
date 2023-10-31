"use strict";
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
//create an array
createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Grapes", "Green", "Sweet"),
    createFruit("Strawberry", "Red", "Sweet"),
;
const invalidIndex = 10;
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
fruits.forEach((friut) => {
    console.log(`Name: ${friut.name},Color: ${friut.color}, Taste: ${friut.taste} `);
});
