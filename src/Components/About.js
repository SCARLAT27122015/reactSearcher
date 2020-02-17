import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link to="/" className="nav-link">Item Searcher</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">App</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="row cont">
                    <div className="col-12">
                        <div className="container-contact">
                            <h2>About me</h2>
                            <p>I am a self-taught software developer interested on both the front and backend.</p>
                            <p>The programming languages and web technologies I can handle are:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>A bit of Angular</li>
                                <li>PHP</li>
                                <li>mySQL</li>
                                <li>SQL Server</li>
                                <li>PostgreSQL</li>
                                <li>Amazon Redshift</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>Git/Github</li>
                                <li>A bit of MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
