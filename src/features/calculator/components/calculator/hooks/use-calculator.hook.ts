import { useState } from "react";
import { calculateResult } from "../helpers/calculate-results.helper";
import {
  NumberLiteral,
  Operator,
  SymbolLiteral,
  SymbolType,
} from "../types/symbols.type";

export function useCalculator() {
  const [previousNumber, setPreviousNumber] = useState<NumberLiteral | null>(
    null,
  );
  const [number, setNumber] = useState<NumberLiteral | null>("0");
  const [operator, setOperator] = useState<Operator | null>(null);

  const handleNumberClick = (symbol: NumberLiteral) => {
    setNumber(displayed => {
      if (displayed === null || displayed === "0") {
        return symbol;
      }

      return (displayed + symbol) as NumberLiteral;
    });
  };

  const handleOperatorClick = (newOperator: Operator) => {
    if (!number) {
      setOperator(newOperator);
      return;
    }

    if (previousNumber && operator) {
      const result = calculateResult(number, previousNumber, operator);

      setPreviousNumber(result);
      setNumber(null);
      setOperator(newOperator);
      return;
    }

    setPreviousNumber(number);
    setNumber(null);
    setOperator(newOperator);
  };

  const handleEqualsClick = () => {
    if (!number) {
      if (operator) setOperator(null);
      return;
    }

    if (!operator) {
      setPreviousNumber(number);
      setNumber(null);
      return;
    }

    if (!previousNumber) {
      return;
    }

    const result = calculateResult(number, previousNumber, operator);

    setPreviousNumber(result);
    setNumber(null);
    setOperator(null);
  };

  const handleSymbolClick = (type: SymbolType) => {
    return (symbol: SymbolLiteral) => {
      switch (type) {
        case "number":
          return handleNumberClick(symbol as NumberLiteral);
        case "operator":
          return handleOperatorClick(symbol as Operator);
        case "equals":
          return handleEqualsClick();
      }
    };
  };

  return {
    number,
    previousNumber,
    operator,
    handleSymbolClick,
  };
}
