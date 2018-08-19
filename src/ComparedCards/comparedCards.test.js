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
    stats: {2004: 0.302, 
      2005: 0.267,
      2006: 0.354,
      2007: 0.392,
      2008: 0.385,
      2009: 0.39,
      2010: 0.436,
      2011: 0.489,
      2012: 0.479,
      2013: 0.488,
      2014: 0.49
    }
  },
  {
    location: "West Yuma",
    selected: true,
    stats: {
      2004: 0.302,
      2005: 0.267,
      2006: 0.354,
      2007: 0.392,
      2008: 0.385,
      2009: 0.39,
      2010: 0.436,
      2011: 0.489,
      2012: 0.479,
      2013: 0.488,
      2014: 0.49
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