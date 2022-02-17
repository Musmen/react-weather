import './DayWeatherInfo.scss';

import React from 'react';
import propTypes from 'prop-types';

function DayWeatherInfo({ feelsLike, humidity, windSpeed, description }) {
  return (
    <p className="weather-summary">
      <span className="weather-description">{description}</span>
      <span className="feels-like-temperature">feels like: {Math.round(feelsLike)}°</span>
      <span className="wind-speed">
        wind: {windSpeed.toFixed(1)} <span className="lower-case">m/s</span>
      </span>
      <span className="humidity">humidity: {humidity}%</span>
    </p>
  );
}

DayWeatherInfo.propTypes = {
  feelsLike: propTypes.number,
  description: propTypes.string,
  humidity: propTypes.number,
  windSpeed: propTypes.number,
};

DayWeatherInfo.defaultProps = {
  feelsLike: null,
  description: null,
  humidity: null,
  windSpeed: null,
};

export default DayWeatherInfo;
