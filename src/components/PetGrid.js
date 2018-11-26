import React, { PureComponent } from 'react';
import './PetGrid.css';
import PetThumb from './PetThumb';
import PetPreview from './PetPreview';

class PetGrid extends PureComponent {
  state = {
    selectedPet: null
  }

  selectPet(pet) {
    this.setState({selectedPet: pet})
  }

  deselectPet() {
    this.setState({selectedPet: null})
  }

  renderPets(pets=[]) {
    return pets.map((pet, i) => (
      <li key={i}>
        <PetThumb {...pet}
          onClick={ this.selectPet.bind(this, pet) } />
      </li>
    ));
  }

  render() {
    return (
      <div className="PetGrid">
        { this.state.selectedPet &&
          <PetPreview {...this.state.selectedPet}
              onClick={ this.deselectPet.bind(this) } />
        }
        <ul>
        { this.renderPets(this.props.pets) }
        </ul>
      </div>
    )
  }
}

export default PetGrid;
