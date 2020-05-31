import React from 'react';
import './Main.css';

function Main(props) {
    return (
        <div className="main">
            <div className="row">
                {/* <div className="three columns">
                </div> */}
                <div className="twelve columns">
                    {props.children}
                </div>
            </div>


        </div>
    )
}

export default Main