import { NumberLiteral } from "../types/symbols.type";

export function switchSign(number: NumberLiteral) {
  if (number === "0") {
    return number;
  }

  if (number.startsWith("-")) {
    return number.slice(1) as NumberLiteral;
  }

  return `-${number}` as NumberLiteral;
}
