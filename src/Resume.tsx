import React from "react";
import resume from "./assets/images/TechResume.jpg";

function Resume() {
    return (
        <div className="resume-container flex-col justify-center m-20">
            <h1 className="text-white text-3xl m-10 header">Resume</h1>
            {/* put a link to download the resume pdf here */}
            <a className='text-white m-10' href="/" download='./assets/TechResume.pdf'>Download Resume</a>
            <img className="resume-image m-auto mt-10" src={resume} alt="resume"></img>    
            
        </div>
    )
}

export default Resume;
