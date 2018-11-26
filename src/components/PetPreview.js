import React, { PureComponent } from 'react'
import './PetPreview.css'

class PetPreview extends PureComponent {
  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        this.props.onClick();
      }
    }, false);
  }

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
