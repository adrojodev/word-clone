import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {value ? (
        <>
          <span className={`cell ${value[0].status}`}>{value[0].letter}</span>
          <span className={`cell ${value[1].status}`}>{value[1].letter}</span>
          <span className={`cell ${value[2].status}`}>{value[2].letter}</span>
          <span className={`cell ${value[3].status}`}>{value[3].letter}</span>
          <span className={`cell ${value[4].status}`}>{value[4].letter}</span>
        </>
      ) : (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  );
}

export default Guess;
