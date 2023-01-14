import React from "react";
import resume from "./assets/images/TechResume.jpg";

function Resume() {
    return (
        <div className="resume-container flex-col justify-center m-20">
            <h1 className="text-white text-3xl m-10">Resume</h1>
            <img className="resume-image m-auto" src={resume} alt="resume"></img>    
            
        </div>
    )
}

export default Resume;
