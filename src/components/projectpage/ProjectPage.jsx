import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './projectpage.css'; // Import the CSS file
import { projects } from '../carousell/Carousell';

export const ProjectPage = () => {
    const { id } = useParams();

    // Fetch project details based on id or use static data
    const project = projects.find(project => project.id === parseInt(id));

    return (
        <div className="project-page">
            <div className="project-header">
                <img src={project.headerImage} alt={project.title} />
            </div>
            <div className="additional-text">
                <p>{project.additionalText}</p>
            </div>
            <div className="additional-images">
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <Link className="back-button" to="/">Tillbaka</Link> 
        </div>
    );
};

export default ProjectPage;