import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        //create a portfolio nav bar
        <nav className="flex justify-between items-center h-16 bg-black text-white " role="navigation">
            <Link to="/" className="pl-8">
                Thomas Crowe
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
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