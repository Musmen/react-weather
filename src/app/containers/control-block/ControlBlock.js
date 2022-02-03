import './control-block.styles.scss';

import React, { useState } from 'react';
import BgChangeButton from '../../components/bg-change-button/bg-change-button';
import fetchImage from '../../api/flickr';
import TemperatureSwitcher from '../../components/temperature-switcher/TemperatureSwitcher';

const changeBg = async () => {
  const imageSrc = await fetchImage('winter');
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

function ControlBlock() {
  const [isCelcius, changeTemperatureUnit] = useState(true);

  return (
    <div className="control-block">
      <BgChangeButton changeBg={changeBg} />
      <TemperatureSwitcher
        isCelcius={isCelcius}
        changeTemperatureUnit={() => changeTemperatureUnit(!isCelcius)}
      />
      <p>{isCelcius.toString()}</p>
    </div>
  );
}

export default ControlBlock;
