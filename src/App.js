import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer/cardContainer.js';
import Search from './Search/search.js'

const district = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      districtData: district.dataCleaner(data)
    }
  }
  render() {
    return (
      <div>
        <header className='header'>Headcount 2.0</header>
        <Search 
        findDistrict={ this.findDistrict } 
        findDistrictByClick={ this.findDistrictByClick } 
        />
        <CardContainer 
        data={ this.state.districtData }
        />
      </div>
    );
  }
}

export default App;
