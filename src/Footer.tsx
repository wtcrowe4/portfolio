import React from 'react';

function Footer() {
    //create a footer with social icons
    return (
        <div className="footer-container p-6">
            <ul>
                <li><a target='_blank' rel="noreferrer" href="https://github.com/wtcrowe4"><i className="fab fa-github"></i></a></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/wthomascrowe"><i className="fab fa-linkedin"></i></a></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.facebook.com/tcrowe4"><i className="fab fa-facebook"></i></a></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.instagram.com/tcroweiv"><i className="fab fa-instagram"></i></a></li>
                <li><a target='_blank' rel="noreferrer" href="https://twitter.com/tcrowe_iv"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;