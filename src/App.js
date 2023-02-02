
import './css/App.css';
import Main from './Main';
import { printProps } from './printProps';
import { Header } from './Header';
import { Footer } from './Footer';
import './css/LeftHandComponent.css';
import './css/RightHandComponent.css'


function App(props) {
  
  // const LeftHandComponent = () => {
  //   return (
  //     <div>
  //       <nav className="leftHandComponent">
  //         <RegularList
  //           items={people}
  //           resourceName="person"
  //           itemComponent={SmallPersonListItem}
  //           callback={callback} />
  //       </nav>
  //     </div>
  //   )
  // }
  
  const MainWrapped = printProps(Main);

  // const RightHandComponent = () => {
  //   return (
  //     <div className="rightHandComponent">
  //       <MainWrapped people={people} person={person} possibleQuizAnswers={possibleQuizAnswers} />
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <Header />
      {/* <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={2}
      /> */}
      <MainWrapped />
      <Footer />
    </div>
  );
}

export default App;
