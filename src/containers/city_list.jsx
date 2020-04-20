/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';
import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions'; 
class FlatList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return props.cities.map((city) => {
      return (
        <City
          city={city}
          key={city.address}
        />
      );
    });
  }

  return (
    <div className="cities list-group-item">
      {renderList()}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { setCities: setCities },
  dispatch
  );
} 

export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
