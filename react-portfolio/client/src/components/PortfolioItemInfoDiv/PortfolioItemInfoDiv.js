import React from 'react';
import './PortfolioItemInfoDiv.css';

function PortfolioItemInfoDiv(props) {
    return (
        <div className="nine columns port-info-item-div">
            {props.children}
        </div>
    )
}

export default PortfolioItemInfoDiv