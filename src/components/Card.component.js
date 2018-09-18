import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  ImgSrc,
  Description,
  onClickEvent,
  onChangeEvent,
}) => (
  <div className="Card" onClick={onClickEvent} onKeyDown={onClickEvent} tabIndex={-1} role="textbox">
    <div className="Card__ImgContainer">
      <img src={ImgSrc} alt={Description} />
    </div>

    <div className="Card__DescContainer">
      <div className="Card__Description">
        {Description}
      </div>
    </div>
    <input type="number" onChange={event => onChangeEvent(event.target.value, Description)} min="0" />
  </div>
);


Card.propTypes = {
  ImgSrc: PropTypes.string,
  Description: PropTypes.string,
  onClickEvent: PropTypes.func,
  onChangeEvent: PropTypes.func,
};
Card.defaultProps = {
  ImgSrc: '',
  Description: '',
  onClickEvent: (() => {}),
  onChangeEvent: (() => {}),
};
export default Card;
