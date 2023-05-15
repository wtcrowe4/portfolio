import React from 'react';
import holdem from '../assets/screenshots/holdem_screenshot.png'
import reactSports from '../assets/screenshots/sports_screenshot.png'

function Projects(): React.ReactElement {
    return (
        <div className="projects-container w-100 m-auto mt-10">
            <div className="projects-header">
                <h1 className="text-white m-20 header">Projects</h1>
            </div>
            <div className="projects-content grid grid-cols-2 row-auto m-20 p-10">
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-4xl pb-5">Texas Hold'em</h2>
                    <p className="text-white text-2xl">This was my very first project. It is a simple frontend browser game styled with SCSS and currently being converted to Typescript.</p>
                </div>
                <div className="col-span-1 m-20 projects-picture-section">
                    <img className='p-0' src={holdem} alt="project1 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-4xl pb-5">Sports Book</h2>
                    <p className="text-white text-2xl">This is one of the first React projects I worked on.  It uses current data from an API through RapidAPI.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src={reactSports} alt="project2 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-4xl pb-5">Project 3</h2>
                    <p className="text-white text-2xl">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project3 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-4xl pb-5">Project 4</h2>
                    <p className="text-white text-2xl">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project4 screenshot"></img>
                </div>    
            </div>
        </div>
    )
}

export default Projects;
