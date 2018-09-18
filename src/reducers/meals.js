const mealsReducer = (state = { meals: [], mealsSelection: [] }, action) => {
  switch (action.type) {
    // TODO move actions to separated file
    case 'GET_MEALS_LIST_SUCCESS':
      return Object.assign({}, state, action.meals);

    case 'UPDATE_MEAL_SELECTION':
      return Object.assign({}, state, { mealsSelection: action.mealsSelection });
    case 'UPDATE_TIME':
      return Object.assign({}, state, { time: action.time });
    default:
      return state;
  }
};
export default mealsReducer;
