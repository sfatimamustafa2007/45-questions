"use strict";
let favTrans = [];
favTrans.push(["motercycle", "Honda"]);
favTrans.push(["car", "Toyota"]);
favTrans.push(["bicycle", "Sohrab"]);
//console.log(favTrans)
favTrans.forEach(([transport, brand]) => { console.log(`I would like to own ${brand} ${transport}.`); });
