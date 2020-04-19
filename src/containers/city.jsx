/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React from 'react';

const City = (props) => {
  return (
    <div className="app active-city">
      {props.name}
    </div>
  );
};

export default City;
