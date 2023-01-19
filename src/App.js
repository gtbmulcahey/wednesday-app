
import './App.css';
import WednesdayAddamsImage from './WednesdayAddams.png';
//import EnidImage from './EnidImage.jpg';
import { Link } from "react-router-dom";
import { CharacterLink } from './CharacterLink';
import { SplitScreen } from './SplitScreen';
import Main from "./Main";
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { PersonImageListItem } from './people/PersonImageListItem';
import { RegularList } from './RegularList';
import { ImageList } from './ImageList';

const people = [
  {
    id: "Wednesday",
    key: "Wednesday",
    name: "Wednesday",
    age: 14,
    hairColor: "brown-black",
    hobbies: ["writing", "cello", "fencing "],
    characteristic: "Prophecy",
    imgageSrc: "WednesdayAddamsImage.png"
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


const LeftHandComponent = ({ name }) => {

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <nav>
        {/* <CharacterLink id="Enid" />{name} */}
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem} />
      </nav>
    </div>
  );
}

const RightHandComponent = ({ message }) => {
  return (
    <>
      <p style={{ backgroundColor: 'red' }}>Right!{message}</p>
      <Main name="Wednesday" />
      <Footer />
    </>
  );
}


function Footer(props) {
  return (
    <footer>
      <div>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </footer>
  )
}


function App() {

  

  const commonQuestions = [
    "What is this person's primary characteristic?",
    "Is this person a suspect?"
  ]

  console.log(people);
  return (
    // <div className="App">
    //    <Header name="Wednesday" />
    //    <Main name="Wednesday" />
    //    <Footer />
    // </div>

    <>
      <SplitScreen leftWeight={1} rightWeight={4}>
        <LeftHandComponent name="Enid" />
        <RightHandComponent message="HelloWorld" />
      </SplitScreen>
    </>
    // {/* <RegularList
    // 	items={people}
    // 	resourceName="person"
    // 	itemComponent={SmallPersonListItem} /> */}

    //  {/* <ImageList items={people} /> */}

    //</></>

  );
}

export default App;
