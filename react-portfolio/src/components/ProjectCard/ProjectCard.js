import React from 'react';
import './ProjectCard.css';

function ProjectCard (props) {
    return(
        <div className="project-card four columns">
            {props.children}
        </div>
    )
}

export default ProjectCard