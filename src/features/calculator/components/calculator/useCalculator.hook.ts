import { useState } from "react";

const calculateResult = (
  number: string,
  previousNumber: string,
  operator: string,
) => {
  switch (operator) {
    case "+":
      return (parseFloat(previousNumber) + parseFloat(number)).toString();
    case "-":
      return (parseFloat(previousNumber) - parseFloat(number)).toString();
    case "×":
      return (parseFloat(previousNumber) * parseFloat(number)).toString();
    case "/":
      return (parseFloat(previousNumber) / parseFloat(number)).toString();
    default:
      return number;
  }
};

export function useCalculator() {
  const [previousNumber, setPreviousNumber] = useState<string | null>(null);
  const [number, setNumber] = useState<string | null>("0");
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (symbol: string) => () => {
    setNumber(displayed => {
      if (displayed === null || displayed === "0") {
        return symbol;
      }

      return displayed + symbol;
    });
  };

  const handleOperatorClick = (newOperator: string) => () => {
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

  const handleEqualsClick = () => () => {
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

  return {
    number,
    previousNumber,
    operator,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
  };
}