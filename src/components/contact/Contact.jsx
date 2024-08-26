import React, { useEffect, useState, useRef } from 'react';
import './contact.css'; 
import { fetchPageContent } from '../../services/wordpressService';

const linkedin = 'https://ericaborjesson.se/upload/dist/assets/linkedin.svg';
const instagram = 'https://ericaborjesson.se/upload/dist/assets/instagram.svg';

export const Contact = () => {
    const [formContent, setFormContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const formContainerRef = useRef(null);

    const linkedinLink = 'https://www.linkedin.com/in/erica-b%C3%B6rjesson-a7166345/';
    const instagramLink = 'https://www.instagram.com/borjessons_';
    const emailAddress = 'kontakt@ericaborjesson.se';

    useEffect(() => {
        const getContent = async () => {
            try {
                let content = await fetchPageContent(31);
                console.log('Fetched Content:', content);

                 // Rättar formulärets action-attribut
                 content = content.replace(
                    /action="[^"]*"/g,
                    'action="/#wpcf7-f45-o1"'
                );

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

    useEffect(() => {
        if (formContent && formContainerRef.current) {
            const formElement = formContainerRef.current.querySelector('.wpcf7-form');
            
            if (window.wpcf7 && formElement) {
                try {
                    console.log('Initializing Contact Form 7');
                    setTimeout(() => {
                        window.wpcf7.init(formContainerRef.current.querySelectorAll('.wpcf7-form'));
                    // Lägg till en händelsehanterare för att logga när formuläret skickas
                    formElement.addEventListener('submit', (e) => {
                        e.preventDefault(); // Förhindra standardinlämning för att kontrollera vad som händer
                        console.log('Formuläret har skickats!');
                        
                        // Kontrollera om formuläret skickas korrekt
                        const formData = new FormData(formElement);
                        for (let [key, value] of formData.entries()) {
                            console.log(`${key}: ${value}`);
                        }

                        // Tillåt formuläret att skicka som normalt
                        formElement.submit();
                    });
                }, 500); // Fördröjning på 500ms
            } catch (initError) {
                console.error('Failed to initialize Contact Form 7:', initError);
            }
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
                <div ref={formContainerRef} dangerouslySetInnerHTML={{ __html: formContent }} /> {/* Renderar formuläret */}
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