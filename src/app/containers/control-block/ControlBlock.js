import './ControlBlock.scss';

import React from 'react';
import propTypes from 'prop-types';

import BgChangeButton from '../../components/bg-change-button/BgChangeButton';
import TemperatureSwitcher from '../../components/temperature-switcher/TemperatureSwitcher';
import LanguageSelect from '../../components/language-select/LanguageSelect';
import SearchBlock from '../../components/search-block/SeacrhBlock';

import { DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT } from '../../common/constants';

function ControlBlock({
  searchQuery,
  changeSearchQuery,
  isCelsius,
  changeTemperatureUnit,
  changeBgImageByLocationHandler,
}) {
  console.log('Render ControlBlock');
  return (
    <div className="control-block">
      <div className="buttons-selects-block">
        <BgChangeButton changeBgImageByLocationHandler={changeBgImageByLocationHandler} />
        <TemperatureSwitcher isCelsius={isCelsius} changeTemperatureUnit={changeTemperatureUnit} />
        <LanguageSelect />
      </div>
      <SearchBlock searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
    </div>
  );
}

ControlBlock.propTypes = {
  searchQuery: propTypes.string,
  changeSearchQuery: propTypes.func,
  isCelsius: propTypes.bool,
  changeTemperatureUnit: propTypes.func,
  changeBgImageByLocationHandler: propTypes.func,
};

ControlBlock.defaultProps = {
  searchQuery: '',
  changeSearchQuery: () => {},
  isCelsius: DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT,
  changeTemperatureUnit: () => {},
  changeBgImageByLocationHandler: () => {},
};

export default ControlBlock;
