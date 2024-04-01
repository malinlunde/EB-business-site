import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProjectPage = () => {
    const { id } = useParams();

    // Fetch project details based on id or use static data
    const project = projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <img src={project.headerImage} alt={project.title} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {/* Display additional images */}
            <div className="additional-images">
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
            {/* Display additional text */}
            <p>{project.additionalText}</p>
            {/* Additional details about the project */}
            
        </div>
        );
    };
    
    export default ProjectPage;