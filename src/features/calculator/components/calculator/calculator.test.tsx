import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Calculator from "./calculator";

describe("calculator", () => {
  it("should display the calculator", () => {
    render(<Calculator />);

    screen.getByTestId("calculator");
  });

  it("should display keys with the values 0 to 9", () => {
    render(<Calculator />);

    for (let i = 0; i < 10; i++) {
      screen.getByText(i.toString());
    }
  });

  it("should display keys with the operators +, -, ×, /, =", () => {
    render(<Calculator />);

    ["+", "-", "×", "/", "="].forEach(operator => {
      screen.getByText(operator);
    });
  });
});
