import React, { useState } from 'react';
import PreviousGuesses from './PreviousGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Banner from '../Game/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = useState('running');
  const [ guesses, setGuesses ] = useState([])

  const handleSubmitGuess = (guess) => {
    console.log("received guess", guess)
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return <>
    <PreviousGuesses currentGuesses={guesses} answer={answer} />
    <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
    {gameStatus !== "running" && (<Banner gameStatus={gameStatus} guessCount={guesses.length} answer={answer} />)}
  </>;
}

export default Game;
