import React from 'react';
import './intro.css';
import profileImage from '../images/profilbild.jpeg';

export const Intro = () => {
    return (
        <section className="intro">
            <div className="intro-content">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <h1>Erica Börjesson</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl vel nisi finibus fringilla. Nulla facilisi. Nam eu nulla nisi.</p>
                
         </div>
        </section> 
    );
};

export default Intro;