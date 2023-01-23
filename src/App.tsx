import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Pages/Resume';
import Testimonials from './Pages/Testimonials';
import { Circles } from 'react-loader-spinner';





function App(): React.ReactElement {
  
  //logic for loading spinner
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
      setLoading(false);
   

    
  }, [])
  
  
  return (
    <>  
    {loading ? (
        
        <div className="loading-spinner flex justify-center align-center items-center m-auto">
          <Circles height='150' width='150' color='black'ariaLabel="circles-loading" />
        </div>
      
      ) : (
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
      
      
      
        
      
      <Footer />  
    </div>
    )}
    </>
  );
}

export default App;
