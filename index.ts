import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number: ");
  const operator: string = question("Enter operator: ");
  const secondStr: string = question("Enter second number: ");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("\nInvalid Input :(");
    setTimeout(() => {
      console.log("\nTry again");
      main();
    }, 1000);
  }
}

/**
 * @return {number}
 */
function calculate(
  firstNum: number,
  operator: Operator,
  secondNum: number
): number {
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
function isNumber(str: string): boolean {
  const maybeNumber = parseInt(str);
  return !isNaN(Number(maybeNumber));
}

/**
 * @return {boolean}
 */
function isOperator(operator: string): boolean {
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
