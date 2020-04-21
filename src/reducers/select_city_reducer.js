const selectCityReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default selectCityReducer;

