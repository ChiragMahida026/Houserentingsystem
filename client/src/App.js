import './App.css';
import * as React from 'react';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Landing/>
    </BrowserRouter>
  );
};

export default App;
