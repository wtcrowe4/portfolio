//create an about page
import React from 'react';


function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="text-white text-3xl m-3">About Me</h1>
            </div>
            <div className="about-content grid grid-cols-2 row-auto m-50 p-10">
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Personal Life</h2>
                    <p className="text-white">I am a 32 year old full stack web developer from Greenville, SC. I am recently married and enjoy playing golf and chess in my free time.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="personal"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="professional"></img>
                </div>  
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Professional Life</h2>
                    <p className="text-white">I love to code.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Skills</h2>
                    <p className="text-white">I love to code.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="skills"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="education"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Education</h2>
                    <p className="text-white">I love to code.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Technology</h2>
                    <p className="text-white">My main tech stack</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl">Technology</h2>
                    <p className="text-white">Other tech stacks I have experimented with</p>
                </div>
            </div>
        </div>
    )
}

export default About;