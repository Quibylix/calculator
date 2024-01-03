import CalculatorKey from "./calculator-key";
import styles from "./calculator.module.css";
import { SYMBOLS } from "./constants/symbols.constant";
import { useCalculator } from "./hooks/use-calculator.hook";

export default function Calculator() {
  const { number, previousNumber, operator, handleSymbolClick } =
    useCalculator();

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
      {SYMBOLS.map((row, rowIndex) => (
        <div className={styles.calculatorRow} key={rowIndex}>
          {row.map(({ symbol, type }, symbolIndex) => (
            <CalculatorKey
              symbol={symbol}
              handleSymbolClick={handleSymbolClick(type)}
              key={symbolIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
