import React from 'react';
import { useParams } from 'react-router-dom';

export const ProjectPage = () => {
    const { id } = useParams();

    // Fetch project details based on id or use static data
    const project = projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            {/* Additional details about the project */}
        </div>
    );
};

export default ProjectPage;