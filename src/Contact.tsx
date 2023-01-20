import React from 'react';
import headshot from './assets/images/headshot.jpg'

function Contact(): React.ReactElement {
    return (
        <div className="contact-container">
            <h1 className="text-white text-3xl m-20 header">Contact</h1>
            <div className="contact-content grid grid-cols-2 row-auto m-20 p-10">
                <div className="col-span-1 contact-content-section">
                   <ul>
                        <li>
                            <h2 className="text-white text-2xl">Email: <a href="*">wcrowe@g.clemson.edu</a></h2>
                        </li>
                        <li>
                            <h2 className="text-white text-2xl">Phone: (864) 630-3512</h2>
                        </li>
                        <li>
                            <h2 className="text-white text-2xl">LinkedIn: <a href="https://www.linkedin.com/in/wthomascrowe">wthomascrowe</a></h2>
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