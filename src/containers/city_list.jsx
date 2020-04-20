/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';
import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities list-group-item">
        {this.props.cities.map((city) => {
          return (
            <City
              city={city}
              key={city.address}
            />
          );
        })}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
