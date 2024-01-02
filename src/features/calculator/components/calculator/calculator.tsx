import styles from "./calculator.module.css";

const symbols = [
  [7, 8, 9, "/"],
  [4, 5, 6, "×"],
  [1, 2, 3, "-"],
  [0, "=", "+"],
];

export default function Calculator() {
  return (
    <div className={styles.calculator} data-testid="calculator">
      {symbols.map((row, rowIndex) => (
        <div className={styles.calculatorRow} key={rowIndex}>
          {row.map((symbol, symbolIndex) => (
            <button className={styles.calculatorKey} key={symbolIndex}>
              {symbol}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
