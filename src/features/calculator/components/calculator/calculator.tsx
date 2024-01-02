const symbols = [
  [7, 8, 9, "/"],
  [4, 5, 6, "×"],
  [1, 2, 3, "-"],
  [0, "=", "+"],
];

export default function Calculator() {
  return (
    <div data-testid="calculator">
      {symbols.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((symbol, symbolIndex) => (
            <div key={symbolIndex}>{symbol}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
