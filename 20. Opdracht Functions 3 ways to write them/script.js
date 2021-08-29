//Function declaration method
console.log("")

function myFunction1(number1, number2) {
    squareNumber1 = number1 * number1;
    squareNumber2 = number2 * number2;
    sumSquares = squareNumber1 + squareNumber2;
    squareSum = sumSquares * sumSquares;
    return sumSquares
}
console.log(myFunction1(10, 20));
console.log(myFunction1(30, 40));

//Function expression method
console.log("")

const myFunction2 = function (number1, number2) {
    squareNumber1 = number1 * number1;
    squareNumber2 = number2 * number2;
    sumSquares = squareNumber1 + squareNumber2;
    squareSum = sumSquares * sumSquares;
    return sumSquares
};
console.log(myFunction2(10, 20));
console.log(myFunction2(30, 40));

//Arrow function method
console.log("")
// Has to many statements in the body of the function to be able to do.
