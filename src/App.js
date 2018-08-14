import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

const district = new DistrictRepository(data);

class App extends Component {
  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
