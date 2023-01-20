import { useState, useEffect } from "react";
import QuizQuestions from "./QuizQuestions";
import WednesdayAddamsImage from './WednesdayAddams.png';
import EnidImage from './EnidImage.jpg';
import {Header} from './Header'


function Main(props) {
  const [focusCharacter, setFocusCharacter] = useState(props.name);


  useEffect(() => {
    console.log(`Focus character is ${focusCharacter} right now`);
  }, [focusCharacter]);

  const outcastCharacteristics = [
    "Shape Shifter",
    "Prophecy",
    "Siren",
    "Hyde",
    "Werewolf",
    "Drawings come to life",
    "Gorgon"
  ];

  console.log(`In Main. quiz answers are ${outcastCharacteristics}`);

  const charactersObject = [
    { id: "Wednesday", key: "Wednesday", name: "Wednesday", characteristic: "Prophecy", imgageSrc: { WednesdayAddamsImage } },
    { id: "Weems", key: "Weems", name: "Weems", characteristic: "Shape Shifter" },
    { id: "Bianca", key: "Bianca", name: "Bianca", characteristic: "Siren" },
    { id: "Tyler", key: "Tyler", name: "Tyler", characteristic: "Hyde" },
    { id: "Enid", key: "Enid", name: "Enid", characteristic: "Werewolf", imageSrc: { EnidImage } }
  ]
  console.log(`In Main. charactersObject is ${charactersObject}`);

  return (
    <form>
      <img height="200"
        alt="Wednesday"
        src={WednesdayAddamsImage} />

      <QuizQuestions name={focusCharacter} charactersObject={charactersObject} questionAnswers={outcastCharacteristics} correctAnswer={"Prophecy"} />
    
    </form>
  );
}
export default Main;