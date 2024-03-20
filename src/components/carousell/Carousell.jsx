import React from 'react';
import './carousell.css';
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' }, 
];

export const Carousell = () => {
    return (
        <section className="carousell">
            <div className="carousell-content">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <img src={project.imageUrl} alt={project.title} />
                        <Link to={`/project/${project.id}`}>See More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Carousell;