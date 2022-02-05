import './control-block.styles.scss';

import React, { useState } from 'react';

import BgChangeButton from '../../components/bg-change-button/bg-change-button';
import fetchImage from '../../api/flickr';
import TemperatureSwitcher from '../../components/temperature-switcher/TemperatureSwitcher';
import LanguageSelect from '../../components/language-select/LanguageSelect';

const changeBg = async () => {
  const imageSrc = await fetchImage('winter');
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

function ControlBlock() {
  const [isCelcius, setTemperatureUnit] = useState(true);
  const changeTemperatureUnit = () => {
    setTemperatureUnit(!isCelcius);
  };

  return (
    <div className="control-block">
      <BgChangeButton changeBg={changeBg} />
      <TemperatureSwitcher isCelcius={isCelcius} changeTemperatureUnit={changeTemperatureUnit} />
      <p>{isCelcius.toString()}</p>
      <LanguageSelect />
    </div>
  );
}

export default ControlBlock;
