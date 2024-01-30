import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { RadioButtonGroup } from './RadioButtonGroup';
import { printProps } from './printProps';
import { ExpandMoreOrLessButton } from './composition';
import './css/Quiz.css';

const QuizHeader = ({ showQuiz, toggleQuiz }) => (
  <p className="takeQuiz">
    Take the Quiz - Spoiler alert
    <ExpandMoreOrLessButton onClick={toggleQuiz}>
      {showQuiz ? <ExpandLessIcon className="icons" /> : <ExpandMoreIcon className="icons" />}
    </ExpandMoreOrLessButton>
  </p>
);

const QuizResult = ({ answerCorrect, personName }) => (
  <p>
    {answerCorrect
      ? `Yes, that is what ${personName} is known for on the show`
      : 'That isn\'t the right answer. Please try again'}
  </p>
);

const Quiz = ({ person, people, possibleQuizAnswers }) => {
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState("noUserAnswer");
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    console.log("show quiz is " + showQuiz);
  }, [showQuiz]);

  const title = `What is ${person.name}'s outcast characteristic?`;

  const userAnswerCallback = (newUserAnswer) => {
    setUserAnswer(newUserAnswer);
    setAnswerCorrect(newUserAnswer === person.characteristic);
  };

  const toggleQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  const RadioGroupWrapped = printProps(RadioButtonGroup);

  return (
    <>
      <QuizHeader showQuiz={showQuiz} toggleQuiz={toggleQuiz} />

      {showQuiz && (
        <RadioGroupWrapped
          person={person}
          people={people}
          possibleQuizAnswers={possibleQuizAnswers}
          title={title}
          userAnswer={userAnswer}
          callback={userAnswerCallback}
        />
      )}

      {userAnswer !== "noUserAnswer" && (
        <QuizResult answerCorrect={answerCorrect} personName={person.name} />
      )}
    </>
  );
};

export default Quiz;
