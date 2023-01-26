
import './css/App.css';
import Main from './Main';
import { useState, useEffect } from 'react';
import { printProps } from './printProps';
import { Header } from './Header';
import { RegularList } from './RegularList';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { Footer } from './Footer';
import { SplitScreen } from './SplitScreen';
import './css/LeftHandComponent.css';
import './css/RightHandComponent.css'

const people = [
  {
    id: "Wednesday",
    key: "Wednesday",
    name: "Wednesday",
    age: 14,
    hairColor: "brown-black",
    hobbies: ["fencing", "playing the cello at all hours of the night", "writing stories on an old fashioned type writer"],
    characteristic: "Prophecy",
    roleInTheShow: "Wednesday is the main character of the show. She gets sent to Nevermore, a school for outcasts. The fun begins...",
    imageSrc: "Wednesday.jpg"
  }
  , {
    id: "Enid",
    key: "Enid",
    name: "Enid",
    age: 15,
    hairColor: "blonde with rainbows or occasionally pink.",
    hobbies: ["shopping", "decorating with rainbows", "Top 40 Music"],
    characteristic: "Werewolf",
    roleInTheShow: "Enid is Wednesday's roommate and friend.",
    imageSrc: "EnidImage.jpg"
  }
  , {
    id: "Eugene",
    key: "Eugene",
    name: "Eugene",
    age: 14,
    hairColor: "brown",
    hobbies: ["bee keeping"],
    characteristic: "Controls Bees",
    roleInTheShow: "Eugene is Wednesday's friend. She has a soft spot for him as he reminds her of Pugsley.",
    imageSrc: "Eugene.jpg"
  }
  , {
    id: "Xavier",
    key: "Xavier",
    name: "Xavier",
    age: 15,
    hairColor: "dirty blonde/brown",
    hobbies: ["being a member of the Nightshades"],
    characteristic: "Drawings come to life",
    roleInTheShow: "Xavier used to date Bianca and is now pursuing Wednesday. This has further complicated Wednesday's relationship with Bianca. We're always wondering if Xavier is a good guy or a bad guy.",
    imageSrc: "Xavier.jpg"
  }
  , {
    id: "Weems",
    key: "Weems",
    name: "Weems",
    age: 56,
    hairColor: "silver gray",
    hobbies: ["being a tough principal"],
    characteristic: "Shape Shifter",
    roleInTheShow: "Principal Weems is one tough lady. She keeps the school in line. What a job!",
    imageSrc: "Weems.jpg"
  }
  , {
    id: "Tyler",
    key: "Tyler",
    name: "Tyler",
    age: 16,
    hairColor: "brown",
    hobbies: ["working at coffee shop"],
    characteristic: "Hyde",
    roleInTheShow: "Wednesday's friend and potential love interest.",
    imageSrc: "Tyler.jpg"
  }
  , {
    id: "Bianca",
    key: "Bianca",
    name: "Bianca",
    age: 15,
    hairColor: "dark brown",
    hobbies: ["fencing, being a member of the Nightshades"],
    characteristic: "Siren",
    roleInTheShow: "Bianca is highly accomplished and has a competitive relationship with Wednesday. She has an interesting backstory which makes us root for her in the end.",
    imageSrc: "Bianca.jpg"
  }
  , {
    id: "Ajax",
    key: "Ajax",
    name: "Ajax",
    age: 14,
    hairColor: "dark brown",
    hobbies: ["being a member of the Nightshades"],
    characteristic: "Gorgon",
    roleInTheShow: "Ajax is Enid's love interest. His outcast characteristic prevented him from going on a date with Enid.",
    imageSrc: "Ajax.jpg"
  }
  , {
    id: "Thing",
    key: "Thing",
    name: "Thing",
    age: 250,
    hairColor: "no hair that we know of",
    hobbies: ["Fixing Wednesday up with serial killers", "stealing vintage dresses"],
    characteristic: "Gets around without a body",
    roleInTheShow: "Thing was sent to spy on Wednesday by Gomez and Morticia. He's Wednesday's friend, helper.",
    imageSrc: "Thing.jpg"
  }
  ,
  {
    id: "UncleFester",
    key: "UncleFester",
    name: "Uncle Fester",
    age: 68,
    hairColor: "Uncle Fester has no hair due to his experiments with electricity",
    hobbies: ["Dynamite", "Robbing Banks", "Driving incognito getaway sidecars"],
    characteristic: "Can generate electricity",
    roleInTheShow: "Uncle Fester appears out of nowhere when Wednesday really needs him.",
    imageSrc: "UncleFester.jpg"
  }
  , {
    id: "Thornhill",
    key: "Thornhill",
    name: "Thornhill",
    age: 49,
    hairColor: "Auburn",
    hobbies: ["Botany"],
    characteristic: "Normie",
    roleInTheShow: "Thornhill is Wednesday's dorm mother and botanical sciences teacher. Thornhill actor, Christina Ricci, also played Wednesday in The Addams Family (1991) when she was ten years old and again in Addams Family Values (1993).",
    imageSrc: "Thornhill.jpg"

  }
]

const possibleQuizAnswers = shufflePossibleAnswers(people.map(p => p.characteristic));

function shufflePossibleAnswers(choices) {
  return choices.sort(() => Math.random() - 0.5); // put in random order
}

function App(props) {
  const [person, setPerson] = useState(people[0]);


  const callback = (newPerson) => {
    setPerson(newPerson);
  }

  useEffect(() => {
    console.log(`Use Effect Person is ${person.name} right now`);
  }, [person]);


  const LeftHandComponent = () => {
    return (
      <div>
        <nav className="leftHandComponent">
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem}
            callback={callback} />
        </nav>
      </div>
    )
  }
  
  const MainWrapped = printProps(Main);

  const RightHandComponent = () => {
    return (
      <div className="rightHandComponent">
        <MainWrapped people={people} person={person} possibleQuizAnswers={possibleQuizAnswers} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header name={person.name} />
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={2}
      />
      <Footer />
    </div>
  );
}

export default App;
