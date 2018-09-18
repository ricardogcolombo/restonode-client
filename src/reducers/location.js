const location = (state = { lat: '', long: '' }, action) => {
  switch (action.type) {
    // TODO move actions to separated file
    case 'UPDATE_LOCATION':
      return Object.assign({}, state, { lat: action.lat, long: action.long });

    default:
      return state;
  }
};

export default location;
