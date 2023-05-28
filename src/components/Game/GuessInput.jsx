import React, { useState } from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [ guess, setGuess ] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    handleSubmitGuess(guess)
    setGuess('')
  }

  return <>
    <form className='guess-input-wrapper' onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">
        Your guess:
      </label>
      <input
        disabled={gameStatus !== "running"}
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        value={guess.toUpperCase()}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  </>;
}

export default GuessInput;
