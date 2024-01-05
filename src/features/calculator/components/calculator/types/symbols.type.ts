export type SymbolType =
  | "number"
  | "operator"
  | "equals"
  | "clear"
  | "switchSign"
  | "decimal";
export type Operator = "+" | "-" | "×" | "/" | "%";
export type NumberLiteral = `${number}`;
export type Equals = "=";
export type Clear = "AC";
export type SwitchSign = "+/-";
export type Decimal = ".";
export type SymbolLiteral =
  | NumberLiteral
  | Operator
  | Equals
  | Clear
  | SwitchSign
  | Decimal;
