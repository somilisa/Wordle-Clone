import React, { useState } from "react";
import Banner from "../Banner/Banner";

function GuessInput({ handleSubmitGuess, guesses, gameStatus, answer }) {
  const [guess, setGuess] = useState("");

  let className;
  if (gameStatus === "won") {
    className = "happy";
  } else if (gameStatus === "lost") {
    className = "sad";
  }
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(guess);
          handleSubmitGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess</label>

        <input
          id="guess-input"
          type="text"
          value={guess}
          disabled={gameStatus !== "running"}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          required
          maxLength={5}
          title="5-letter word"
          pattern="^[A-Z]{5}$"
        />
      </form>
    </div>
  );
}

export default GuessInput;
