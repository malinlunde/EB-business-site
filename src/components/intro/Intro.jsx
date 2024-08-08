import React from 'react';
import './intro.css';
import profileImage from '../images/profilbild.jpeg';

export const Intro = () => {
    return (
        <section className="intro">
            <div className="intro-content">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <h1>Erica Börjesson</h1>
                <p>Välkommen till Ericas värld av kreativitet och passion! Som entreprenör och mångsidig kreatör förenar jag mina intressen för event, bröllop, projektledning, inredning och musik för att skapa minnesvärda upplevelser och vackra miljöer. Genom mina projekt strävar jag efter att inte bara uppfylla förväntningar, utan att överträffa dem och lämna ett bestående intryck.</p>
            </div>
        </section> 
    );
};

export default Intro;