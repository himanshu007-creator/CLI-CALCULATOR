"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number: ");
    var operator = (0, readline_sync_1.question)("Enter operator: ");
    var secondStr = (0, readline_sync_1.question)("Enter second number: ");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\nInvalid Input :(");
        setTimeout(function () {
            console.log("\nTry again");
            main();
        }, 1000);
    }
}
/**
 * @return {number}
 */
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
            break;
        case "-":
            return firstNum - secondNum;
            break;
        case "*":
            return firstNum * secondNum;
            break;
        case "/":
            return firstNum / secondNum;
    }
}
/**
 * @return {boolean}
 */
function isNumber(str) {
    var maybeNumber = parseInt(str);
    return !isNaN(Number(maybeNumber));
}
/**
 * @return {boolean}
 */
function isOperator(operator) {
    switch (operator) {
        case "/":
        case "*":
        case "+":
        case "-":
            return true;
        default:
            return false;
    }
}
main();
