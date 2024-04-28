import React, { useState } from "react";
import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import { HappyBanner, SadBanner } from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
    if (guess === answer) {
      setGameStatus("won");
    } else if (guesses.length >= 6) setGameStatus("lost");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} numCols={5} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        guesses={guesses}
        gameStatus={gameStatus}
        answer={answer}
      />
      {gameStatus === "won" && <HappyBanner guesses={guesses} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
