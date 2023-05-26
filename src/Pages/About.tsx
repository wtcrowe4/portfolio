import React from 'react';
import weddingPhoto from '../assets/images/wedding.jpg'
import kitchen from '../assets/images/kitchen.jpg'
import skills from '../assets/images/skills.jpg'
import college from '../assets/images/college.webp'
import { tv } from 'tailwind-variants'

function About(): React.ReactElement {
    
    const sectionStyle = tv({
        base: 'col-span-1 m-20',
        variants: {
            content: {
                text: 'about-content-section',
                photo: 'about-photo'
            }
        }
    })
    
    const textStyle = tv({
        base: 'text-white text-4xl',
        variants: {
            size: {
                header: 'text-5xl about-sub-headers font-semibold',
                content: 'text-4xl',
            }
        }
    })
    
    //"col-span-1 m-20 about-content-section"
    //"text-white text-4xl about-sub-headers"
    //"text-white text-4xl"
    
    return (
        <div className="about-container mt-10">
            <div className="about-header header">
                <h1 className="text-white m-20 header">About Me</h1>
            </div>
            <div className="about-content grid grid-cols-2 row-auto m-50 p-10">
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className={textStyle({size: 'header'})}>Personal Life</h2>
                    <p className={textStyle({size: 'content'})}>
                        I am a 32 year old full stack web developer from Greenville, SC. I am recently married and we have a baby on the way.  I enjoy playing golf, chess, and fishing in my free time.  I like watching any type of sport and using stats to dive deeper into them.
                    </p>
                </div>
                <div className={sectionStyle({content: 'photo'})}>
                    <img src={weddingPhoto} alt="personal"></img>
                </div>
                <div className={sectionStyle({content: 'photo'})}>
                    <img src={kitchen} alt="professional"></img>
                </div>  
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className={textStyle({size: 'header'})}>Professional Life</h2>
                    <p className={textStyle({size: 'content'})}>
                        I have over 10 years experience in the service industry, most of them in a management or leadership role.  I am a motivated and driven individual ready to start my career in tech.
                    </p>
                </div>
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className={textStyle({size: 'header'})}>Skills</h2>
                    
                        <ul className={textStyle({size: 'content'})}>
                            <li>Motivated</li>
                            <li>Driven</li>
                            <li>Quick Learner</li>
                            <li>Team Player</li>
                            <li>Problem Solver</li>
                        </ul>
                    
                </div>
                <div className={sectionStyle({content: 'photo'})}>
                    <img src={skills} alt="skills"></img>
                </div>
                <div className={sectionStyle({content: 'photo'})}>
                    <img src={college} alt="education"></img>
                </div>
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className={textStyle({size: 'header'})}>Education</h2>
                    <p className={textStyle({size: 'content'})}>
                        I studied Bichemistry at the Honors College at College of Charleston before realizing my passion for computers.  I transferred to Clemson University and studied Computer Engineering.  As I matured I realized my talents as a programmer and decided to go back to school at 32 and complete a Software Development Program at N.C. State University. 
                    </p>
                </div>
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className="text-white text-4xl about-sub-headers pt-10">Main Technology</h2>
                    {/* <h3 className="text-white text-4xl">My main tech stack is: </h3> */}
                        <ul className="text-white text-4xl pb-10">
                            {/* <li>HTML</li>
                            <li>CSS</li> */}
                            <li>SCSS</li>
                            <li>JavaScript</li>
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
                            <li>Jupyter Notebooks</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>.NET MAUI</li>
                        </ul>
                    
                </div>
                <div className={sectionStyle({content: 'text'})}>
                    <h2 className={textStyle({size: 'header'})}>Secondary Technology</h2>
                    {/* <h3 className="text-white text-4xl">Other tech stacks I have experimented with: </h3> */}
                        <ul className={textStyle({size: 'content'})}>
                            
                            <li>TypeScript</li>
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