/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions/select_city';

class City extends Component {
  render() {
    return (
      <div className="cities">
        {props.name}
      </div>
    );
  };
} 

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
