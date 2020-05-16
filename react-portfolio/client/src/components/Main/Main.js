import React from 'react';
import './Main.css';
import Photo from '../Photo/Photo'

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