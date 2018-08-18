import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js'
import data from './data/kindergartners_in_full_day_program.js';

describe('app', () => {
  let renderedApp;
  let mockData;
  let district = new DistrictRepository(data);

    beforeEach(() => {
    mockData = {
             '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337,
              '2007': 0.395,
              '2008': 0.536,
              '2009': 0.598,
              '2010': 0.64,
              '2011': 0.672,
              '2012': 0.695,
              '2013': 0.703,
              '2014': 0.741 }

    renderedApp = shallow(renderedApp=(<App />));
  })

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});
});