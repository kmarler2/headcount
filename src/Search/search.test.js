import React from 'react';
import Search from './index';
import { shallow } from 'enzyme';

describe('search', () => { 
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(wrapper=(<Search />));
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});