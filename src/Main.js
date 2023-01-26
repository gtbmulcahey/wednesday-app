import { useEffect } from "react";
import Quiz from "./Quiz";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { printProps } from "./printProps";
import { ImageDisplay } from "./ImageDisplay";

function Main({people, person, possibleQuizAnswers}) {

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
  }, [person]);

  const QuizWrapped = printProps(Quiz);
  const ImageWrapped = printProps(ImageDisplay);

  return (
    <>
      <ImageWrapped height="200" alt={person.name} person={person} imageName={person.imageSrc}/>
      <LargePersonListItem person={person}/>
      <QuizWrapped person={person} people={people} possibleQuizAnswers={possibleQuizAnswers}/>
    </>
  );
}
export default Main;