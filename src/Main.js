import { useEffect } from "react";
import Quiz from "./Quiz";
import { LargePersonListItem } from "./people/LargePersonListItem";

function Main({people, person}) {

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
  }, [person]);

  const images = require.context('./images', true);

  return (
    <form>
      <img height="200"
        alt={person.name}
        src={images(`./${person.imageSrc}`)}/>

      <LargePersonListItem person={person}/>
      <Quiz person={person} people={people}/>
    
    </form>
  );
}
export default Main;