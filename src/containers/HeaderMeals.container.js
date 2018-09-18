import React from 'react';
import '../styles/HeaderMeals.scss';

import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import api from '../api/api';
import ButtonContainer from './Button.container';

class HeaderMeals extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      config: nextProps.config, // eslint-disable-line  react/no-unused-state
    });
  }

  navTo(pageKey) {
    const { history } = this.props;

    history.push(pageKey);
  }


  render() {
    let name; let lastname;
    const onGoClick = () => {
      const { config } = this.state;
      api.saveMeals({
        name,
        lastname,
        lat: config.lat,
        long: config.long,
        meals: config.mealsSelection,
      });
      this.navTo('Delivery');
    };
    const onChangeName = (evt) => {
      name = evt.target.value;
    };
    const onChangeLastName = (evt) => {
      lastname = evt.target.value;
    };
    return (
      <div className="HeaderMeals">
        <div className="HeaderMeals__Field">
          <div className="HeaderMeals__Field__Label"> First Name </div>
          <input className="HeaderMeals__Field__input" onChange={onChangeName} />
        </div>
        <div className="HeaderMeals__Field">
          <div className="HeaderMeals__Field__Label"> Last Name </div>
          <input className="HeaderMeals__Field__input" onChange={onChangeLastName} />
        </div>
        <ButtonContainer buttonText="Go" buttonClassName="button" onClickEvent={onGoClick} />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    config: {
      mealsSelection: state.meals.mealsSelection,
      lat: state.location.lat,
      long: state.location.long,
    },
  };
};
HeaderMeals.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  config: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

HeaderMeals.defaultProps = {
  config: { lat: '', long: '' },
};
export default connect(mapStateToProps)(HeaderMeals);
