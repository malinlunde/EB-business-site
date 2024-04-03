import React from 'react';
import './skills.css';
import bruksholmen9 from '../images/bruksholmen9.jpg';
import projectman from '../images/projectman.svg';

export const Skills = () => {
    return (
        <section className="skills">
            <div className="skills-content">
                <img src={projectman} alt="Image" className='projectman-image' />
                <img src={bruksholmen9} alt="Image" className="bruksholmen-image" />
                
            </div>
        </section>
    );
};

export default Skills;