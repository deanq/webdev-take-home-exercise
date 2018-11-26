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
    expect(image.prop('src')).toEqual(pet.image);
    expect(image.prop('alt')).toEqual(pet.source);
  });
})