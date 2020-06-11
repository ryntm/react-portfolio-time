import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <div className="container">
                <div className="six columns nav-half-left">
                    <ul>
                        <a href="/" className="logo-link">
                            <li className="nav-item-left nav-name">Ryan Tam</li>
                        </a>
                        <a href="https://github.com/ryntm">
                            <li className="nav-item-left">
                                <img className="nav-icons" alt="github-icon" src="https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/GitHub-Mark.png?raw=true" />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/ryanjtam/">
                        <li className="nav-item-left">
                                <img className="nav-icons-linkedin" alt="linkedin-icon" src="https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/linkedin-icon-png--1600.png?raw=true" />
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="six columns nav-half-right">
                    <ul>
                        <a href="/contact"><li className="nav-item">Contact</li></a>
                        <a href="/portfolio"><li className="nav-item">Portfolio</li></a>
                        <a href="/"><li className="nav-item">About</li></a>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav