import React from 'react';
import headshot from '../assets/images/headshot.jpg'

function Contact(): React.ReactElement {
    return (
        <div className="contact-container mt-10">
            <h1 className="text-white m-20 mt-10 header">Contact</h1>
            <div className="contact-content grid grid-cols-2 row-auto m-20 p-10">
                <div className="col-span-1 contact-content-section-text">
                   <ul id='contact-list'>
                        <li className='contact-list-item'>
                            <h2 className="text-white text-4xl underline pb-3">Email: </h2>
                            <a className='text-white text-4xl contact-link' href="*">wcrowe@g.clemson.edu</a>
                        </li>
                        <li className='contact-list-item'>
                            <h2 className="text-white text-4xl underline pb-3">Phone: </h2>
                            <h2 className="text-white text-4xl">(864) 630-3512</h2>
                        </li>
                        <li className='contact-list-item'>
                            <h2 className="text-white text-4xl underline pb-3">LinkedIn: </h2>
                            <a className='text-white text-4xl contact-link' href="https://www.linkedin.com/in/wthomascrowe">wthomascrowe</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 contact-content-section">
                    <img className="headshot-image" src={headshot} alt="headshot"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;