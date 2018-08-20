import React from 'react';
import DisplayComparedCards from './index';
import { shallow } from 'enzyme';
import DistrictRepository from '../helper';
import data from '../data/kindergartners_in_full_day_program';

describe('DisplayComparedCards component', () => {
  let wrapper;
  const mockDistrict = new DistrictRepository(data);
  const mockFDBC = jest.fn();
  const mockCDA = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<DisplayComparedCards 
      data={mockDistrict}
      findDistrictByClick={mockFDBC}
      compareDistrictAverages={mockCDA} 
    />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});