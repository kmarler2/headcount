import React from 'react';
import Card from '../Card/index.js';

const CardContainer = ({data, findDistrictByClick}) => {
  const districtData = Object.keys(data).map((district, index) => {
    return <Card 
      location={data[district].location}
      stats={data[district].stats}
      key={index}
      select={data[district].selected}
      findDistrictByClick={findDistrictByClick}
    />
  })
  return(
    <div>
      {districtData}
    </div>
  )
}

export default CardContainer;