import React, { createContext, useState } from "react";
import { Screen, Eraser, Numbers, Symbols, Equal } from "./index.jsx";
import "./styles.css";
export const EquationContext = createContext(null);
export const DisAbleContext = createContext(null);
export const SymbolButtonContext = createContext(null);

function Calculator() {
  const [equation, setEquation] = useState("");
  const [disAble, setDisAble] = useState(true);
  const [notPressed, setNotPressed] = useState(true);
  const [allowEqual, setAllowEqual] = useState(false);

  return (
    <EquationContext.Provider value={{ equation, setEquation }}>
      <DisAbleContext.Provider value={{ disAble, setDisAble }}>
        <SymbolButtonContext.Provider value={{ notPressed, setNotPressed }}>
          <form className="calculator">
            <Eraser
              className="erase"
              allowEqual={allowEqual}
              setAllowEqual={setAllowEqual}
            />
            <Screen />
            <div className="calculator-body">
              <div className="container-of-numbers">
                <Numbers className="numbers" />
                <Equal
                  className="equal"
                  allowEqual={allowEqual}
                  setAllowEqual={setAllowEqual}
                />
              </div>
              <div className="container-of-symbols">
                <Symbols className="symbols" />
              </div>
            </div>
          </form>
        </SymbolButtonContext.Provider>
      </DisAbleContext.Provider>
    </EquationContext.Provider>
  );
}

export default Calculator;
