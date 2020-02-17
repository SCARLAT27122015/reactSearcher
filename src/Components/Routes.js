import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import App from '../App';

export default class Routes extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
        );
    }
}
