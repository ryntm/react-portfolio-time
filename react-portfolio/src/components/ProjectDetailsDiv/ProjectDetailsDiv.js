import React from 'react';
import './ProjectDetailsDiv.css';

function ProjectDetailsDiv(props) {
    return(
        <div className="project-details">
            {props.children}
        </div>
    )
}

export default ProjectDetailsDiv