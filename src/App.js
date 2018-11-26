import React, { PureComponent } from 'react';
import 'babel-polyfill';
import './App.css';
import PetGrid from './components/PetGrid';

class App extends PureComponent {
  state = {
    pets: []
  }

  getMorePets() {
  	// TODO: This should be a separate API client module.
  	// For the sake of the demo, this is hard-coded here.
    let url = new URL('/assets/data/dogs.json', window.location.origin);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
      	// Append to current pets and reassign as new state
        pets: [...this.state.pets, ...data.dogs]
      }));
  }

  render() {
    return (
      <PetGrid pets={ this.state.pets }
	    getMorePets={ this.getMorePets.bind(this) } />
    )
  }
}

export default App;
