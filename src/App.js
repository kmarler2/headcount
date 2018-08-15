import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer/cardContainer.js';

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
        <CardContainer 
        data={ this.state.districtData }
        />
      </div>
    );
  }
}

export default App;
