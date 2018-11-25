import React from 'react';
import { shallow } from 'enzyme';
import PetThumb from './PetThumb';

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
