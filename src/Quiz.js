import { useState, useEffect } from 'react';
import {RadioButtonGroup} from './RadioButtonGroup';
import { printProps } from './printProps';

export const Quiz = ({ person, people }) => {

  const [possibleAnswers, setPossibleAnswers] = useState(shufflePossibleAnswers(people.map(p => p.characteristic)));
  const [answerCorrect, setAnswerCorrect] = useState(false); 
  const[userAnswer, setUserAnswer] = useState("noUserAnswer") 

  useEffect(() => {
    console.log(`Use Effect Name is ${person.name} right now`);
    console.log(`Use Effect UserAnswer is ${userAnswer} right now'`);
    console.log(`Use Effect Person.Characteristic is ${person.characteristic} right now`);
    console.log(`Use Effect AnswerCorrect is ${answerCorrect} right now`);
  }, [person, userAnswer, answerCorrect]);


  function shufflePossibleAnswers(choices) {
    return choices.sort(() => Math.random() - 0.5); // put in random order
  }

  const title = `What is ${person.name}'s outcast characteristic?`;

  const userAnswerCallback = (newUserAnswer) => {
    console.log("new userAnswer selected " + newUserAnswer);
    setUserAnswer(newUserAnswer);
    setAnswerCorrect(newUserAnswer === person.characteristic);
    console.log("answer correct is " + answerCorrect)
  }

  const RadioGroupWrapped = printProps(RadioButtonGroup);

  return (
    <div>
      <RadioGroupWrapped person={person} people={people} questionAnswers={possibleAnswers} title={title} userAnswer={userAnswer} callback={userAnswerCallback} />
        <p>
          {(answerCorrect) ? "Your Answer is correct" : "That isn't the right answer. Please try again"}
        </p>

    </div>
  );
}
export default Quiz;