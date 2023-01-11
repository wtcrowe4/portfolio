import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Hero />
    </div>
  );
}

export default App;
