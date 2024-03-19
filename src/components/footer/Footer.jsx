import React from 'react';
import './footer.css';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';

export const Footer = () => {
    const linkedinLink = 'https://www.linkedin.com/in/erica-b%C3%B6rjesson-a7166345/';
    const instagramLink = 'https://www.instagram.com/livetsomerica';

    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Kontakt</h1>
                <ul className="contact-list">
                    <li>Telefon: +46 (0) 70 218 78 34</li>
                    <li><a href={instagramLink} target="_blank" rel="noopener noreffer">
                        <img src={instagram} alt='Instagram' className='instagram' />
                        </a></li>
                    <li><a href={linkedinLink} target="_blank" rel="noopener noreffer">
                        <img src={linkedin} alt='linkedin' className='linkedin' />
                        </a></li>
                    <li>Email: your_email@example.com</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;