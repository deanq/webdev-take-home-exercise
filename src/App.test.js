import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const expectedData = {dogs: []};
fetch.resetMocks();
fetch.mockResponse(JSON.stringify(expectedData));

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
    expect(component.find('PetGrid')).toHaveProp('getMorePets');
  });
})

describe('App calls on API to get pets', () => {
  let component, instance;

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify({dogs:['a']}));
    component = shallow(<App />);

    instance = component.instance();
    instance.getMorePets();
  });

  it('should have a pet', () => {
    expect(instance.state.pets.length).toEqual(1+1);
  });

  describe('when getMorePets is called sequentially', () => {
    beforeEach(() => {
      instance.getMorePets();
      instance.getMorePets();
      instance.getMorePets();
    });

	  it('should have accumulated pets (1 + 4)', () => {
      expect(instance.state.pets.length).toEqual(4+1);
    });
  });
})

describe('App is mounted', () => {
  let component, spy;

  beforeEach(() => {
    spy = jest.spyOn(App.prototype, 'getMorePets');
    component = shallow(<App />);
  });

  afterEach(() => {
    spy.mockClear();
  });

  it('should call getMorePets', () => {
    component.instance();
    expect(spy).toBeCalled();
  });
})

