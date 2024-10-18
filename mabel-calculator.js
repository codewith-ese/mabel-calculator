// Prompt user for input
let firstName = prompt("Enter First Name! ");
let lastName = prompt("Enter Last Name! ");
let MarblePrice = prompt(" Type Price per squre Meter! ");

// console.log("\n***************************");
// console.log(`Thank you! Mr. ${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`);
// console.log("\n");

let material = [];
let calc = "0";

while (true) {
    console.log("Type Your Measurement!");

    let lengthM = parseInt(prompt("Type length: ______"), 10);
    if (lengthM === 0) {
        break;
    }

    let widthM = parseInt(prompt("Type Width: ______"), 10);
    let squareM = lengthM * widthM;

    material.push(squareM);
}

let x = 0;

for (let figures of material) {
    x += figures;
}

let oneSqm = 100 * 100;
let totalSq = x / oneSqm;

let roundTotal = totalSq.toFixed(2);

let totalCost = roundTotal * MarblePrice

console.log("\n***************************");
console.log(`Thank you! Mr. ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`);
console.log("\nEstimated Marble / Granite");
console.log(`is: ${roundTotal} square meters`);

document.getElementById("namedemo").innerHTML = 
 " Name:  ➡️ " + lastName.charAt(0).toUpperCase() + lastName.slice(1) + " " + firstName.charAt(0).toUpperCase() + firstName.slice(1);
document.getElementById("total").innerHTML = " Total Estimate is ➡️  :   " + roundTotal + " square meters ";

// calculating price 
document.getElementById("pricedemo").innerHTML =
 " Total Cost of Marble is ➡️ " + totalCost;