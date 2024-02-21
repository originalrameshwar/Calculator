import { useRef, useState, useEffect } from "react";
import Buttons from "./Buttons";
import { values } from "./utils/buttonsValues";

function App() {
  const [inputValu, setInputValu] = useState("");
  const equalto = useRef(null)

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

  return (
    <>
      <div className=" bg-black p-5 rounded-xl max-w-[360px] overflow-hidden  lg:mt-10 sm:mt-56 md:mt-53 mt-20">
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
            ref={equalto}
            style={{
              textAlign: "center",
              border: "0px",
              outline: "0px",
              width: "140px",
              height: "60px",
              borderRadius: "10px",
              boxShadow:
                "-1px -1px 5px rgba(255, 255, 255, 1),1px 1px 5px rgba(255, 255, 255, 1)",
              margin: "10px",
              cursor: "pointer",
            }}

            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0fef0", e.target.style.color = 'black')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = 'white')}
          >
            <span className="font-bold">=</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
