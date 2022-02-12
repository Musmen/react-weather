import './DailyWeather.scss';

import React from 'react';
import propTypes from 'prop-types';

function DailyWeather({ temperature, feelsLike, humidity, windSpeed, description, icon }) {
  return (
    <div className="daily-weather">
      <div className="daily-weather-temperature-and-icon">
        <span className="daily-weather-temperature">{Math.round(temperature)}°</span>
        <img
          className="daily-weather-icon"
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt="daily weather icon"
        />
      </div>
      <p className="daily-weather-summary">
        <span className="weather-description">{description}</span>
        <span className="feels-like-temperature">feels like: {Math.round(feelsLike)}°</span>
        <span className="wind-speed">
          wind: {windSpeed.toFixed(1)} <span className="lower-case">m/s</span>
        </span>
        <span className="humidity">humidity: {humidity}%</span>
      </p>
    </div>
  );
}

DailyWeather.propTypes = {
  temperature: propTypes.number,
  feelsLike: propTypes.number,
  description: propTypes.string,
  humidity: propTypes.number,
  windSpeed: propTypes.number,
  icon: propTypes.string,
};

DailyWeather.defaultProps = {
  temperature: null,
  feelsLike: null,
  description: null,
  humidity: null,
  windSpeed: null,
  icon: null,
};

export default DailyWeather;
