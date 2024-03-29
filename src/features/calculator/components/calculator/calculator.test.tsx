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

    expect(screen.getByLabelText("Selected number").textContent).toBe("3");
    expect(screen.getByLabelText("Selected operator").textContent).toBe("-");
  });

  it("clicking a number after an operator should display the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "4" }).click());

    expect(screen.getByLabelText("Selected number").textContent).toBe("4");
    expect(screen.getByLabelText("Selected operator").textContent).toBe("+");
  });

  it("clicking on the equals operator should display the result of the operation", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "4" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("7");
  });

  it("clicking on the equals operator without an operator should display the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("3");

    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("3");
  });

  it("clicking on the equals operator with an operator and only one number should display the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("3");
    expect(screen.getByLabelText("Selected number").textContent).toBe("3");
    expect(screen.getByLabelText("Selected operator").textContent).toBe("");
  });

  it("typing a number after clicking on the equals operator should display the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());
    act(() => screen.getByRole("button", { name: "5" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("5");
  });

  it("clicking on a number, then on an operator, then on a number, and then on an operator should display the result of the first operation and the second operator", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "4" }).click());
    act(() => screen.getByRole("button", { name: "-" }).click());

    expect(screen.getByLabelText("Selected number").textContent).toBe("7");
    expect(screen.getByLabelText("Selected operator").textContent).toBe("-");
  });

  it("clicking on the clear button should reset the calculator", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "4" }).click());
    act(() => screen.getByRole("button", { name: "AC" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("0");
  });

  it("the modulo operator should return the modulo of the two numbers", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "8" }).click());
    act(() => screen.getByRole("button", { name: "%" }).click());
    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("2");
  });

  it("clicking on the switch sign button if the number is positive should switch the sign of the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "8" }).click());
    act(() => screen.getByRole("button", { name: "+/-" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("-8");
  });

  it("clicking on the switch sign button if the number is negative should switch the sign of the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "8" }).click());
    act(() => screen.getByRole("button", { name: "+/-" }).click());
    act(() => screen.getByRole("button", { name: "+/-" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("8");
  });

  it("clicking on the switch sign button if the number is zero should not change the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "+/-" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("0");
  });

  it("clicking on the switch sign button after an operation should switch the sign of the result of the operation", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "-" }).click());
    act(() => screen.getByRole("button", { name: "8" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());
    act(() => screen.getByRole("button", { name: "+/-" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("5");
  });

  it("clicking on the decimal point button should display a decimal point", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "1" }).click());
    act(() => screen.getByRole("button", { name: "." }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("1.");
  });

  it("clicking on the decimal point button if the number already has a decimal point should not change the number", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "1" }).click());
    act(() => screen.getByRole("button", { name: "." }).click());
    act(() => screen.getByRole("button", { name: "." }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("1.");
  });

  it("clicking on the decimal point button after an operation should display a decimal point", () => {
    render(<Calculator />);

    act(() => screen.getByRole("button", { name: "1" }).click());
    act(() => screen.getByRole("button", { name: "+" }).click());
    act(() => screen.getByRole("button", { name: "2" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());
    act(() => screen.getByRole("button", { name: "." }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("0.");
  });

  it("should use a fixed number of decimals when working with decimal numbers to avoid float point precision issues", () => {
    render(<Calculator />);

    // 0.3 * 3 = 0.8999999999999999 in Javascript for the float point precision
    act(() => screen.getByRole("button", { name: "0" }).click());
    act(() => screen.getByRole("button", { name: "." }).click());
    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "×" }).click());
    act(() => screen.getByRole("button", { name: "3" }).click());
    act(() => screen.getByRole("button", { name: "=" }).click());

    expect(screen.getByTestId("calculator-display").textContent).toBe("0.9");
  });
});
