import React from 'react';
import '../styles/Delivery.scss';

import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';

import ButtonContainer from './Button.container';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ time: '0:00' });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: nextProps.time,
    });
  }

  navTo(pageKey) {
    const { history } = this.props;

    history.replace(pageKey);
  }

  render() {
    const backToInit = () => {
      this.navTo('/');
    };
    const { time } = this.state;
    return (
      <div className="Delivery">
        <div className="Delivery__TimeContainer">
          <div className="Delivery__TimeContainer__TimeTitle"> Estimated Time Arrival </div>
          <div className="Delivery__TimeContainer__Time">{time}</div>
        </div>
        <ButtonContainer buttonClassName="button" buttonText="Back To Menu" onClickEvent={backToInit} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  time: state.meals.time,
});
Delivery.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  time: PropTypes.string,
};
Delivery.defaultProps = {
  time: '0:00',
};

export default connect(mapStateToProps)(Delivery);
