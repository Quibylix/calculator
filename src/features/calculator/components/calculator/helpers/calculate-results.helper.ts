import { DECIMAL_PLACES } from "../constants/tolerance.constant";
import { NumberLiteral, Operator } from "../types/symbols.type";

export const calculateResult = (
  number: NumberLiteral,
  previousNumber: NumberLiteral,
  operator: Operator,
) => {
  switch (operator) {
    case "+":
      return roundToDecimalPlaces(
        parseFloat(previousNumber) + parseFloat(number),
        DECIMAL_PLACES,
      ).toString() as NumberLiteral;
    case "-":
      return roundToDecimalPlaces(
        parseFloat(previousNumber) - parseFloat(number),
        DECIMAL_PLACES,
      ).toString() as NumberLiteral;
    case "×":
      return roundToDecimalPlaces(
        parseFloat(previousNumber) * parseFloat(number),
        DECIMAL_PLACES,
      ).toString() as NumberLiteral;
    case "/":
      return roundToDecimalPlaces(
        parseFloat(previousNumber) / parseFloat(number),
        DECIMAL_PLACES,
      ).toString() as NumberLiteral;
    case "%":
      return roundToDecimalPlaces(
        parseFloat(previousNumber) % parseFloat(number),
        DECIMAL_PLACES,
      ).toString() as NumberLiteral;
  }
};

const roundToDecimalPlaces = (number: number, decimalPlaces: number) => {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
};
