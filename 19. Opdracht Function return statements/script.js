checkNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

bouncerBotBrenda = function (maximumNumber, currentNumber, agePerson) {
    if (currentNumber < maximumNumber && agePerson > 18) {
        return "Come in";
    } else if (currentNumber >= maximumNumber) {
        return "It's too busy now, come back later";
    } else if (agePerson < 18) {
        return "This is a club for adults";
    };
};

//alternative method:
let answer1 = "Come in";
let answer2 = "It's too busy now, come back later";
let answer3 = "This is a club for adults";

bouncerBotBrenda2 = function (maximumNumber, currentNumber, agePerson) {
    if (currentNumber < maximumNumber && agePerson > 18) {
        finalAnswer = answer1
    } else if (currentNumber >= maximumNumber) {
        finalAnswer = answer2
    } else if (agePerson < 18) {
        finalAnswer = answer3
    };
    return (finalAnswer)
};


console.log("")
console.log("Checking if a number is big");
let number = 10;
console.log("checked number = " + number + ". Is this amount big (true or false)");
let isBig = checkNumber(number);
console.log(isBig);
console.log("")


console.log("")
console.log("Bouncer at a club");
let maximumNumber = 100;
let currentNumber = 100;
let agePerson = 10;
console.log("There are " + currentNumber + " people inside, the maximum capacity is " + maximumNumber + " and the individual's age is " + agePerson + ". Is the person allowed to enter?");
let answerBrenda = bouncerBotBrenda(maximumNumber, currentNumber, agePerson);
console.log("Answer from the alternative method of the function")
console.log(answerBrenda);


console.log("")
answerBrenda = bouncerBotBrenda2(maximumNumber, currentNumber, agePerson);
console.log("Answer from the alternative method of the function")
console.log(answerBrenda);
console.log("")