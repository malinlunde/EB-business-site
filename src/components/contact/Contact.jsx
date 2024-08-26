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
                const content = await fetchPageContent('hem'); // Byt ut 'kontakt' mot slugen för din WordPress-sida med kontaktformuläret
                setFormContent(content);
                setLoading(false);

                setTimeout(() => {
                    if (window.wpcf7) {
                        window.wpcf7.init(document.querySelectorAll('.wpcf7-form'));
                    }
                }, 100); // Justera timeout om nödvändigt
                
            } catch (error) {
                console.error('Error fetching contact form:', error);
                setError('Error fetching contact form');
                setLoading(false);
            }
        };

        getContent();
    }, []);

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