import React, { useEffect } from 'react';
import './css/RadioButtonGroup.css';

export const RadioButtonGroup = ({ person, possibleQuizAnswers, title, userAnswer = "noUserAnswer", callback }) => {
  useEffect(() => {
    console.log(`selectedRadioBtn is ${userAnswer} right now`);
  }, [person, userAnswer]);

  function handleRadioClick(e) {
    callback(e.currentTarget.value);
  }

  return (
    <>
      <ul className='radiolist'>
        {title}
        {possibleQuizAnswers.map(answer => (
          <li key={answer}>
            <input
              id={answer}
              type="radio"
              name={answer}
              value={answer}
              checked={userAnswer === answer}
              onChange={handleRadioClick}
            />
            <label htmlFor={answer}>{answer}</label>
          </li>
        ))}
      </ul>
    </>
  );
};