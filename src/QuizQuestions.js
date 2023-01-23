import {RadioButtonGroup} from './RadioButtonGroup';

function QuizQuestions(props) {
  //console.log(`In QuizQuestions. possible quiz answers are ${props.questionAnswers}`);

  return (
      <>
        <p>What is {props.name}'s outcast characteristic?</p>
        <RadioButtonGroup name={props.name} charactersObject = {props.charactersObject} questionAnswers={props.questionAnswers} />
      </>
  );
}
export default QuizQuestions;