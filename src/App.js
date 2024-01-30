import React from 'react';
import './css/App.css';
import Main from './Main';
import { printProps } from './printProps';
import { Header } from './Header';
import { Footer } from './Footer';
import './css/LeftHandComponent.css';
import './css/RightHandComponent.css';

// The App component is the root component of the application.
// It renders the Header, Main, and Footer components.
const App = () => {
  // Wrap the Main component with printProps for debugging purposes.
  const MainWrapped = printProps(Main);

  return (
    <div className="App">
      <Header />
      <MainWrapped />
      <Footer />
    </div>
  );
};

export default App;

