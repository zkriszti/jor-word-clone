import React from 'react';

function Banner({ gameStatus, guessCount, answer }) {

  return <>
    {gameStatus === "won" ?
    (<div className="status-banner status-banner-won">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessCount} guesses</strong>.
      </p>
    </div>) : (
      <div className="status-banner status-banner-lost">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )}
  </>;
}

export default Banner;
