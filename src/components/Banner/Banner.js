import React from "react";

function Banner({ result, count, display, answer }) {
  const correctClass = result === "won" ? "happy banner" : "sad banner";
  return (
    <div className={correctClass} style={{ display: display }}>
      {result === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {count} {count === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
