import { useState, useEffect } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { printProps } from './printProps';
import './css/Quiz.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ExpandMoreOrLessButton } from './composition';


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
      <p className="takeQuiz">Take the Quiz - Spoiler alert
        <ExpandMoreOrLessButton onClick={() => {setShowQuiz(!showQuiz)}}>
          {!showQuiz ? <ExpandMoreIcon className="icons"/> : <ExpandLessIcon className="icons"/> }
        </ExpandMoreOrLessButton>
      </p>

      {showQuiz &&
        <RadioGroupWrapped person={person} people={people} possibleQuizAnswers={possibleQuizAnswers} title={title} userAnswer={userAnswer} callback={userAnswerCallback} />
      }

      {userAnswer !== "noUserAnswer" &&
        <p>
          {(answerCorrect) ? `Yes, that is what ${person.name} is known for on the show` : "That isn't the right answer. Please try again"}
        </p>
      }


    </>
  );
}
export default Quiz;