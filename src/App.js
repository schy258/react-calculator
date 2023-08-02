import React, { useState } from "react";
import "./App.css";

const App = () => {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "clear",
  ];
  const symbols = ["+", "-", "*", "/", "="];
  const [entered, setEntered] = useState([]);
  const [result, setResult] = useState("");
  const handleEvent = (num) => {
    console.log("val==", num);
    const check = symbols.includes(num) ? num : Number(num);
    setEntered([...entered, check]);
    if (num === "=") {
      // const aa=entered.split("+")
      console.log("ss", entered.join(""));
      if (entered.join("").includes("+")) {
        const resAdd = entered.join("").split("+");
        setResult(Number(resAdd[0]) + Number(resAdd[1]));
        // console.log("--", resAdd);
      }
      if (entered.join("").includes("-")) {
        const resmin = entered.join("").split("-");
        console.log("--", resmin);
        setResult(Number(resmin[0]) - Number(resmin[1]));
      }
      if (entered.join("").includes("*")) {
        const resmin = entered.join("").split("*");
        console.log("--", resmin);
        setResult(Number(resmin[0]) * Number(resmin[1]));
      }
      if (entered.join("").includes("/")) {
        const resmin = entered.join("").split("/");
        console.log("--", resmin);
        setResult(Number(resmin[0]) / Number(resmin[1]));
      }
      setEntered([]);
    }
    if (num == "clear") {
      setEntered([]);

      setResult("");
    }

    const inc = symbols.includes(num);
    if (inc) {
      switch (num) {
        case "+":
          return "+";
        case "-":
          return "-";
      }
    }
  };
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        border: "1px solid",
        padding: "1.8rem",
      }}
    >
      <div
        style={{ height: "80px", border: "1px solid", marginBottom: "1rem" }}
      >
        {entered.length > 0 &&
          entered.map((val) => {
            return (
              <>
                {val}
                {}
              </>
            );
          })}
        {result}
      </div>
      <div className="wrapper">
        {numbers.map((num) => {
          return (
            <>
              <button onClick={() => handleEvent(num)}>{num}</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
