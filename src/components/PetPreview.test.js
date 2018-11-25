import React from 'react';
import { shallow } from 'enzyme';
import PetPreview from './PetPreview';

describe('PetPreview initializing', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetPreview />);
  });

  it('renders without crashing', () => {
    expect(component).toExist();
  });

  it('should have a background', () => {
    expect(component).toContainMatchingElement('.background');
  });

  it('should have a modal container', () => {
    expect(component).toContainMatchingElement('.modal');
  });

  it('should have an image', () => {
    expect(component).toContainMatchingElement('.modal img');
  });
})
