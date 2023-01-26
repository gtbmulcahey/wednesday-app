import { useState, useEffect } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { printProps } from './printProps';

export const Quiz = ({ person, people, possibleQuizAnswers }) => {
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState("noUserAnswer")

  const title = `What is ${person.name}'s outcast characteristic?`;

  const userAnswerCallback = (newUserAnswer) => {
    setUserAnswer(newUserAnswer);
    setAnswerCorrect(newUserAnswer === person.characteristic);
  }

  const RadioGroupWrapped = printProps(RadioButtonGroup);

  return (
    <div>
      <RadioGroupWrapped person={person} people={people} possibleQuizAnswers={possibleQuizAnswers} title={title} userAnswer={userAnswer} callback={userAnswerCallback} />
      {userAnswer !== "noUserAnswer" &&
        <p>
          {(answerCorrect) ? "Your Answer is correct" : "That isn't the right answer. Please try again"}
        </p>
      }

    </div>
  );
}
export default Quiz;