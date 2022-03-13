import './BgChangeButton.scss';

import React from 'react';
import propTypes from 'prop-types';

import BgChangeButtonIcon from './BgChangeButtonIcon';

function BgChangeButton({ changeBgImageByLocationHandler }) {
  return (
    <button
      className="background__button button"
      onClick={changeBgImageByLocationHandler}
      type="button"
    >
      <BgChangeButtonIcon />
    </button>
  );
}

BgChangeButton.propTypes = {
  changeBgImageByLocationHandler: propTypes.func,
};

BgChangeButton.defaultProps = {
  changeBgImageByLocationHandler: () => {},
};

export default BgChangeButton;
