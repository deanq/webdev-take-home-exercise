import React, { PureComponent } from 'react'
import './PetPreview.css'

class PetPreview extends PureComponent {
  render() {
    return (
      <div className="PetPreview">
        <div className="background"
             onClick={ this.props.onClick }>
          <div className="modal">
            <img
              src={ this.props.image }
              alt={ this.props.source } />
          </div>
        </div>
      </div>
    )
  }
}

export default PetPreview;
