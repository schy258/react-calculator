import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === "0") {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (operator === "=") {
      calculateResult();
    } else {
      setOperator(operator);
      setPreviousValue(displayValue);
      setDisplayValue("0");
    }
  };

  const calculateResult = () => {
    const currentValue = parseFloat(displayValue);
    const prevValue = parseFloat(previousValue);

    switch (operator) {
      case "+":
        setDisplayValue((prevValue + currentValue).toString());
        break;
      case "-":
        setDisplayValue((prevValue - currentValue).toString());
        break;
      case "*":
        setDisplayValue((prevValue * currentValue).toString());
        break;
      case "/":
        setDisplayValue((prevValue / currentValue).toString());
        break;
      default:
        break;
    }

    setOperator(null);
    setPreviousValue(null);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleOperatorClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
