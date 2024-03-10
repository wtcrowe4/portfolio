import React from 'react';
import headshot from '../assets/images/headshot.jpg'
import { tv } from 'tailwind-variants';

function Contact(): React.ReactElement {

    const textStyle = tv({
        base: 'text-white text-4xl',
        variants: {
            content: {
                header: 'text-4xl underline pb-3',
                link: 'text-3xl contact-link',
            }
        }
    })

    return (
        <div className="contact-container mt-10">
            <h1 className="text-white m-20 mt-10 header">Contact</h1>
            <div className="contact-content grid grid-cols-2 row-auto m-20 p-10">
                <div className="col-span-1 contact-content-section-text">
                   <ul id='contact-list'>
                        <li className='contact-list-item'>
                            <h2 className={textStyle({ content: 'header' })}>Email: </h2>
                            <a className={textStyle({ content: 'link' })} href="*">wtcrowe4@outlook.com</a>
                        </li>
                        <li className='contact-list-item'>
                            <h2 className={textStyle({ content: 'header' })}>Phone: </h2>
                            <h2 className={textStyle()}>(864) 630-3512</h2>
                        </li>
                        <li className='contact-list-item'>
                            <h2 className={textStyle({ content: 'header' })}>LinkedIn: </h2>
                            <a className={textStyle({ content: 'link' })} href="https://www.linkedin.com/in/wthomascrowe">wthomascrowe</a>
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