import './ControlBlock.scss';

import React from 'react';
import propTypes from 'prop-types';

import BgChangeButton from '../../components/bg-change-button/BgChangeButton';
import TemperatureSwitcher from '../../components/temperature-switcher/TemperatureSwitcher';
import LanguageSelect from '../../components/language-select/LanguageSelect';
import SearchBlock from '../../components/search-block/SeacrhBlock';

import changeBg from '../../api/flickr';

function ControlBlock({ searchQuery, changeSearchQuery, isCelcius, changeTemperatureUnit }) {
  console.log('Render ControlBlock');
  return (
    <div className="control-block">
      <div className="buttons-selects-block">
        <BgChangeButton changeBg={changeBg} />
        <TemperatureSwitcher isCelcius={isCelcius} changeTemperatureUnit={changeTemperatureUnit} />
        <LanguageSelect />
      </div>
      <SearchBlock searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
    </div>
  );
}

ControlBlock.propTypes = {
  searchQuery: propTypes.string,
  changeSearchQuery: propTypes.func,
  isCelcius: propTypes.bool,
  changeTemperatureUnit: propTypes.func,
};

ControlBlock.defaultProps = {
  searchQuery: '',
  changeSearchQuery: () => {},
  isCelcius: true,
  changeTemperatureUnit: () => {},
};

export default ControlBlock;
