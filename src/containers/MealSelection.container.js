import React from 'react';
import '../styles/App.scss';
import HeaderMeals from './HeaderMeals.container';
import ListMeals from './ListMeals.container';
import '../styles/MealSelection.scss';

class MealSelection extends React.Component {
  componentDidMount() {
    console.log('getMeals');
  }

  render() {
    return (
      <div className="MealSelection">
        <HeaderMeals {...this.props} />
        <ListMeals {...this.props} />
      </div>
    );
  }
}
export default MealSelection;
