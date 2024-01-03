import { NumberLiteral, Operator } from "../types/symbols.type";

export const calculateResult = (
  number: NumberLiteral,
  previousNumber: NumberLiteral,
  operator: Operator,
) => {
  switch (operator) {
    case "+":
      return (
        parseFloat(previousNumber) + parseFloat(number)
      ).toString() as NumberLiteral;
    case "-":
      return (
        parseFloat(previousNumber) - parseFloat(number)
      ).toString() as NumberLiteral;
    case "×":
      return (
        parseFloat(previousNumber) * parseFloat(number)
      ).toString() as NumberLiteral;
    case "/":
      return (
        parseFloat(previousNumber) / parseFloat(number)
      ).toString() as NumberLiteral;
  }
};
