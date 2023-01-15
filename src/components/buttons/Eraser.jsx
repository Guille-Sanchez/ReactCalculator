import React, { useContext } from "react";
import {
  DisAbleContext,
  EquationContext,
  SymbolButtonContext,
} from "../calculator/Calculator";
import "./styles.css";

function Eraser(props) {
  const equationValue = useContext(EquationContext);

  const disAbleValue = useContext(DisAbleContext);
  const symbolButton = useContext(SymbolButtonContext);
  return (
    <button
      id={"erase"}
      key={"erase"}
      className={props.className}
      onClick={(e) => {
        e.preventDefault();
        disAbleValue.setDisAble(true);
        symbolButton.setNotPressed(true);
        equationValue.setEquation("");
        props.setAllowEqual();
      }}
    >
      Clear
    </button>
  );
}

export default Eraser;
