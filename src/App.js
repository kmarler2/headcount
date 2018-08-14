import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

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
      <div>'hiii'</div>
    );
  }
}

export default App;
