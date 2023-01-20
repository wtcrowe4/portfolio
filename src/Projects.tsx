import React from 'react';

function Projects(): React.ReactElement {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1 className="text-white text-3xl m-20 header">Projects</h1>
            </div>
            <div className="projects-content grid grid-cols-2 row-auto m-20 p-10">
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-2xl">Project 1</h2>
                    <p className="text-white">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project1 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-2xl">Project 2</h2>
                    <p className="text-white">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project2 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-2xl">Project 3</h2>
                    <p className="text-white">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project3 screenshot"></img>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <h2 className="text-white text-2xl">Project 4</h2>
                    <p className="text-white">This is a project I worked on.</p>
                </div>
                <div className="col-span-1 m-20 projects-content-section">
                    <img src="#" alt="project4 screenshot"></img>
                </div>    
            </div>
        </div>
    )
}

export default Projects;
