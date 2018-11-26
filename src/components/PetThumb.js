import React, { PureComponent } from 'react'
import './PetThumb.css'

class PetThumb extends PureComponent {
  getThumbURL(imageURL="") {
    return imageURL.replace("/raw", "/thumbs")
  }

  render() {
    return (
      <div className="PetThumb">
          <img
            src={ this.getThumbURL(this.props.image) }
            alt={ this.props.source } />
      </div>
    )
  }
}

export default PetThumb;
