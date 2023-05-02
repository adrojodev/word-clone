import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({
  setGuesses,
  guesses,
  count,
  setCount,
  answer,
  setResult,
}) {
  const [guess, setGuess] = React.useState("");

  function sendGuess() {
    const newGuess = checkGuess(guess, answer);

    checkGuessStatus(newGuess);

    const index = guesses.findIndex((guess) => guess === "");

    const newGuesses = [...guesses];

    newGuesses[index] = newGuess;

    setGuesses(newGuesses);
    setCount(count + 1);

    setGuess("");
  }

  function checkGuessStatus(newGuess) {
    let correctCount = 0;

    newGuess.forEach((letter) => {
      if (letter.status === "correct") {
        correctCount++;
      }
    });

    if (correctCount === 5) {
      setResult("won");
    }
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        sendGuess();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuess(newGuess);
        }}
        value={guess}
        disabled={count === 6 ? true : false}
      />
    </form>
  );
}

export default GuessInput;
