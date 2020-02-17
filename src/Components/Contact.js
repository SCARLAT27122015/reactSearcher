import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
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
                    <div className="col-12 text-center">
                        <div className="container-contact">
                            <h2>Contact info</h2>
                            <p>Please, feel free to reach me out at <b>2228652453</b> for further info and/or feedback on this practice.</p>
                            <p>My email address: <b>mansion.lagrimas@gmail.com</b></p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
