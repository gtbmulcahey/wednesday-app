import { useState, useEffect } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { printProps } from './printProps';
import './css/Quiz.css';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export const Quiz = ({ person, people, possibleQuizAnswers }) => {
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState("noUserAnswer");
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    console.log("show quiz is " + showQuiz);
  }, [showQuiz])

  const title = `What is ${person.name}'s outcast characteristic?`;

  const userAnswerCallback = (newUserAnswer) => {
    setUserAnswer(newUserAnswer);
    setAnswerCorrect(newUserAnswer === person.characteristic);
  }


  const RadioGroupWrapped = printProps(RadioButtonGroup);

  return (
    <>
      <p>Take the Quiz
        <IconButton color='primary'  size="large" onClick={() => {setShowQuiz(!showQuiz)}}>
          {!showQuiz ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
        </IconButton>
      </p>

      {showQuiz &&
        <RadioGroupWrapped person={person} people={people} possibleQuizAnswers={possibleQuizAnswers} title={title} userAnswer={userAnswer} callback={userAnswerCallback} />
      }

      {userAnswer !== "noUserAnswer" &&
        <p>
          {(answerCorrect) ? "Your Answer is correct" : "That isn't the right answer. Please try again"}
        </p>
      }


    </>
  );
}
export default Quiz;