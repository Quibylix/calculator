import { useState } from "react";
import CalculatorKey from "./calculator-key";
import styles from "./calculator.module.css";

const symbols = [
  [7, 8, 9, "/"],
  [4, 5, 6, "×"],
  [1, 2, 3, "-"],
  [0, "=", "+"],
];

export default function Calculator() {
  const [displayed, setDisplayed] = useState("0");

  const handleSymbolClick = (symbol: string) => () => {
    setDisplayed(displayed => {
      if (displayed === "0") {
        return symbol;
      }

      return displayed + symbol;
    });
  };

  return (
    <div className={styles.calculator} data-testid="calculator">
      <div data-testid="calculator-display">{displayed}</div>
      {symbols.map((row, rowIndex) => (
        <div className={styles.calculatorRow} key={rowIndex}>
          {row.map((symbol, symbolIndex) => (
            <CalculatorKey
              symbol={symbol.toString()}
              handleSymbolClick={handleSymbolClick}
              key={symbolIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
