import './DayWeatherInfo.scss';

import React, { useContext } from 'react';
import propTypes from 'prop-types';
import LanguageContext from '../language-context/LanguageContext';
import { VOCABULARY } from '../../common/vocabulary';

function DayWeatherInfo({ feelsLike, humidity, windSpeed, description }) {
  const { currentLanguage } = useContext(LanguageContext);
  const feelsLikeLabel = VOCABULARY.feelsLike[currentLanguage];
  const windLabel = VOCABULARY.wind[currentLanguage];
  const windSpeedUnit = VOCABULARY.windSpeed[currentLanguage];
  const humidityLabel = VOCABULARY.humidity[currentLanguage];

  return (
    <p className="weather-summary">
      <span className="weather-description">{description}</span>
      <span className="feels-like-temperature">
        {feelsLikeLabel}: {Math.round(feelsLike)}°
      </span>
      <span className="wind-speed">
        {windLabel}: {windSpeed.toFixed(1)} <span className="lower-case">{windSpeedUnit}</span>
      </span>
      <span className="humidity">
        {humidityLabel}: {humidity}%
      </span>
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
