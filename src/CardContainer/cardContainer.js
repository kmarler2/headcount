import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({data}) => {
  const districtData = Object.keys(data).map((district, index) => {
    return <Card 
    location={data[district].location}
    stats={data[district].stats}
    key={index}
    select={data[district].selected}
    />
  })
  return(
    <div>
      {districtData}
    </div>
    )
}

export default CardContainer;