/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React from 'react';
import City from './city';


const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city) => {
      return (
        <City
          city={city}
          key={city.address}
        />
      );
    });
  };

  return (
    <div className="list-group-item">
      {renderList()}
    </div>
  );
};

export default CityList;
