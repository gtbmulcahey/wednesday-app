import { useEffect } from "react";
import QuizQuestions from "./QuizQuestions";
import { LargePersonListItem } from "./people/LargePersonListItem";

function Main({people, person}) {

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
  }, [person]);

  const images = require.context('./', true);

  return (
    <form>
      <img height="200"
        alt={person.name}
        src={images(`./${person.imageSrc}`)}/>

      <LargePersonListItem person={person}/>
      <QuizQuestions name={person.name} people={people} />
    
    </form>
  );
}
export default Main;