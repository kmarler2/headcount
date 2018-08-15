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

    findDistrict = (str) => {
    this.setState({ districtData: district.findAllMatches(str) })
  }

  findDistrictByClick = (str) => {
   let district = district.findByName(str)

   if (!district.selected && Object.keys(this.state.comparedDistricts).length < 2) {
     district.selected = true

     this.setState({ comparedDistricts: {...this.state.comparedDistricts, [district.location]: district } })
     this.setState({ districtData: {...this.state.districtData, [district.location]: district }})
   } else if (district.selected === true && district.location === str) {
     district.selected = false

     Object.keys(this.state.comparedDistricts).reduce((acc, district) => {
       if (this.state.comparedDistricts[district].selected) {
         acc[this.state.comparedDistricts[district].location] = this.state.comparedDistricts[district]
       }
       this.setState({ comparedDistricts: acc})
       return acc
     },{})
     this.setState({ districtData: {...this.state.districtData, [district.location]: district }})
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
