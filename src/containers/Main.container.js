import React from 'react';
import '../styles/Main.scss';

import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';
import store from '../store';
import actions from '../actions/location-actions';
import ButtonContainer from './Button.container';


class Main extends React.Component {
  navTo(pageKey) {
    const { history } = this.props;

    history.push(pageKey);
  }

  render() {
    let isBsas;
    const navToMeals = () => {
    // only for Bsas is going to continue
      if (isBsas) this.navTo('/meals');
    };
    const onChangeLocation = (gDir) => {
    // check if the address is BsAs,Capital Federal,Argentina
      isBsas = false || gDir.gmaps.address_components.filter(item => item.long_name === 'Buenos Aires' && item.short_name === 'CABA').length > 0;
      if (isBsas) store.dispatch(actions.updateLocation(gDir.location.lat, gDir.location.lng));
    };
    return (
      <div className="Main">
        <div className="Main-AddressContainer">
          <Geosuggest
            placeholder="Type your Address!"
            initialValue=""
            onBlur={() => {}}
            onSuggestSelect={onChangeLocation}
          />
          <ButtonContainer buttonText="Select Food" onClickEvent={navToMeals} buttonClassName="button" />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Main;
