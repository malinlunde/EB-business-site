import React from 'react';
import './footer.css';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';
import { useForm, ValidationError } from '@formspree/react';

export const Footer = () => {
    const linkedinLink = 'https://www.linkedin.com/in/erica-b%C3%B6rjesson-a7166345/';
    const instagramLink = 'https://www.instagram.com/livetsomerica';

    const [state, handleSubmit] = useForm("https://formspree-cors-proxy.herokuapp.com/https://formspree.io/f/xvoebwdp");

    if (state.succeeded) {
        return <p>Tack för ditt meddelande!</p>;
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Kontakt</h1>
                <div className="contact-info">
                    <p>Telefon: +46 (0) 70 218 78 34</p>
                </div>
                <div className="social-links">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='Instagram' className='instagram' />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt='linkedin' className='linkedin' />
                    </a>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Din e-post" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <textarea name="message" placeholder="Ditt meddelande" required></textarea>
                        <ValidationError prefix="Meddelande" field="message" errors={state.errors} />
                        <button type="submit" disabled={state.submitting}>Skicka</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;