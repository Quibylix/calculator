export const SYMBOLS = [
  [
    { symbol: "AC", type: "clear" },
    { symbol: "%", type: "operator" },
    { symbol: "+/-", type: "switchSign" },
    { symbol: "/", type: "operator" },
  ],
  [
    { symbol: "7", type: "number" },
    { symbol: "8", type: "number" },
    { symbol: "9", type: "number" },
    { symbol: "×", type: "operator" },
  ],
  [
    { symbol: "4", type: "number" },
    { symbol: "5", type: "number" },
    { symbol: "6", type: "number" },
    { symbol: "-", type: "operator" },
  ],
  [
    { symbol: "1", type: "number" },
    { symbol: "2", type: "number" },
    { symbol: "3", type: "number" },
    { symbol: "+", type: "operator" },
  ],
  [
    { symbol: "0", type: "number" },
    { symbol: ".", type: "decimal" },
    { symbol: "=", type: "equals" },
  ],
] as const;
