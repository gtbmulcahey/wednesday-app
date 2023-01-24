import { useEffect } from "react";
import Quiz from "./Quiz";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { printProps } from "./printProps";

function Main({people, person}) {

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
  }, [person]);

  const images = require.context('./images', true);

  const QuizWrapped = printProps(Quiz);

  return (
    <form>
      <img height="200"
        alt={person.name}
        src={images(`./${person.imageSrc}`)}/>

      <LargePersonListItem person={person}/>
      <QuizWrapped person={person} people={people}/>
    
    </form>
  );
}
export default Main;