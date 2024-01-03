import styles from "./calculator.module.css";
import { SymbolLiteral } from "./types/symbols.type";

type CalculatorKeyProps = {
  symbol: SymbolLiteral;
  handleSymbolClick: (symbol: SymbolLiteral) => void;
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
