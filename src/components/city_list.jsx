/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React from 'react';
import City from './city';

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];  

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
