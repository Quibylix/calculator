export type SymbolType = "number" | "operator" | "equals";
export type Operator = "+" | "-" | "×" | "/";
export type NumberLiteral = `${number}`;
export type Equals = "=";
export type SymbolLiteral = NumberLiteral | Operator | Equals;
