import {RadioButtonGroup} from './RadioButtonGroup';

function QuizQuestions(props) {
  //console.log(`In QuizQuestions. possible quiz answers are ${props.questionAnswers}`);

  return (
      <div>
        <h2>What is {props.name}'s outcast characteristic?</h2>
        <RadioButtonGroup name={props.name} charactersObject = {props.charactersObject} questionAnswers={props.questionAnswers} />
      </div>
  );
}
export default QuizQuestions;