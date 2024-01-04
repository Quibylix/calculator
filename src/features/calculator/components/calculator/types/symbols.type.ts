export type SymbolType = "number" | "operator" | "equals" | "clear";
export type Operator = "+" | "-" | "×" | "/";
export type NumberLiteral = `${number}`;
export type Equals = "=";
export type Clear = "AC";
export type SymbolLiteral = NumberLiteral | Operator | Equals | Clear;
