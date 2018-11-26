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

  it('should not have a PetPreview', () => {
    expect(component).not.toContainMatchingElement('PetPreview');
  });

  it('should have a See More button', () => {
    expect(component).toContainMatchingElement('button.more');
    expect(component.find('button.more')).toHaveText('See More');
  });
})

describe('PetGrid listing its pets', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PetGrid pets={pets} />);
  });

  it('should list the pets', () => {
    expect(component).toContainMatchingElements(pets.length, 'li');
    expect(component).toContainMatchingElements(pets.length, 'PetThumb');
  });
})

describe('PetGrid selecting a pet', () => {
  let component;
  const selectedPet = pets[0];

  beforeEach(() => {
    component = shallow(<PetGrid />);
    component.instance().selectPet(selectedPet);
  });

  it('should have a pet selected', () => {
    expect(component).toHaveState('selectedPet', selectedPet);
  });
})

describe('PetGrid deselecting a pet', () => {
  let component;
  const selectedPet = pets[0];

  beforeEach(() => {
    component = shallow(<PetGrid />);
    component.instance().selectPet(selectedPet);
    component.instance().deselectPet();
  });

  it('should have no pet selected', () => {
    expect(component).toHaveState('selectedPet', null);
  });
})

describe('PetGrid clicking on a PetThumb', () => {
  let component, spy, petThumb;

  beforeEach(() => {
    spy = jest.spyOn(PetGrid.prototype, 'selectPet');
    component = shallow(<PetGrid pets={pets} />);
    petThumb = component.find('PetThumb').first();
    petThumb.simulate('click');
  });

  afterEach(() => {
    spy.mockClear();
  });

  it('should call selectPet with the appropriate pet', () => {
    expect(spy).toBeCalled();

    const petSelected = spy.mock.calls[0][0];
    const petExpected = petThumb.props();
    expect(petSelected.image).toEqual(petExpected.image);
    expect(petSelected.source).toEqual(petExpected.source);
  });

  it('should present PetPreview with the appropriate pet', () => {
    const petPreviewImg = component.find('PetPreview');
    expect(petPreviewImg.prop('image')).toEqual(petThumb.prop('image'));
    expect(petPreviewImg.prop('source')).toEqual(petThumb.prop('source'));
  });

  describe('clicking on PetPreview', () => {
    let petPreview;

    beforeEach(() => {
      petPreview = component.find('PetPreview');
      petPreview.simulate('click');
    });

    it('should close PetPreview', () => {
      expect(component).not.toContainMatchingElement('PetPreview');
    });
  })
})

fdescribe('PetGrid clicking on See More', () => {
  let component, mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    component = shallow(<PetGrid getMorePets={mockFunc} />);
    component.find('button.more').simulate('click');
  });

  afterEach(() => {
    mockFunc.mockClear();
  });

  it('should call getMorePets()', () => {
    expect(mockFunc).toBeCalled();
  });
})
