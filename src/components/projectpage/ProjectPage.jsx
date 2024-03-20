import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProjectPage = () => {
    const { id } = useParams();

    // Fetch project details based on id or use static data
    const project = projects.find(project => project.id === parseInt(id));

    return (
    <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Display additional images */}
        {project.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
        {/* Display additional text */}
        <p>{project.additionalText}</p>
        {/* Additional details about the project */}
        <Link to={`/project/${project.id}/details`}>Mer om det här projektet....</Link>
    </div>
    );
};

export default ProjectPage;