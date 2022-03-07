import './BgChangeButton.scss';

import React from 'react';

import BgChangeButtonIcon from './BgChangeButtonIcon';
import changeBg from '../../api/flickr';

function BgChangeButton() {
  return (
    <button className="background__button button" onClick={changeBg} type="button">
      <BgChangeButtonIcon />
    </button>
  );
}

export default BgChangeButton;
