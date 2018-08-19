import React from 'react';
import CardContainer from './index';
import { shallow } from 'enzyme';
import Card from '../Card/index'

describe('CardContainer', () => {
  let wrapper;
  let mockData = {}
  let mockFindDistrictByClick = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<CardContainer
                        data={mockData}
                        findDistrictByClick={mockFindDistrictByClick}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should create the correct number of cards', () => {

  })
})