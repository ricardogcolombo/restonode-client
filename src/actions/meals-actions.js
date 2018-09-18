const getMealsSuccess = meals => ({
  type: 'GET_MEALS_LIST_SUCCESS',
  meals,
});
const updateMealSelection = mealsSelection => ({
  type: 'UPDATE_MEAL_SELECTION',
  mealsSelection,
});
const updateTime = time => ({
  type: 'UPDATE_TIME',
  time,
});
export default {
  getMealsSuccess,
  updateMealSelection,
  updateTime,
};
