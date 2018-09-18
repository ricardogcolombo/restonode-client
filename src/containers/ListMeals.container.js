import React from 'react';

import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import '../styles/ListMeals.scss';
import store from '../store';
import actions from '../actions/meals-actions';
import Card from '../components/Card.component';
import api from '../api/api';

class ListMeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meals: [], mealsSelection: [] };
  }

  componentDidMount() {
    api.getMeals();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      meals: nextProps.meals,
      mealsSelection: nextProps.mealsSelection,
    });
  }

  render() {
    const { meals, mealsSelection } = this.state;
    const onChangeEvent = (value, name) => {
      const reducer = (acum, item) => acum.concat(Object.assign({}, item));
      let selected = mealsSelection.reduce(reducer, []);
      const filterFunction = item => item.name === name;
      if (selected && selected.length > 0 && selected.filter(filterFunction).length > 0) {
        selected.filter(item => item.name === name)[0].quantity = value;
      } else {
        // first time, create array
        if (!selected) selected = [];
        // then push the new item
        selected.push({ name, quantity: value });
      }
      store.dispatch(actions.updateMealSelection(selected));
    };
    const cards = meals.length > 0 ? meals.map(item => <Card key={item.name} onChangeEvent={onChangeEvent} ImgSrc={item.img} Description={item.name} />) : '';
    return (
      <div className="ListMeals">
        {cards}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  meals: state.meals.meals,
  mealsSelection: state.meals.mealsSelection,
});

ListMeals.propTypes = {
  meals: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  mealsSelection: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

ListMeals.defaultProps = {
  meals: [],
  mealsSelection: [],
};

export default connect(mapStateToProps)(ListMeals);
