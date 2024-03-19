import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Kontakta mig</h1>
                <ul className="contact-list">
                    <li>Telefon: 123-456-789</li>
                    <li><a href="https://www.instagram.com/livetsomerica">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/your_linkedin">LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/your_facebook">Facebook</a></li>
                    <li>Email: your_email@example.com</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;