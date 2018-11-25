import React, { PureComponent } from 'react';
import './PetGrid.css';

class PetGrid extends PureComponent {
  state = {
    selectedPet: null
  }

  render() {
    return (
      <div className="PetGrid">
        <ul>
        </ul>
      </div>
    )
  }
}

export default PetGrid;
