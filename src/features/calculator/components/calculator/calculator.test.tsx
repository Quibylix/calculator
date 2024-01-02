import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Calculator from "./calculator";

describe("calculator", () => {
  it("should display the calculator", () => {
    render(<Calculator />);

    screen.getByTestId("calculator");
  });

  it("should display buttons with the values 0 to 9", () => {
    render(<Calculator />);

    for (let i = 0; i < 10; i++) {
      expect(screen.getByText(i.toString()).nodeName).toBe("BUTTON");
    }
  });

  it("should display buttons with the operators +, -, ×, /, =", () => {
    render(<Calculator />);

    ["+", "-", "×", "/", "="].forEach(operator => {
      expect(screen.getByText(operator).nodeName).toBe("BUTTON");
    });
  });
});
