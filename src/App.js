import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer/index.js';
import Search from './Search/index.js';
import ComparedCards from './ComparedCards';

const district = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      districtData: district.dataCleaner(data),
      comparedDistricts: {}
    }
  }

  findDistrict = (str) => {
    this.setState({ districtData: district.findAllMatches(str) })
  }

  findDistrictByClick = (str) => {
    let d = district.findByName(str)

    if (!d.selected && Object.keys(this.state.comparedDistricts).length < 2) {
      d.selected = true

      this.setState({ comparedDistricts: {...this.state.comparedDistricts, [d.location]: d } })
      this.setState({ districtData: {...this.state.districtData, [d.location]: d }})
    } else if (d.selected === true && d.location === str) {
      d.selected = false
      Object.keys(this.state.comparedDistricts).reduce((acc, district) => {
        if (this.state.comparedDistricts[district].selected) {
          acc[this.state.comparedDistricts[district].location] = this.state.comparedDistricts[district]
        }
        this.setState({ comparedDistricts: acc})
        return acc
      },{})
      this.setState({ districtData: {...this.state.districtData, [d.location]: d }})
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
        <ComparedCards 
        data={ this.state.comparedDistricts }
        findDistrictByClick={ this.findDistrictByClick }
        compareDistrictAverages={ district.compareDistrictAverages } 
        />
        <CardContainer 
        data={ this.state.districtData }
        findDistrictByClick={this.findDistrictByClick }
        />
      </div>
    );
  }
}

export default App;