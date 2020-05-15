import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <div className="container">
                <ul>
                    <li className="nav-item-left nav-name">Ryan Tam</li>
                    <a href="/contact">
                        <li className="nav-item-left">
                            <button className="button-primary">Resume</button>
                        </li>
                    </a>

                    <a href="/contact"><li className="nav-item">Contact</li></a>
                    <a href="/portfolio"><li className="nav-item">Portfolio</li></a>
                    <a href="/"><li className="nav-item">About</li></a>

                </ul>
            </div>
        </nav>
    )
}

export default Nav