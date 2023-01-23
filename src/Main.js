import { useEffect } from "react";
import QuizQuestions from "./QuizQuestions";
import WednesdayAddamsImage from './WednesdayAddams.png';
import EnidImage from './EnidImage.jpg';
import { LargePersonListItem } from "./people/LargePersonListItem";

function Main({people, person}) {
  console.log(`people are ${people}`);
  console.log(`person name is ${person.name}`);

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
    "Gorgon"
  ];


  const charactersObject = [
    { id: "Wednesday", key: "Wednesday", name: "Wednesday", characteristic: "Prophecy", imgageSrc: { WednesdayAddamsImage } },
    { id: "Weems", key: "Weems", name: "Weems", characteristic: "Shape Shifter" },
    { id: "Bianca", key: "Bianca", name: "Bianca", characteristic: "Siren" },
    { id: "Tyler", key: "Tyler", name: "Tyler", characteristic: "Hyde" },
    { id: "Enid", key: "Enid", name: "Enid", characteristic: "Werewolf", imageSrc: { EnidImage } }
  ]

  return (
    <form>
      <img height="200"
        alt="Wednesday"
        src={WednesdayAddamsImage} />

      <QuizQuestions name={person.name} charactersObject={charactersObject} questionAnswers={outcastCharacteristics} correctAnswer={"Prophecy"} />
     
      <LargePersonListItem person={person}/>
    </form>
  );
}
export default Main;