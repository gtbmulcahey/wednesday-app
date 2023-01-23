
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
    imageSrc: "EnidImage.jpg"
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
