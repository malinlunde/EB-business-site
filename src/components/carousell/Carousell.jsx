import React, { useState } from 'react';
import './carousell.css';
import { Link } from 'react-router-dom';
import leftArrow from '../images/leftarrow.png';
import rightArrow from '../images/rightarrow.png';

const projects = [
    { 
        id: 1, 
        title: 'Project 1', 
        description: 'Description for Project 1', 
        images: [
            '/project1-image1.jpg',
            '/project1-image2.jpg',
            '/project1-image3.jpg'
        ],
        additionalText: 'Additional text for Project 1'
    }, 
    { 
        id: 2, 
        title: 'Project 2', 
        description: 'Description for Project 2', 
        images: [
            '/project2-image1.jpg',
            '/project2-image2.jpg',
            '/project2-image3.jpg'
        ],
        additionalText: 'Additional text for Project 2'
    }, 
    { 
        id: 3, 
        title: 'Project 3', 
        description: 'Description for Project 3', 
        images: [
            '/project3-image1.jpg',
            '/project3-image2.jpg',
            '/project3-image3.jpg'
        ],
        additionalText: 'Additional text for Project 3'
    }, 
    { 
        id: 4, 
        title: 'Project 4', 
        description: 'Description for Project 4', 
        images: [
            '/project4-image1.jpg',
            '/project4-image2.jpg',
            '/project4-image3.jpg'
        ],
        additionalText: 'Additional text for Project 4'
    }, 
    { 
        id: 5, 
        title: 'Project 5', 
        description: 'Description for Project 5', 
        images: [
            '/project5-image1.jpg',
            '/project5-image2.jpg',
            '/project5-image3.jpg'
        ],
        additionalText: 'Additional text for Project 5'
    },  
];

export const Carousell = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const nextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };


    return (
        <section className="carousell">
            <div className="navigation">
                <button className="prev-button" onClick={prevProject}>
                    <img src={leftArrow} alt="Previous" />
                </button>
            </div>
            <div className="carousell-content">
                <div className="project-item">
                    <h2>{projects[currentProjectIndex].title}</h2>
                    <p>{projects[currentProjectIndex].description}</p>
                    <img src={projects[currentProjectIndex].images[0]} alt={projects[currentProjectIndex].title} />
                    <Link className="see-more-link" to={`/project/${projects[currentProjectIndex].id}`}>Se mer</Link> 
                </div>
            </div>
            <div className="navigation">
                <button className="next-button" onClick={nextProject}>
                    <img src={rightArrow} alt="Next" />
                </button>
            </div>
        </section>
    );
};

export default Carousell;