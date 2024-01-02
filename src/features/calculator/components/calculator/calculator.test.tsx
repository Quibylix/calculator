import { act, render, screen } from "@testing-library/react";
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
      screen.getByRole("button", { name: i.toString() });
    }
  });

  it("should display buttons with the operators +, -, ×, /, =", () => {
    render(<Calculator />);

    ["+", "-", "×", "/", "="].forEach(operator => {
      expect(screen.getByText(operator).nodeName).toBe("BUTTON");
    });
  });

  it("should display a display with the value 0", () => {
    render(<Calculator />);

    expect(screen.getByTestId("calculator-display").textContent).toBe("0");
  });

  it("clicking on a number should display the value of the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("3");
  });

  it("clicking on several numbers should display the value of the numbers", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "4" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("34");
  });

  it("clicking on an operator should display the operator", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());

    expect(screen.getByLabelText("Selected operator").textContent).toBe("+");
  });

  it("clicking on several operators should display the last operator", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "-" }).click());

    expect(screen.getByLabelText("Selected operator").textContent).toBe("-");
  });
});
