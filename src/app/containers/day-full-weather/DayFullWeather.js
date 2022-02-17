import './DayFullWeather.scss';

import React from 'react';
import propTypes from 'prop-types';

import DayWeather from '../../components/day-weather/DayWeather';
import DayWeatherInfo from '../../components/day-weather-info/DayWeatherInfo';

function DayFullWeather({ temperature, feelsLike, humidity, windSpeed, description, icon }) {
  return (
    <div className="day-full-weather-container">
      <DayWeather temperature={temperature} icon={icon} />
      <DayWeatherInfo
        feelsLike={feelsLike}
        humidity={humidity}
        windSpeed={windSpeed}
        description={description}
      />
    </div>
  );
}

DayFullWeather.propTypes = {
  temperature: propTypes.number,
  feelsLike: propTypes.number,
  description: propTypes.string,
  humidity: propTypes.number,
  windSpeed: propTypes.number,
  icon: propTypes.string,
};

DayFullWeather.defaultProps = {
  temperature: null,
  feelsLike: null,
  description: null,
  humidity: null,
  windSpeed: null,
  icon: null,
};

export default DayFullWeather;
