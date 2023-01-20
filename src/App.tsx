import React, { useState, useEffect } from 'react';
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
  
  //logic for loading spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    
  }, [])
  
  
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
      
      
      {loading ? (
        
      <div className="loading-spinner flex justify-center items-center">
        <Circles height='150' width='150' color='black'ariaLabel="circles-loading" />
      </div>
      ) : (
        null)}
      
      <Footer />  
    </div>
  );
}

export default App;
