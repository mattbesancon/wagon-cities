
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import citiesReducer from '../reducers/cities_reducer';

import ReactDOM from 'react-dom';
import React from 'react';
import App from '../components/app';

const reducers = combineReducers({
  cities: citiesReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
