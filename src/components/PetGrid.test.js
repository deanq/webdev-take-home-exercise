import React from 'react';
import { shallow } from 'enzyme';
import PetGrid from './PetGrid';

let pets = [
  {
    "image": "/assets/images/raw/1.jpeg",
    "source": "https://unsplash.com/photos/ybHtKz5He9Y"
  },{
    "image": "/assets/images/raw/2.jpeg",
    "source": "https://unsplash.com/photos/rY79kwEEyGo"
  },{
    "image": "/assets/images/raw/3.jpeg",
    "source": "https://unsplash.com/photos/ngqyo2AYYnE"
  },
];

describe('PetGrid initializing', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetGrid />);
  });

  it('renders without crashing', () => {
    expect(component).toExist();
  });

  it('should have list', () => {
    expect(component).toContainMatchingElement('ul');
  });
})

describe('PetGrid listing its pets', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetGrid pets={pets} />);
  });

  it('should list the pets', () => {
    expect(component).toContainMatchingElements(pets.length, 'li');
  });
})
