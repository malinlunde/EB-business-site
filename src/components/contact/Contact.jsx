import React, { useEffect, useState } from 'react';
import './contact.css'; // Create this CSS file for styling the contact form
import { fetchPageContent } from '../../services/wordpressService';

export const Contact = () => {
    const [formContent, setFormContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <section className="contact">
            <div className="contact-content">
                <h2>Kontakta mig</h2>
                <div dangerouslySetInnerHTML={{ __html: formContent }} />
            </div>
        </section>
    );
};

export default Contact;