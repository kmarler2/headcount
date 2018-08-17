import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  
  handleChange = (e) => {
    this.props.findDistrict(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="input-form"
          placeholder='Search for a district'
          type="text"
          onChange={ this.handleChange } />
        <button className='button'></button> 
      </form>
    );
  }
}

export default Search;