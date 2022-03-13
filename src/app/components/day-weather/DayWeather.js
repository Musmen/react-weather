import './DayWeather.scss';

import { Skycons } from 'skycons-ts';

import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';

import { OPEN_WEATHER_ICON_TO_SKYCONS_ICON, SKYCONS_ICONS_OPTIONS } from '../../common/constants';

function DayWeather({ temperature, icon }) {
  const dayWeatherIcon = useRef(null);
  const skycons = useRef(null);

  useEffect(() => {
    skycons.current = new Skycons(SKYCONS_ICONS_OPTIONS);
  }, []);

  useEffect(() => {
    skycons.current.add(dayWeatherIcon.current, OPEN_WEATHER_ICON_TO_SKYCONS_ICON[icon]);
    skycons.current.play();
    return () => skycons.current.remove(dayWeatherIcon.current);
  }, [icon]);

  return (
    <div className="day-weather-container">
      <span className="day-weather-temperature">{temperature}°</span>
      <canvas className="day-weather-icon" ref={dayWeatherIcon} width="128" height="128" />
    </div>
  );
}

DayWeather.propTypes = {
  temperature: propTypes.number,
  icon: propTypes.string,
};

DayWeather.defaultProps = {
  temperature: null,
  icon: null,
};

export default DayWeather;
