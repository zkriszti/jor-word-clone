import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

const SplitGuess = (props) => {
  const { wordToSplit, answer } = props

  const result = checkGuess(wordToSplit, answer);

  console.log(result)

  return (
    <p className="guess">
      {range(5).map(nr => (
      <span
        key={nr}
        className={`cell ${result ? result[nr].status : null} `}
        >
        {wordToSplit ? wordToSplit[nr] : undefined}
      </span>
      ))}
    </p>
  )
}

export default SplitGuess
