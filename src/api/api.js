// import axios from 'axios';

import axios from 'axios';
import moment from 'moment';
import store from '../store';
import actions from '../actions/meals-actions';
/**
 * Get all meals
 */
function getMeals() {
  // TODO Move this to backend
  const dataset = {
    meals: [{
      displayName: 'Pizza',
      name: 'Pizza',
      img: 'https://recipes.timesofindia.com/photo/53110049.cms',
    }, {
      displayName: 'Burger',
      name: 'Burger',
      img: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',
    }, {
      displayName: 'Hot-Dog',
      name: 'Hot-Dog',
      img: 'https://leitesculinaria.com/wp-content/uploads/fly-images/96169/best-hot-dog-recipe-fi-400x225-c.jpg',
    }, {
      displayName: 'Mexican Taco',
      name: 'Mexican Taco',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoxgC1gUgP-pFJ_DOOHvWB99VVsdn23cz7RPXyxWKDcn4DmXm',
    }],
  };
  store.dispatch(actions.getMealsSuccess(dataset));
}
function saveMeals(data) {
  axios.post('http://localhost:3000/api/deliveries', {
    name: data.name,
    lastname: data.lastname,
    lat: data.lat.toString(),
    long: data.long.toString(),
    meals: data.meals,
  })
    .then((res) => {
      if (res && res.data) {
        const timeString = moment.utc(res.data.time * 1000).format('HH:mm:ss');
        store.dispatch(actions.updateTime(timeString));
      }
    })
    .catch(err => console.log(err));
}
export default {
  getMeals,
  saveMeals,
};
