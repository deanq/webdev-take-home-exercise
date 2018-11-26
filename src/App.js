import React, { PureComponent } from 'react';
import 'babel-polyfill';
import './App.css';
import PetGrid from './components/PetGrid';

class App extends PureComponent {
  state = {
    pets: []
  }

  render() {
    return (
      <PetGrid pets={ this.state.pets } />
    )
  }
}

export default App;
