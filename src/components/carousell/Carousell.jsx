import React, { useState } from 'react';
import './carousell.css';
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
    { id: 2, title: 'Project 2', description: 'Description for Project 2', imageUrl: '/project1.jpg' }, 
    { id: 3, title: 'Project 3', description: 'Description for Project 3', imageUrl: '/project1.jpg' }, 
    { id: 4, title: 'Project 4', description: 'Description for Project 4', imageUrl: '/project1.jpg' }, 
    { id: 5, title: 'Project 5', description: 'Description for Project 5', imageUrl: '/project1.jpg' }, 
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
            <div className="carousell-content">
                <div className="project-item">
                    <h2>{projects[currentProjectIndex].title}</h2>
                    <p>{projects[currentProjectIndex].description}</p>
                    <img src={projects[currentProjectIndex].imageUrl} alt={projects[currentProjectIndex].title} />
                    <Link to={`/project/${projects[currentProjectIndex].id}`}>See More</Link> 
                </div>
            </div>
            <div className="navigation">
                <button onClick={prevProject}>Föregående</button>
                <button onClick={nextProject}>Nästa</button>
            </div>
        </section>
    );
};

export default Carousell;