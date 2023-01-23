import {RadioButtonGroup} from './RadioButtonGroup';

function QuizQuestions(props) {

  let possibleAnswers = props.people.map(person=> person.characteristic);
  possibleAnswers = possibleAnswers.sort(() => Math.random() - 0.5); // put in random order

  const title = `What is ${props.name}'s outcast characteristic?`

  return (
      <div>
        <RadioButtonGroup name={props.name} people = {props.people} questionAnswers={possibleAnswers} title={title} />
      </div>
  );
}
export default QuizQuestions;