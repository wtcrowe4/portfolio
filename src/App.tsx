import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
