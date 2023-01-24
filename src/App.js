
import './css/App.css';
import { MainLayout } from './MainLayout';
import { useState, useEffect } from 'react';

const people = [
  {
    id: "Wednesday",
    key: "Wednesday",
    name: "Wednesday",
    age: 14,
    hairColor: "brown-black",
    hobbies: ["writing", "cello", "fencing "],
    characteristic: "Prophecy",
    roleInTheShow: "Wednesday is the main character of the show.",
    imageSrc: "WednesdayAddams.png"
  }
  , {
    id: "Enid",
    key: "Enid",
    name: "Enid",
    age: 15,
    hairColor: "blonde with rainbows in it",
    hobbies: ["shopping"],
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
    hairColor: "dishwater blonde/brown",
    hobbies: ["being a member of the Nightshades"],
    characteristic: "Drawings come to life",
    roleInTheShow: "Xavier has pursued Wednesday. Wednesday has been suspicious of Xavier.",
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
    roleInTheShow: "Bianca is Wednesday's frenemie.",
    imageSrc: "Bianca.jpg"
  }
  , {
    id: "Ajax",
    key: "Ajax",
    name: "Ajax",
    age: 14,
    hairColor: "dark brown",
    hobbies: ["None that we know of"],
    characteristic: "Gorgon",
    roleInTheShow: "Ajax is Enid's love interest.",
    imageSrc: "Ajax.jpg"
  }
  , {
    id: "Thing",
    key: "Thing",
    name: "Thing",
    age: 250,
    hairColor: "no hair that we know of",
    hobbies: ["Fixing Wednesday up with serial killers and stealing vintage dresses"],
    characteristic: "Uh... missing a body",
    roleInTheShow: "Thing was sent to spy on Wednesday by Gomez and Morticia. He's Wednesday's friend, helper.",
    imageSrc: "Thing.jpg"
  }
  , {
    id: "UncleFester",
    key: "UncleFester",
    name: "Uncle Fester",
    age: 68,
    hairColor: "Uncle Fester has no hair due to his experiments with electricity",
    hobbies: ["Electricity", "Robbing Banks"],
    characteristic: "Inventor",
    roleInTheShow: "Uncle Fester showed up to be... Uncle Fester.",
    imageSrc: "UncleFester.jpg"
  }
]


function App(props) {
  const [person, setPerson] = useState(people[0]);

   const callback = (newPerson) => {
        setPerson(newPerson);
    }
    
  useEffect(() => {
    console.log(`Use Effect Person is ${person.name} right now`);
  }, [person]);



  return (
    <div className="App">
      <MainLayout people={people} person={person} callback={callback}/>
    </div>
  );
}

export default App;
