
import './App.css';
import { Link } from "react-router-dom";
import { SplitScreen } from './SplitScreen';
import Main from "./Main";
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { RegularList } from './RegularList';
import { LargePersonListItem } from './people/LargePersonListItem';
import { Modal } from './Modal';
import { Header } from './Header';


const people = [
  {
    id: "Wednesday",
    key: "Wednesday",
    name: "Wednesday",
    age: 14,
    hairColor: "brown-black",
    hobbies: ["writing", "cello", "fencing "],
    characteristic: "Prophecy",
    imageSrc: "WednesdayAddamsImage.png"
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
  console.log(people);
  return (
    <div className="App">
       <Header name="Wednesday" />
       <Main name="Wednesday" />
       <RegularList
     	items={people}
     	resourceName="person"
     	itemComponent={SmallPersonListItem} />
       <Footer />
    </div>

    // <>
    //   <SplitScreen leftWeight={1} rightWeight={4}>
    //     <LeftHandComponent name="Enid" />
    //     <RightHandComponent message="HelloWorld" />
    //   </SplitScreen>
    // </>

    // <>
    // <Modal>
    //   <LargePersonListItem person={people[0]} />
    // </Modal>
    // </>


    // {/* <RegularList
    // 	items={people}
    // 	resourceName="person"
    // 	itemComponent={SmallPersonListItem} /> */}

    //  {/* <ImageList items={people} /> */}

    //</></>

  );
}

export default App;
