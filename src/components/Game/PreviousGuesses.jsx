import React from 'react';
import SplitGuess from './SplitGuess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';

const PreviousGuesses = (props) => {
  const { currentGuesses, answer } = props

  return (
    <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(nr => <SplitGuess key={nr} wordToSplit={currentGuesses[nr]} answer={answer} />)}
    </div>
  )
}

export default PreviousGuesses
