import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { printProps } from "./printProps";
import { ImageDisplay } from "./ImageDisplay";
import { PreviousButton } from "./composition";
import { NextButton } from "./composition";
import './css/Main.css';

const people = [
  {
    id: 1,
    key: "Wednesday",
    name: "Wednesday",
    age: 14,
    hairColor: "brown-black",
    hobbies: ["fencing", "playing the cello at all hours of the night", "writing stories on an old fashioned type writer"],
    personality: "storm cloud, serious, gloomy",
    characteristic: "Prophecy",
    roleInTheShow: "Wednesday is the main character of the show. She gets sent to Nevermore, a school for outcasts. The fun begins...",
    imageSrc: "Wednesday.jpg"
  }
  , {
    id: 2,
    key: "Enid",
    name: "Enid",
    age: 15,
    hairColor: "blonde with rainbows or occasionally pink.",
    hobbies: ["shopping", "decorating with rainbows", "Top 40 Music"],
    personality: "sunshine, bright, shiny, bubbly",
    characteristic: "Werewolf",
    roleInTheShow: "Enid is Wednesday's roommate and friend.",
    imageSrc: "EnidImage.jpg"
  }
  , {
    id: 3,
    key: "Eugene",
    name: "Eugene",
    age: 14,
    hairColor: "brown",
    hobbies: ["bee keeping"],
    personality: "quiet, introvert",
    characteristic: "Controls Bees",
    roleInTheShow: "Eugene is Wednesday's friend. She has a soft spot for him as he reminds her of Pugsley.",
    imageSrc: "Eugene.jpg"
  }
  , {
    id: 4,
    key: "Xavier",
    name: "Xavier",
    age: 15,
    hairColor: "dirty blonde/brown",
    hobbies: ["being a member of the Nightshades"],
    characteristic: "Drawings come to life",
    personality: "charming, untrustworthy, secretive, flirty",
    roleInTheShow: "Xavier used to date Bianca and is now pursuing Wednesday. This has further complicated Wednesday's relationship with Bianca. We're always wondering if Xavier is a good guy or a bad guy.",
    imageSrc: "Xavier.jpg"
  }
  , {
    id: 5,
    key: "Weems",
    name: "Weems",
    age: 56,
    hairColor: "silver gray",
    hobbies: ["being a tough principal"],
    personality: "students see her as tough, but we get the feeling she's a softer more vulnerable person than the students see.",
    characteristic: "Shape Shifter",
    roleInTheShow: "Principal Weems runs Nevermore. She has a complicated relationship with Morticia which further complicates her relationship with Wednesday.",
    imageSrc: "Weems.jpg"
  }
  , {
    id: 6,
    key: "Tyler",
    name: "Tyler",
    age: 16,
    hairColor: "brown",
    hobbies: ["working at coffee shop"],
    characteristic: "Hyde",
    personality: "sweet and sensitve",
    roleInTheShow: "Wednesday's friend and potential love interest.",
    imageSrc: "Tyler.jpg"
  }
  , {
    id: 7,
    key: "Bianca",
    name: "Bianca",
    age: 15,
    hairColor: "dark brown",
    hobbies: ["fencing, being a member of the Nightshades"],
    characteristic: "Siren",
    personality: "tough, but underneath that she's insecure",
    roleInTheShow: "Bianca is the queen bee and highly accomplished. She has a competitive relationship with Wednesday. She has an interesting backstory which makes us root for her in the end.",
    imageSrc: "Bianca.jpg"
  }
  , {
    id: 8,
    key: "Ajax",
    name: "Ajax",
    age: 14,
    hairColor: "Ajax has snakes for hair. We don't really know what color the snakes are. Maybe that's a good thing.",
    hobbies: ["being a member of the Nightshades"],
    characteristic: "Gorgon",
    personality: "awkward and shy",
    roleInTheShow: "Ajax is Enid's love interest. His outcast characteristic prevented him from going on a date with Enid.",
    imageSrc: "Ajax.jpg"
  }
  , {
    id: 9,
    key: "Thing",
    name: "Thing",
    age: 250,
    hairColor: "no hair that we know of",
    hobbies: ["Fixing Wednesday up with serial killers", "stealing vintage dresses"],
    personality: "helpful, a bit mischievious",
    characteristic: "Gets around without a body",
    roleInTheShow: "Thing was sent to spy on Wednesday by Gomez and Morticia. He's Wednesday's friend, helper.",
    imageSrc: "Thing.jpg"
  }
  ,
  {
    id: 10,
    key: "UncleFester",
    name: "Uncle Fester",
    age: 68,
    hairColor: "Uncle Fester has no hair due to his experiments with electricity",
    hobbies: ["Dynamite", "Robbing Banks", "Driving incognito getaway sidecars"],
    characteristic: "Can generate electricity",
    personality: "eccentric",
    roleInTheShow: "Uncle Fester appears out of nowhere when Wednesday really needs him.",
    imageSrc: "UncleFester.jpg"
  }
  , {
    id: 11,
    key: "Thornhill",
    name: "Thornhill",
    age: 49,
    hairColor: "Auburn",
    hobbies: ["Plants, gardening"],
    personality: "caring, sweet, maternal",
    characteristic: "Normie",
    roleInTheShow: "Thornhill is Wednesday's dorm mother and botanical sciences teacher. Thornhill actor, Christina Ricci, also played Wednesday in The Addams Family (1991) when she was ten years old and again in Addams Family Values (1993).",
    imageSrc: "Thornhill.jpg"
  }
  , {
    id: 12,
    key: "Yoko",
    name: "Yoko",
    age: 15,
    hairColor: "Brown Black",
    hobbies: ["drinking blood smoothies"],
    personality: "cool",
    characteristic: "Vampire",
    roleInTheShow: "Yoko doesn't care what people think. She's the effortless cool girl. Enid becomes roommates with Yoko.",
    imageSrc: "Yoko.jpg"

  }
]

function Main() {

  const [person, setPerson] = useState(people[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(`Focus character is ${person.name} right now`);
    console.log(`Index is ${index} right now`);
  }, [person, index]);

    
  const possibleQuizAnswers = shufflePossibleAnswers(people.map(p => p.characteristic));
  
  function shufflePossibleAnswers(choices) {
    return choices.sort(() => Math.random() - 0.5); // put in random order
  }
  
    const goToPrevious = () => {
      if(index > 0) {
        setPerson(people[index - 1]);
        setIndex(index - 1);
      }
    }

    const goToNext = () => {
      if(index < (people.length - 1)) {
        setPerson(people[index + 1]);
        setIndex(index + 1);
      }
    };
  
  const QuizWrapped = printProps(Quiz);
  const ImageWrapped = printProps(ImageDisplay);

  return (
    <>
      <p className="navigateThroughImages">
        <PreviousButton onClick={goToPrevious} />
        <ImageWrapped height="150" width="150" alt={person.name} person={person} imageName={person.imageSrc} />
        <NextButton onClick={goToNext} />
      </p>
      <LargePersonListItem person={person} />
      <QuizWrapped person={person} people={people} possibleQuizAnswers={possibleQuizAnswers} />
    </>
  );
}
export default Main;