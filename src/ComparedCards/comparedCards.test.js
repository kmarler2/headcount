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
  const mockCards = [{
    location: "West Yuma",
    selected: true,
    stats: {
      2004: 0.101, 
      2005: 0.101,
      2006: 0.101,
      2007: 0.101,
      2008: 0.101,
      2009: 0.101,
      2010: 0.101,
      2011: 0.101,
      2012: 0.101,
      2013: 0.101,
      2014: 0.101
    }
  },
  {
    location: "West Yuma",
    selected: true,
    stats: {
      2004: 0.101,
      2005: 0.101,
      2006: 0.101,
      2007: 0.101,
      2008: 0.101,
      2009: 0.101,
      2010: 0.101,
      2011: 0.101,
      2012: 0.101,
      2013: 0.101,
      2014: 0.101
    }
  }];

  beforeEach(() => {
    wrapper = shallow(<DisplayComparedCards 
                        data={mockDistrict}
                        findDistrictByClick={mockFDBC}
                        compareDistrictAverages={mockCDA} 
                      />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});