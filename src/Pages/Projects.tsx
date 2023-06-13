import React from 'react';
import holdem from '../assets/screenshots/holdem_screenshot.png'
import reactSports from '../assets/screenshots/sports_screenshot.png'
import discord from '../assets/screenshots/discord_screenshot.png'
import music from '../assets/screenshots/musiclib_screenshot.png'
import monkey from '../assets/screenshots/monkeyfinder_screenshot.png'
import finance from '../assets/screenshots/finance_screenshot.png'
import realty from '../assets/screenshots/realty_screenshot.png'
import restrant from '../assets/screenshots/rest-rant_screenshot.png'
import { tv } from 'tailwind-variants'

function Projects(): React.ReactElement {
    
    const sectionStyle = tv({ 
        base: 'col-span-1 m-10 projects-content-section',
    })

    const textStyle = tv({
        base: 'text-white',
        variants: {
            size: {
                header: 'text-4xl about-sub-headers font-semibold pb-5',
                content: 'text-2xl',
            }
        }
    })
    
    //"col-span-1 m-20 projects-content-section"
    //"text-white text-4xl pb-5"
    //"text-white text-2xl"

    return (
        <div className="projects-container w-100 m-auto mt-10">
            <div className="projects-header">
                <h1 className="text-white header">Projects</h1>
            </div>
            <div className="projects-content grid grid-cols-2 row-auto p-10">
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Texas Hold'em</h2>
                    <p className={textStyle({ size: 'content' })}>This was my very first project. It is a simple frontend browser game styled with SCSS and currently being converted to Typescript.</p>
                </div>
                <div className={sectionStyle()}>
                    <img className='p-0' src={holdem} alt="project1 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Sports Book</h2>
                    <p className={textStyle({ size: 'content' })}>This is one of the first React projects I worked on.  It uses current data from an API through RapidAPI, giving the user real time scores and odds on the most popular sports.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={reactSports} alt="project2 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Discord</h2>
                    <p className={textStyle({ size: 'content' })}>In this project I branched out and used Django for the first time.  I created a discord clone which uses SQL on the backend to store user's data and messages.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={discord} alt="project3 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Music Library</h2>
                    <p className={textStyle({ size: 'content' })}>This is a simple React project I worked on to learn and utilize Redux, APIs, and manipulating the DOM without reloading the page.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={music} alt="project4 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Monkey Finder</h2>
                    <p className={textStyle({ size: 'content' })}>This was my first .NET MAUI application, using a simple API to fetch information about different monkeys and where they originate from.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={monkey} alt="project5 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>MAUI Finance</h2>
                    <p className={textStyle({ size: 'content' })}>This is a .NET MAUI application that uses a financial API to fetch stock information and display it to the user, with the ability to search and create a watchlist of favorites.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={finance} alt="project6 screenshot"></img>
                </div> 
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Crowe Realty</h2>
                    <p className={textStyle({ size: 'content' })}>This is an Angular/Typescript project I'm working on that uses a real estate API to fetch information about different properties and display it to the user, with the ability to add your own properties to the site.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={realty} alt="project7 screenshot"></img>
                </div>
                <div className={sectionStyle()}>
                    <h2 className={textStyle({ size: 'header' })}>Rest-rant</h2>
                    <p className={textStyle({ size: 'content' })}>This was my first React/Node project that allows users to add resturants to the database and keeps track of everyone's rating of each resturant.</p>
                </div>
                <div className={sectionStyle()}>
                    <img src={restrant} alt="project8 screenshot"></img>
                </div>
            </div>
        </div>
    )
}

export default Projects;
