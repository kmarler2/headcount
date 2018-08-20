import React from 'react';
import CardContainer from './index';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  let mockData = {};
  let mockFindDistrictByClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<CardContainer
      data={mockData}
      findDistrictByClick={mockFindDistrictByClick}
    />);
  });
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});