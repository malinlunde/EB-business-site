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
                const pageContent = await fetchPageContent(31);
                console.log('Fetched Content:', pageContent);

                // Filtrera ut WPForms-formuläret baserat på dess kortkod eller annan unik markör
                const parser = new DOMParser();
                const doc = parser.parseFromString(pageContent, 'text/html');
                const wpformsForm = doc.querySelector('.wpforms-container'); // WPForms använder ofta .wpforms-container för att wrap-formuläret

                const wpformsHTML = wpformsForm ? wpformsForm.innerHTML : '';

                setFormContent(wpformsHTML);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact form:', error);
                setError('Error fetching contact form');
                setLoading(false);
            }
        };

        getContent();
    }, []);

    // Dynamiskt ladda WPForms JavaScript efter att innehållet har renderats
    useEffect(() => {
        if (formContent && formContainerRef.current) {
            // Kontrollera om WPForms-skript redan finns på sidan
            if (!document.querySelector('#wpforms-script')) {
                const script = document.createElement('script');
                script.src = 'https://ericaborjesson.se/wp-content/plugins/wpforms-lite/assets/js/frontend/wpforms.js'; // Kontrollera så att detta är rätt sökväg till WPForms-skriptet
                script.id = 'wpforms-script';
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => {
                    console.log('WPForms script loaded.');
                    window.wpforms.ready(); // Se till att WPForms-initialisering körs efter att skriptet laddats

                    // Lägg till WPForms event listeners här efter att skriptet har laddats
                    document.addEventListener('wpformsSubmitSuccess', function(event) {
                        console.log('Form submitted successfully!', event);
                        alert('Formuläret har skickats framgångsrikt!');
                    });

                    document.addEventListener('wpformsSubmitError', function(event) {
                        console.log('Form submission error:', event);
                        alert('Ett fel uppstod vid formulärinlämningen. Försök igen.');
                    });
                };
            } else {
                // Om skriptet redan är laddat, kör WPForms-initialisering direkt
                if (window.wpforms && window.wpforms.ready) {
                    window.wpforms.ready();
                }
            }
        }
    }, [formContent]);

    // Ny useEffect för att lägga till en eventlistener på submit-knappen
    useEffect(() => {
        if (formContainerRef.current) {
            const submitButton = formContainerRef.current.querySelector('.wpforms-submit');

            if (submitButton) {
                submitButton.addEventListener('click', (e) => {
                    console.log('Submit button clicked');
                });
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
                <div ref={formContainerRef} dangerouslySetInnerHTML={{ __html: formContent }} /> {/* Renderar WPForms-formuläret */}
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