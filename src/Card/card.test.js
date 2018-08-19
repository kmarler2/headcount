import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  let wrapper;
  let mockLocation = 'Casper';
  let mockStats = {};
  let mockSelect = 'true';
  let mockFindDistrictByClick = jest.fn();
  let mockKey = '2';
  beforeEach(() => {
    wrapper = shallow(<Card
                      location={mockLocation}
                      stats={mockStats}
                      key={mockKey}
                      select={mockSelect}
                      findDistrictByClick={mockFindDistrictByClick}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call selectCard on click', () => {
    wrapper.find('.card').simulate('click');
    expect(mockFindDistrictByClick).toHaveBeenCalled();
  })
})