import React from 'react';
import Card from '../Card/index.js';
import PropTypes from 'prop-types';

const CardContainer = ({data, findDistrictByClick}) => {
  const districtData = Object.keys(data).map((district, index) => {
    return <Card 
      location={data[district].location}
      stats={data[district].stats}
      key={index}
      select={data[district].selected}
      findDistrictByClick={findDistrictByClick}
    />;
  });
  return (
    <div>
      {districtData}
    </div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.object,
  findDistrictByClick: PropTypes.func
};

export default CardContainer;