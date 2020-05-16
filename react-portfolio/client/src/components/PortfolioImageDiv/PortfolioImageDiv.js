import React from 'react';
import './PortfolioImageDiv.css';

function PortfolioImageDiv(props) {
    return (
        <div className="three columns">
            <img className="port-image-div" src={props.children} />
        </div>
    )
}

export default PortfolioImageDiv