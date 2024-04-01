import React from 'react';
import './footer.css';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';

export const Footer = () => {
    const linkedinLink = 'https://www.linkedin.com/in/erica-b%C3%B6rjesson-a7166345/';
    const instagramLink = 'https://www.instagram.com/livetsomerica';
    const emailAddress = 'malinlundhe@hotmail.com';

    return (
        <footer className="footer">
        <div className="footer-content">
            <h1>Kontakt</h1>
            <div className="contact-info">
                <p>Telefon: +46 (0) 12 345 67</p>
                <p>E-post: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            </div>
            <div className="social-links">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt='Instagram' className='instagram' />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin' className='linkedin' />
                </a>
            </div>
        </div>
    </footer>
);
};

export default Footer;