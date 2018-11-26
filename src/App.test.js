import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App initializing', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have an initial state', () => {
    expect(component).toHaveState('pets');
  });

  it('should have PetGrid', () => {
    expect(component).toContainMatchingElement('PetGrid');
    expect(component.find('PetGrid')).toHaveProp('pets', component.state('pets'));
  });
})
