import React from 'react';
import { shallow } from 'enzyme';
import PetThumb from './PetThumb';

let pet = {
  "image": "/assets/images/raw/1.jpeg",
  "source": "https://unsplash.com/photos/ybHtKz5He9Y"
};

describe('PetThumb initializing', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetThumb />);
  });

  it('renders without crashing', () => {
    expect(component).toExist();
  });

  it('should have an image', () => {
    expect(component).toContainMatchingElement('img');
  });
})

describe('PetThumb is assigned a pet', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetThumb {...pet} />);
  });

  it('should assign the image', () => {
    const image = component.find('img');
    const imageThumb = component.instance().getThumbURL(pet.image);
    expect(image.prop('src')).toEqual(imageThumb);
    expect(image.prop('alt')).toEqual(pet.source);
  });

  it('should lazy-load the image', () => {
    expect(component).toContainMatchingElement('LazyLoad');
    const lazyImage = component.find('LazyLoad');
    expect(lazyImage.prop('height')).toEqual(200);
    expect(lazyImage.prop('once')).toEqual(true);
  });
})

describe('PetThumb URL transforms /raw to /thumbs', () => {
  let component;
  const petURL = "/assets/images/raw/1.jpeg";
  const expectedURL = "/assets/images/thumbs/1.jpeg";

  beforeEach(() => {
    component = shallow(<PetThumb />);
  });

  it('should transform the URL', () => {
    expect(component.instance().getThumbURL(petURL)).toEqual(expectedURL);
  });
})
