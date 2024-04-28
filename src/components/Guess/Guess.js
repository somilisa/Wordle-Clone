import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function Guess({ value, answer, numCols }) {
  return (
    <p className="guess">
      {range(numCols).map((col) => {
        let status = value ? checkGuess(value, answer)[col].status : "";
        let className;
        className = value ? `cell ${status}` : "cell";

        return (
          <span key={col} className={className}>
            {value ? value[col] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
