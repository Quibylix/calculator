import styles from "./calculator.module.css";

type CalculatorKeyProps = {
  symbol: string;
  handleSymbolClick: (symbol: string) => void;
};

export default function CalculatorKey({
  symbol,
  handleSymbolClick,
}: CalculatorKeyProps) {
  return (
    <button
      className={styles.calculatorKey}
      onClick={() => handleSymbolClick(symbol)}
    >
      {symbol}
    </button>
  );
}
