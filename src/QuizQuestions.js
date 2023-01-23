import {RadioButtonGroup} from './RadioButtonGroup';

function QuizQuestions(props) {

  let possibleAnswers = props.people.map(person=> person.characteristic);
  possibleAnswers = possibleAnswers.sort(() => Math.random() - 0.5); // put in random order

  return (
      <>
        <p>What is {props.name}'s outcast characteristic?</p>
        <RadioButtonGroup name={props.name} people = {props.people} questionAnswers={possibleAnswers} />
      </>
  );
}
export default QuizQuestions;