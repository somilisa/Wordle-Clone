import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess key={row} value={guesses[row]} answer={answer} numCols={5} />
      ))}
    </div>
  );
}
// <div className="guess-results">
//   {range(numRows).map((row, index) => (
//     <p key={index} class="guess">
//       {guessResults[index].map((letter, index) => (
//         <span key={index} class="cell"></span>
//       ))}
//     </p>
//   ))}
// </div>
export default GuessResults;
