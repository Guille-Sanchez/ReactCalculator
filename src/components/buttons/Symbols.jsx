import React, { useContext } from "react";
import {
  EquationContext,
  DisAbleContext,
  SymbolButtonContext,
} from "../calculator/Calculator";
import "./styles.css";

function Symbols(props) {
  const symbols = ["/", "*", "-", "+"];
  const equationValue = useContext(EquationContext);
  const disAbleValue = useContext(DisAbleContext);
  const symbolButton = useContext(SymbolButtonContext);
  return symbols.map((sym) => {
    return (
      <button
        id={sym}
        key={sym}
        className={props.className}
        disabled={disAbleValue.disAble}
        onClick={(e) => {
          e.preventDefault();
          symbolButton.setNotPressed(false);
          disAbleValue.setDisAble(true);
          equationValue.setEquation(equationValue.equation + e.target.id);
        }}
      >
        {sym}
      </button>
    );
  });
}

export default Symbols;
