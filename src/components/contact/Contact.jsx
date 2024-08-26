import React, { useEffect, useState } from 'react';
import './contact.css'; // Importera CSS för styling av kontaktformuläret
import { fetchPageContent } from '../../services/wordpressService';

// Uppdatera sökvägarna till bilderna på servern
const linkedin = 'https://ericaborjesson.se/upload/dist/assets/linkedin.svg';
const instagram = 'https://ericaborjesson.se/upload/dist/assets/instagram.svg';

export const Contact = () => {
    const [formContent, setFormContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const linkedinLink = 'https://www.linkedin.com/in/erica-b%C3%B6rjesson-a7166345/';
    const instagramLink = 'https://www.instagram.com/borjessons_';
    const emailAddress = 'kontakt@ericaborjesson.se';

    useEffect(() => {
        const getContent = async () => {
            try {
                const content = await fetchPageContent(31); 
                console.log('Fetched Content:', content);
                setFormContent(content);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact form:', error);
                setError('Error fetching contact form');
                setLoading(false);
            }
        };

        getContent();
    }, []);

    // Lägg till en useEffect för att initiera Contact Form 7 efter att formContent är klart
    useEffect(() => {
        if (formContent) {
            const formElement = document.querySelector('.wpcf7-form');
            if (window.wpcf7 && formElement) {
                console.log('Initializing Contact Form 7');
                window.wpcf7.init(document.querySelectorAll('.wpcf7-form'));
            } else {
                console.error('wpcf7 is not defined or no form element found.');
            }
        }
    }, [formContent]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2>Kontakta mig</h2>
                <div dangerouslySetInnerHTML={{ __html: formContent }} /> {/* Renderar formuläret */}
                <div className="contact-info">
                    <p>Telefon: +46 (0) 12 345 67</p>
                    <p>E-post: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                </div>
                <div className="social-links">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='Instagram' className='instagram' />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt='LinkedIn' className='linkedin' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;