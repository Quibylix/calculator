export const calculateResult = (
  number: string,
  previousNumber: string,
  operator: string,
) => {
  switch (operator) {
    case "+":
      return (parseFloat(previousNumber) + parseFloat(number)).toString();
    case "-":
      return (parseFloat(previousNumber) - parseFloat(number)).toString();
    case "×":
      return (parseFloat(previousNumber) * parseFloat(number)).toString();
    case "/":
      return (parseFloat(previousNumber) / parseFloat(number)).toString();
    default:
      return number;
  }
};
