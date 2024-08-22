import React, { useEffect, useState } from 'react';
import './contact.css'; // Create this CSS file for styling the contact form
import { fetchPageContent } from '../../services/wordpressService';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';

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
                const content = await fetchPageContent('kontakt'); // Replace 'contact' with the slug of your WordPress contact form page
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
                <div dangerouslySetInnerHTML={{ __html: formContent }} />
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
        </section>
    );
};

export default Contact;