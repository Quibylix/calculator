import { useState } from "react";
import CalculatorKey from "./calculator-key";
import styles from "./calculator.module.css";

const symbols = [
  [
    { symbol: "7", type: "number" },
    { symbol: "8", type: "number" },
    { symbol: "9", type: "number" },
    { symbol: "/", type: "operator" },
  ],
  [
    { symbol: "4", type: "number" },
    { symbol: "5", type: "number" },
    { symbol: "6", type: "number" },
    { symbol: "×", type: "operator" },
  ],
  [
    { symbol: "1", type: "number" },
    { symbol: "2", type: "number" },
    { symbol: "3", type: "number" },
    { symbol: "-", type: "operator" },
  ],
  [
    { symbol: "0", type: "number" },
    { symbol: "=", type: "equals" },
    { symbol: "+", type: "operator" },
  ],
];

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

export default function Calculator() {
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

  const handleOperatorClick = (operator: string) => () => {
    setOperator(operator);

    if (!number) {
      return;
    }

    setPreviousNumber(number);
    setNumber(null);
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

  return (
    <div className={styles.calculator} data-testid="calculator">
      <div data-testid="calculator-display" role="status">
        <span role="status" aria-label="Selected number">
          {number ?? previousNumber}
        </span>
        <span role="status" aria-label="Selected operator">
          {operator}
        </span>
      </div>
      {symbols.map((row, rowIndex) => (
        <div className={styles.calculatorRow} key={rowIndex}>
          {row.map(({ symbol, type }, symbolIndex) => (
            <CalculatorKey
              symbol={symbol.toString()}
              handleSymbolClick={
                type === "number"
                  ? handleNumberClick
                  : type === "operator"
                    ? handleOperatorClick
                    : handleEqualsClick
              }
              key={symbolIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
