
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
    id: "Tyler",
    key: "Tyler",
    name: "Tyler",
    age: 15,
    hairColor: "dishwater blonde",
    hobbies: ["serving coffee"],
    characteristic: "None... that we know of!",
    roleInTheShow: "Tyler is Wednesday's friend who wants to be more than friends",
    imageSrc: "Tyler.png"
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
