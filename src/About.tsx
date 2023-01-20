//create an about page
import React from 'react';


function About(): React.ReactElement {
    return (
        <div className="about-container">
            <div className="about-header header">
                <h1 className="text-white text-3xl m-20 header">About Me</h1>
            </div>
            <div className="about-content grid grid-cols-2 row-auto m-50 p-10">
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Personal Life</h2>
                    <p className="text-white">I am a 32 year old full stack web developer from Greenville, SC. I am recently married and enjoy playing golf and chess in my free time.  I like watching all types of sports.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="personal"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="professional"></img>
                </div>  
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Professional Life</h2>
                    <p className="text-white">I have over 10 years experience in the service industry, most of them in a management or leadership role.  I am a motivated and driven individual ready to start writing code professionally.</p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Skills</h2>
                    
                        <ul className="text-white">
                            <li>Motivated</li>
                            <li>Driven</li>
                            <li>Quick Learner</li>
                            <li>Team Player</li>
                            <li>Problem Solver</li>
                        </ul>
                    
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="skills"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <img src="#" alt="education"></img>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Education</h2>
                    <p className="text-white">I studied Bichemistry at the Honors College at College of Charleston before realizing my passion for computers.  I transferred to Clemson University and studied Computer Engineering.  As I matured I realized my talents as a programmer and decided to go back to school at 32 and complete a Software Development Program at N.C. State University. </p>
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Main Technology</h2>
                    <h3 className="text-white">My main tech stack is: </h3>
                        <ul className="text-white">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>JavaScrih3t</li>
                            <li>Tyh3eScript</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>API</li>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    
                </div>
                <div className="col-span-1 m-20 about-content-section">
                    <h2 className="text-white text-2xl about-sub-headers">Secondary Technology</h2>
                    <h3 className="text-white">Other tech stacks I have experimented with: </h3>
                        <ul className="text-white">
                            <li>Jupyter Notebooks</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Angular</li>
                            <li>Vue</li>
                            <li>Svelt</li>
                            <li>Tailwind</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>Heroku</li>
                            <li>AWS</li>
                            <li>Linux</li>
                            <li>nginx</li>
                            <li>Apache</li>

                        </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default About;