import React from 'react';
import ReactDOM from 'react-dom';
import Search from './index';
import { shallow } from 'enzyme';
import DistrictRepository from '../helper.js'
import data from '../data/kindergartners_in_full_day_program.js';

describe('search', () => { 
  let wrapper;
  let renderedApp;
  let mockData;
  let district = new DistrictRepository(data);

  beforeEach(() => {
    wrapper = shallow(renderedApp=(<Search />));
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 
})