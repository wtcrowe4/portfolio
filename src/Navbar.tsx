import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    
    
    const showDropdown = () => {
        const dropdown = document.querySelector('.dropdown-menu')
        dropdown?.classList.toggle('hidden')
        


        
    }

    
    
    return (
        
        <nav className="flex justify-between items-center h-16 bg-black text-white " role="navigation">
            <Link to="/" className="pl-8">
                Thomas Crowe
            </Link>
            <div className="px-4 cursor-pointer md:hidden dropdown relative">
          
                <svg className="w-6 h-6 dropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={showDropdown}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            
                <ul className="dropdown-menu min-w-max hidden bg-black z-50 float-right py-2 list-none text-right mt-40 m-5  " aria-labelledby="dropdownNavigation">
                    <li className="dropdown-item">
                        <Link to="/about" className="p-4">
                            About
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/projects" className="p-4">
                            Projects
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/resume" className="p-4">
                            Resume
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/testimonials" className="p-4">
                            Testimonials
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/contact" className="p-4">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/about" className="p-4">
                    About
                </Link>
                <Link to="/projects" className="p-4">
                    Projects
                </Link>
                <Link to="/resume" className="p-4">
                    Resume
                </Link>
                <Link to="/testimonials" className="p-4">
                    Testimonials
                </Link>
                <Link to="/contact" className="p-4">
                    Contact
                </Link>
            </div>
        </nav>


    )
}

export default Navbar;