import React, { Component } from 'react';


import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import './assets/css/styles.css';

export default class App extends Component {

  state = {
    item: '',
    resultado: []
  };

  showItem = item => {
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${item}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ resultado: resultado.hits }));

    this.setState({
      item: item
    });
  };



  render() {
    return (
      <React.Fragment>
        <Header showItem={this.showItem} />
        <Body item={this.state.item} resultado={this.state.resultado} />
        <Footer />
      </React.Fragment>
    );
  }
}
