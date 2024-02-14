import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [inputValu, setInputValu] = useState("");

  const handleButton = (val) => {
    try {
      console.log(val);

      if (inputValu === 'Infinity') {
          setInputValu(val)
          return
      }

      if (val === "AC") {
        setInputValu("");
        return;
      } else if (val === "DE") {
        setInputValu((prev) => prev.slice(0, prev.length - 1));
        return;
      } else if (val === "=") {
        const result = eval(inputValu);
        if (result === undefined) {
          return;
        }
        // Check if the result is a floating-point number
        const isFloatingPoint = result % 1 !== 0;

        // If it's a floating-point number, round to four decimal places
        setInputValu(
          isFloatingPoint ? parseFloat(result).toFixed(4) : String(result)
        );
        return;
      } else {
        let result = inputValu + String(val);
        console.log(result);

        if (val === ".") {
          if (inputValu === "") {
            setInputValu("0.");
            return;
          }
        }

        if (
          result.charAt(result.length - 1) === "/" ||
          result.charAt(result.length - 1) === "*" ||
          result.charAt(result.length - 1) === "+" ||
          result.charAt(result.length - 1) === "-"
        ) {
          if (
            result.charAt(result.length - 2) === "/" ||
            result.charAt(result.length - 2) === "*" ||
            result.charAt(result.length - 2) === "+" ||
            result.charAt(result.length - 2) === "-"
          ) {
            result = result.slice(0, result.length - 2);
            setInputValu(result + val);
            return;
          }
          setInputValu(result);
          return;
        } else {
          setInputValu(result);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      alert("Invalid input");
      console.warn("Invalid input");
      setInputValu("");
      return;
    }
  };

  const values = [
    "AC",
    "DE",
    ".",
    "/",
    1,
    2,
    3,
    "*",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "+",
    "00",
    0,
  ];

  return (
    <>
      <div className="bg-[#3a4452] p-5 rounded-xl max-w-[360px] overflow-hidden">
        <div className="justify-end ">
          <div className="text-right shadow-none bg-transparent text-[40px] border-none min-h-16 max-w-[360px]  ">
            <span className="overflow-hidden">{inputValu}</span>
          </div>
        </div>

        <div className="grid grid-cols-4">
          {values.map((value, i) => (
            <Buttons key={i} val={value} onClick={() => handleButton(value)} /> // what is the problem here?
          ))}
          <button
            onClick={() => handleButton("=")}
            className="col-span-2"
            style={{
              textAlign: "center",
              border: "0px",
              outline: "0px",
              width: "120px",
              height: "60px",
              borderRadius: "10px",
              boxShadow:
                "rgba(255, 255, 255, 0.1) -8px -8px 15px, rgba(255, 255, 255, 0.1) 5px 5px 15px",
              margin: "10px",
              cursor: "pointer",
              backgroundColor: "#3a4452",
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
