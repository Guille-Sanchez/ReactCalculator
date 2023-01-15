import React, { useContext } from "react";
import { EquationContext } from "../calculator/Calculator.jsx";
import "./styles.css";

function Screen() {
  const eq = useContext(EquationContext);
  return (
    <input
      type="tex"
      className="screen"
      value={eq.equation ? eq.equation : "Press a number"}
      readOnly={true}
    />
  );
}

export default Screen;
