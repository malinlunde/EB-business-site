import React from 'react';
import './skills.css';
import bruksholmen9 from '../images/bruksholmen9.png';
import bruksholmen5 from '../images/bruksholmen5.jpg';

export const Skills = () => {
    return (
    <div className='skills-wrapper'>
        <section className="skills">
            <div className="skills-content">
                <img src={bruksholmen5} alt="Image" className="bruksholmen-image" />
                <img src={bruksholmen9} alt="Image" className="bruksholmen-image" />
            </div>
        </section>
    </div>
    );
};

export default Skills;