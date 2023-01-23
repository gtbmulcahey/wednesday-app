import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {About} from './About';
import {Enid} from './Enid';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/wednesday" element={<Main />} />
    </Routes>
  </BrowserRouter>

);


