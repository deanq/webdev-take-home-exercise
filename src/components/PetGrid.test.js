import React from 'react';
import { shallow } from 'enzyme';
import PetGrid from './PetGrid';

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
