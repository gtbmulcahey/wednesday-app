
import './css/App.css';
import Main from './Main';
import { printProps } from './printProps';
import { Header } from './Header';
import { Footer } from './Footer';
import './css/LeftHandComponent.css';
import './css/RightHandComponent.css'


function App(props) {
  
  
  const MainWrapped = printProps(Main);

  return (
    <div className="App">
      <Header />
      <MainWrapped />
      <Footer />
    </div>
  );
}

export default App;
