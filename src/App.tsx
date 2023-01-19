import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import Testimonials from './Testimonials';
import { Circles } from 'react-loader-spinner';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
      <div className="loading-spinner flex justify-center items-center">
        <Circles height='150' width='150' color='black'ariaLabel="circles-loading" />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
