import React from 'react';
import { shallow } from 'enzyme';
import PetPreview from './PetPreview';

let pet = {
  "image": "/assets/images/raw/1.jpeg",
  "source": "https://unsplash.com/photos/ybHtKz5He9Y"
};

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

describe('PetPreview is assigned a pet', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetPreview {...pet} />);
  });

  it('should assign the image', () => {
    const image = component.find('img');
    expect(image.prop('src')).toEqual(pet.image);
    expect(image.prop('alt')).toEqual(pet.source);
  });
})

describe('PetPreview is clicked', () => {
  let component;
  const mockFunc = jest.fn();

  beforeEach(() => {
    component = shallow(<PetPreview onClick={mockFunc} />);
    const background = component.find('.background');
    background.simulate('click');
  });

  it('should call onClick props', () => {
    expect(mockFunc).toBeCalled();
  });
})

describe('when Escape key is pressed', () => {
  let component;
  const mockFunc = jest.fn();

  beforeEach(() => {
    component = shallow(<PetPreview onClick={mockFunc} />);
    component.instance();
    component.simulate('keyDown', {key: 'Escape'});
  });

  // FIXME: simulating keyDown does not propagate actual event
  // See https://github.com/airbnb/enzyme/issues/441
  xit('should call onClick props', () => {
    expect(mockFunc).toBeCalled();
  });
})
