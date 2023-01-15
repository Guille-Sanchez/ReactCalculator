import React, { useContext } from "react";
import { EquationContext } from "../calculator/Calculator";
import "./styles.css";

function SolveEquation(values, symbol) {
  switch (symbol) {
    case "+":
      return +values[0] + +values[1];
    case "-":
      return +values[0] - +values[1];

    case "*":
      return +values[0] * +values[1] !== 0 ? +values[0] * +values[1] : "0";

    case "/":
      return +values[0] / +values[1];

    default:
      break;
  }
}

function Equal(props) {
  const equationValue = useContext(EquationContext);

  return (
    <button
      id={"equal"}
      key={"equal"}
      className={props.className}
      disabled={props.allowEqual}
      onClick={(e) => {
        e.preventDefault();
        const re = new RegExp("[/*-/+]");
        const values = equationValue.equation.split(re);
        const symbol = equationValue.equation.match(re);
        if (symbol && values.length === 2 && values[1] !== "") {
          equationValue.setEquation(SolveEquation(values, symbol[0]));
          props.setAllowEqual(true);
        }
      }}
    >
      =
    </button>
  );
}

export default Equal;
