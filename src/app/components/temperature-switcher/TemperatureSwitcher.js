import './TemperatureSwitcher.scss';

import React from 'react';
import propTypes from 'prop-types';

import { DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT } from '../../common/constants';

function TemperatureSwitcher({ isCelsius, changeTemperatureUnit }) {
  return (
    <div className="switcher__container">
      <label className="switcher__label" htmlFor="switcher">
        <input
          className="switcher"
          type="checkbox"
          name="switcher"
          id="switcher"
          onChange={changeTemperatureUnit}
          checked={isCelsius}
        />
        <span className="switcher__inner" />
        <span className="switcher__switch" />
      </label>
    </div>
  );
}

TemperatureSwitcher.propTypes = {
  isCelsius: propTypes.bool,
  changeTemperatureUnit: propTypes.func,
};

TemperatureSwitcher.defaultProps = {
  isCelsius: DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT,
  changeTemperatureUnit: () => {},
};

export default TemperatureSwitcher;
