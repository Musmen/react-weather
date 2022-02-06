import './ControlBlock.scss';

import React, { useState } from 'react';
import propTypes from 'prop-types';

import BgChangeButton from '../../components/bg-change-button/BgChangeButton';
import fetchImage from '../../api/flickr';
import TemperatureSwitcher from '../../components/temperature-switcher/TemperatureSwitcher';
import LanguageSelect from '../../components/language-select/LanguageSelect';
import SearchBlock from '../../components/search-block/SeacrhBlock';

const changeBg = async () => {
  const imageSrc = await fetchImage('winter');
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

function ControlBlock({ searchQuery, changeSearchQuery }) {
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
      <SearchBlock searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
    </div>
  );
}

ControlBlock.propTypes = {
  searchQuery: propTypes.string,
  changeSearchQuery: propTypes.func,
};

ControlBlock.defaultProps = {
  searchQuery: '',
  changeSearchQuery: () => {},
};

export default ControlBlock;
