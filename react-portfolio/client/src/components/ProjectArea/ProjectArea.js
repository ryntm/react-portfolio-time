import React from 'react';

function ProjectArea(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}

export default ProjectArea