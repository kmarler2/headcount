import React, { Component } from 'react';
import './search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  
  handleChange = (event) => {
    this.props.findDistrict(event.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="input-form"
          placeholder='Search for a district'
          type="text"
          onChange={ this.handleChange } />
      </form>
    );
  }
}

Search.propTypes = {
  findDistrict: PropTypes.func
};

export default Search;