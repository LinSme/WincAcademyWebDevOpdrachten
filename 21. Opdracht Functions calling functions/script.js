//Hey Kiddo opdracht
console.log("\n", "Hey Kiddo opdracht", "\n");

const myFunction1 = function (age) {
    return age >= 18;
};

const myFunction2 = function (age) {
    if (myFunction1(age) === true) {
        return "hello there";
    } else {
        return "hey kiddo";
    };
};

console.log("Checking with age of 10:", myFunction2(10));
console.log("Checking with age of 18:", myFunction2(18));
console.log("Checking with age of 20:", myFunction2(20));

//VAT calculations
console.log("\n", "VAT exercise 1", "\n");

const calcVAT = function (basePrice, percentageVAT) {
    return basePrice * percentageVAT / 100;
};

const calcPriceInclVAT = function (basePrice, percentageVAT) {
    return basePrice + calcVAT(basePrice, percentageVAT);
};

console.log("Testing with the computer example (1000 and 21%)");
console.log(calcVAT(1000, 21));
console.log(calcPriceInclVAT(1000, 21));
console.log("Testing with the bread example (2 and 9%)");
console.log(calcVAT(2, 9));
console.log(calcPriceInclVAT(2, 9));


console.log("\n", "VAT exercise 2", "\n");
const calcBasePrice = function (priceInclVAT, percentageVAT) {
    return priceInclVAT / (1 + (percentageVAT / 100));
};

const calcVATAmount = function (priceInclVAT, percentageVAT) {
    return priceInclVAT - calcBasePrice(priceInclVAT, percentageVAT);
};

console.log("Testing with the computer example (1210 and 21%)");
console.log(calcBasePrice(1210, 21));
console.log(calcVATAmount(1210, 21));
console.log("Testing with the bread example (2.18  and 9%)");
console.log(calcBasePrice(2.18, 9));
console.log(calcVATAmount(2.18, 9));