import './control-block.styles.scss';

import React from 'react';
import BgChangeButton from '../../components/bg-change-button/bg-change-button';
import fetchImage from '../../api/flickr';

const changeBg = async () => {
  const imageSrc = await fetchImage('winter');
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

function ControlBlock() {
  return (
    <div className="control-block">
      <BgChangeButton changeBg={changeBg} />
    </div>
  );
}

export default ControlBlock;
