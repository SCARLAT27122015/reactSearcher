import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    state = {
        item: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.showItem(this.state.item);
        this.setState({
            item: ''
        });
    };

    onChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    render() {
        return (
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
                        <form className="form-inline mt-2 mt-md-0" onSubmit={this.onSubmit}>
                            <input className="form-control mr-sm-2" type="text" onChange={this.onChange} value={this.state.item} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}
