import React, {
  Component,
} from 'react';

import PropTypes from 'prop-types';
import Button from '../components/Button.component';

class ButtonContainer extends Component {
  onTouchCancel() {
    this.setState({
      trackingClick: false,
    });
  }

  onTouchEnd() {
    const { onClickEvent } = this.props;
    this.setState({
      trackingClick: false,
    });
    onClickEvent(this);
  }

  onTouchMove(event) {
    const { trackingClick } = this.state;
    if (trackingClick) {
    // If the touch has moved, cancel the click tracking
      // eslint-disable-next-line
        if (this.props.targetElement !== event.target ||
            // eslint-disable-next-line
            (Math.abs(event.changedTouches[0].pageX - this.propstouchStartX) > this.props.touchBoundary ||
                // eslint-disable-next-line
                (Math.abs(event.changedTouches[0].pageY - this.props.touchStartY) > this.props.touchBoundary))) {
        this.setState({
          trackingClick: false,
        });
      }
    }
  }

  onTouchStart(event) {
    this.setState({
      trackingClick: true,

      // eslint-disable-next-line
            targetElement: event.target,

      // eslint-disable-next-line
            touchStartX: event.targetTouches ? event.targetTouches[0].pageX : null,

      // eslint-disable-next-line
            touchStartY: event.targetTouches ? event.targetTouches[0].pageY : null
    });
    return true;
  }

  render() {
    const { buttonClassName, buttonText } = this.props;

    const onClickPress = (event) => {
      this.onTouchStart(event);
      this.onTouchEnd(event);
    };

    return (
      <Button
        className={buttonClassName}
        onTouchCancel={this.onTouchCancel}
        onTouchEnd={this.onTouchEnd}
        onTouchMove={this.onTouchMove}
        onClick={onClickPress}
        text={buttonText}
        onTouchStart={this.onTouchStart}
      />
    );
  }
}

ButtonContainer.propTypes = {
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  onClickEvent: PropTypes.func,
};

ButtonContainer.defaultProps = {
  buttonClassName: '',
  buttonText: '',
  onClickEvent: () => {},
};
export default ButtonContainer;
