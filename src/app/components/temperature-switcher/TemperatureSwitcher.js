import './TemperatureSwitcher.scss';

import React from 'react';
import propTypes from 'prop-types';

function TemperatureSwitcher({ isCelcius, changeTemperatureUnit }) {
  return (
    <div className="switcher__container">
      <label className="switcher__label" htmlFor="switcher">
        <input
          className="switcher"
          type="checkbox"
          name="switcher"
          id="switcher"
          onChange={changeTemperatureUnit}
          checked={isCelcius}
        />
        <span className="switcher__inner" />
        <span className="switcher__switch" />
      </label>
    </div>
  );
}

TemperatureSwitcher.propTypes = {
  isCelcius: propTypes.bool,
  changeTemperatureUnit: propTypes.func,
};

TemperatureSwitcher.defaultProps = {
  isCelcius: true,
  changeTemperatureUnit: () => {},
};

export default TemperatureSwitcher;
