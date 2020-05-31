import React from 'react';
import './ProjectImageDiv.css';

function ProjectImageDiv(props) {
    return (
        <div>
            <img className="port-image-div" alt="project" src={props.children} />
        </div>
    )
}

export default ProjectImageDiv