import { useEffect } from "react";
import QuizQuestions from "./QuizQuestions";
import WednesdayAddamsImage from './WednesdayAddams.png';
import EnidImage from './EnidImage.jpg';
import { LargePersonListItem } from "./people/LargePersonListItem";

function Main({people, person}) {

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
  }, [person]);

  const outcastCharacteristics = [
    "Shape Shifter",
    "Prophecy",
    "Siren",
    "Hyde",
    "Werewolf",
    "Drawings come to life",
    "Gorgon",
    "Can control bees"
  ];

  const charactersObject = [
    { id: "Wednesday", key: "Wednesday", name: "Wednesday", characteristic: "Prophecy" },
    { id: "Weems", key: "Weems", name: "Weems", characteristic: "Shape Shifter" },
    { id: "Bianca", key: "Bianca", name: "Bianca", characteristic: "Siren" },
    { id: "Tyler", key: "Tyler", name: "Tyler", characteristic: "Hyde" },
    { id: "Enid", key: "Enid", name: "Enid", characteristic: "Werewolf" },
    { id: "Eugene", key: "Eugene", name: "Eugene", characteristic: "Can control bees"}
  ]

  const images = require.context('./', true);

  return (
    <form>
      <img height="200"
        alt={person.name}
        src={images(`./${person.imageSrc}`)}/>

      <LargePersonListItem person={person}/>

      <QuizQuestions name={person.name} charactersObject={charactersObject} questionAnswers={outcastCharacteristics} correctAnswer={"Prophecy"} />
     
      
    </form>
  );
}
export default Main;