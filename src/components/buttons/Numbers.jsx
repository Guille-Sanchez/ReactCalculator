import React, { useContext } from "react";
import {
  EquationContext,
  DisAbleContext,
  SymbolButtonContext,
} from "../calculator/Calculator";
import "./styles.css";

function Numbers(props) {
  const numbers = [...Array(10).keys()];
  const equationValue = useContext(EquationContext);
  const disAbleValue = useContext(DisAbleContext);
  const symbolButton = useContext(SymbolButtonContext);
  return numbers.map((num) => {
    return (
      <button
        id={num}
        key={num}
        className={props.className}
        onClick={(e) => {
          e.preventDefault();
          console.log(symbolButton.notPressed);
          if (
            disAbleValue.disAble === true &&
            symbolButton.notPressed === true
          ) {
            disAbleValue.setDisAble(false);
          } else if (
            disAbleValue.disAble === false &&
            symbolButton.notPressed === false
          ) {
            disAbleValue.setDisAble(true);
          }
          equationValue.setEquation(equationValue.equation + e.target.id);
        }}
      >
        {num}
      </button>
    );
  });
}

export default Numbers;
