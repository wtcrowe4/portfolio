import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/images/tc.jpg';

function Navbar(): React.ReactElement {
    
    
    const showDropdown = () => {
        const dropdown = document.querySelector('.dropdown-menu')
        dropdown?.classList.toggle('hidden')
        //keepshowing the svg
    }
    
    const hideDropdown = () => {
        const dropdown = document.querySelector('.dropdown-menu')
        dropdown?.classList.add('hidden')
        //make this clickable over the whole screen
    }


    
    
    return (
        <div className="navbar-container w-100">
            <nav className="flex justify-between items-center h-16 bg-transparent text-white text-xl" role="navigation">
                <Link to="/" className="pl-8">
                    <img id='main-logo' className="w-25 h-25 rounded-full border border-white mt-11" src={logo} alt="logo"></img>
                </Link>
                <div className="px-4 cursor-pointer lg:hidden relative dropdown-container">
            
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={showDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                
                    <ul className="dropdown-menu min-w-max hidden z-50 float-right py-2 list-none text-right" onClick={hideDropdown} aria-labelledby="dropdownNavigation">
                        <li className="dropdown-item m-3">
                            <Link to="/about" className="p-4">
                                About
                            </Link>
                        </li>
                        <li className="dropdown-item m-3">
                            <Link to="/projects" className="p-4">
                                Projects
                            </Link>
                        </li>
                        <li className="dropdown-item m-3">
                            <Link to="/resume" className="p-4">
                                Resume
                            </Link>
                        </li>
                        <li className="dropdown-item m-3">
                            <Link to="/testimonials" className="p-4">
                                Testimonials
                            </Link>
                        </li>
                        <li className="dropdown-item m-3">
                            <Link to="/contact" className="p-4">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="pr-8 lg:block hidden links">
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
        </div>

    )
}

export default Navbar;