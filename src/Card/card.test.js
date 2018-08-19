import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import DistrictRepository from '../helper.js'
import data from '../data/kindergartners_in_full_day_program.js';

describe('app', () => { 
  let renderedApp;
  let mockData;
  let district = new DistrictRepository(data);

  beforeEach(() => {
    renderedApp = shallow(renderedApp=(<App />));
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined()
  });
})