import React from 'react';
import { Circles } from 'react-loader-spinner';

function Hero() {
    return (

        

        <div className="hero-container">
            <div className="loading-spinner flex justify-center items-center">
                <Circles height='150' width='150' color='black'ariaLabel="circles-loading" />
            </div>
            <div className="hero-text">
                <h1 className="text-white">Thomas Crowe</h1>
                <h2 className="text-white">Full Stack Web Developer</h2>
            </div>
        </div>
    )
}

export default Hero;