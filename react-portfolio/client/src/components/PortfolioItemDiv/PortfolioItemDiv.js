import React from 'react';
import './PortfolioItemDiv.css';

function PortfolioItemDiv(props) {
    return (
        <div className="item-div row"> 
            {props.children}
        </div>
    )
}

export default PortfolioItemDiv