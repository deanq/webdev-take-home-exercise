import React, { PureComponent } from 'react'
import './PetThumb.css'
import LazyLoad from 'react-lazyload'

class PetThumb extends PureComponent {
  getThumbURL(imageURL="") {
    return imageURL.replace("/raw", "/thumbs")
  }

  render() {
    return (
      <div className="PetThumb">
        <LazyLoad height={200} offset={32} once >
          <img
            src={ this.getThumbURL(this.props.image) }
            alt={ this.props.source } />
        </LazyLoad>
      </div>
    )
  }
}

export default PetThumb;
