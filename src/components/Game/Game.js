import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState("loose");

  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => "")
  );

  return (
    <>
      <Banner
        result={result}
        count={count}
        display={count >= 6 || result === "won" ? "block" : "none"}
        answer={answer}
      />
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <Guess key={index} value={guess} setResult={setResult} />
        ))}
      </div>
      <GuessInput
        setGuesses={setGuesses}
        guesses={guesses}
        answer={answer}
        count={count}
        setCount={setCount}
        setResult={setResult}
      />
    </>
  );
}

export default Game;
