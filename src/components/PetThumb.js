import React, { PureComponent } from 'react'
import './PetThumb.css'

class PetThumb extends PureComponent {
  render() {
    return (
      <div className="PetThumb">
          <img
            src={ this.props.image }
            alt={ this.props.source } />
      </div>
    )
  }
}

export default PetThumb;
