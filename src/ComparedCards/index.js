import React from 'react';
import Card from '../Card/index.js';
import './comparedCards.css';
import PropTypes from 'prop-types';

const DisplayComparedCards = (props) => {
  const dataToCompare = Object.keys(props.data);
  const comparedCards = Object.keys(props.data).map((district, index) => {
    return <Card 
      location={ props.data[district].location }
      stats={ props.data[district].stats }
      key={ index } 
      select={ props.data[district].selected }
      findDistrictByClick={ props.findDistrictByClick }
      compareDistrictAverages={ props.compareDistrictAverages }
    />;
  });

  if (dataToCompare.length === 2) {
    const data = props.compareDistrictAverages(dataToCompare[0], dataToCompare[1]);
    return (
      <div>
        { comparedCards }
        <div className='comparedCards'>
          <p className='comparisonHeader'> Comparison: </p>
          <p>{ dataToCompare[0] }: { data[dataToCompare[0]] }</p>
          <p>{ dataToCompare[1] }: { data[dataToCompare[1]] }</p>
          <p>{ 'Compared' }: { data['compared'] }</p>
        </div>
      </div>
    );
  }
    
  return (
    <div>
      { comparedCards }
    </div>
  );
};

DisplayComparedCards.propTypes = {
  data: PropTypes.object,
  findDistrictByClick: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};

export default DisplayComparedCards;