
import './App.css';
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
    roleInTheShow: "Wednesday is the main character of the show",
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
    roleInTheShow: "Enid is Wednesday's roommate and friend",
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
    roleInTheShow: "Eugene is Wednesday's friend. She has a soft spot for him as he reminds her of Pugsley",
    imageSrc: "Eugene.png"
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
    imageSrc: "XavierThorpe.jpg"
  }
  , {
    id: "Weems",
    key: "Weems",
    name: "Weems",
    age: 48,
    hairColor: "blonde, very blonde",
    hobbies: ["being a tough principal"],
    characteristic: "Shape Shifter",
    roleInTheShow: "Principal Weems is one tough lady. She keeps the school in line. What a job!",
    imageSrc: "Weems.jpg"
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
