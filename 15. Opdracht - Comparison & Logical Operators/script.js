const age = 22;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 75;

/*
//Alternatieve constanten ter check
const age = 30;
const isFemale = false;
const driverStatus = "dronken";
const firstName = "Maar ik heet echt Bob!";
const totalAmount = 10;
*/

console.log(""); //Zo ziet de uitkomst er in de Terminal wat rustiger uit
console.log("Opdracht 14. If/else statements");
console.log("");

//Opdracht deel 1
console.log("deel 1: leeftijdscheck");

if (age >= 18) {
    console.log("The age 18 or above; person can enter the bar");
} else {
    console.log("The age is below 18; please go away");
}

console.log("");
//Opdracht deel 2
console.log("deel 2: ladiesnight");

if (isFemale) {
    console.log("The person is female and can enter on ladiesnight");
} else {
    console.log("The person is male and cannot enter on ladiesnight");
}

console.log("");
//Opdracht deel 3
console.log("deel 3: When you drive, never drink");

if (driverStatus === "bob") {
    console.log("The person is fit to drive");
} else {
    console.log("The person not fit to drive");
}

console.log("");
console.log("");
console.log("Opdracht 15. Comparison && logical operators");
console.log("");

//Opdracht deel 1
console.log("deel 1: leeftijdscheck");
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% leeftijds-korting!");
}

console.log("");
//Opdracht deel 2
console.log("deel 2: ludieke actie");

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Je bent net als wij 50jaar en krijgt een gratis biertje!");
}

console.log("");
//Opdracht deel 3

console.log("deel 3: Jubileum korting");
console.log("Bestelling totaal is €" + totalAmount);

if (totalAmount >= 100) {
    console.log("Bestelling van €100 of meer; gratis fles champagne");
} else if (totalAmount >= 50) {
    console.log("Bestelling tussen €50 en €100; gratis portie nachos");
} else if (totalAmount >= 25) {
    console.log("Bestelling tussen €25 en €50; gratis bitterballen");
} else {
    console.log("Bestelling onder €25; geen gratis product")
}

console.log("");

