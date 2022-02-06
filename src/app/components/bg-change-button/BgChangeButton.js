import './BgChangeButton.scss';

import React from 'react';
import propTypes from 'prop-types';
import BgChangeButtonIcon from './BgChangeButtonIcon';

function BgChangeButton(props) {
  const { changeBg } = props;

  return (
    <button className="background__button button" onClick={changeBg} type="button">
      <BgChangeButtonIcon />
    </button>
  );
}

BgChangeButton.propTypes = {
  changeBg: propTypes.func,
};

BgChangeButton.defaultProps = {
  changeBg: () => {},
};

export default BgChangeButton;
