import './TodayInfo.scss';

import React from 'react';
import propTypes from 'prop-types';

import TimeDateBlock from '../time-date-block/TimeDateBlock';
import DayFullWeather from '../day-full-weather/DayFullWeather';

import { DEFAULT_TIMEZONE } from '../../common/constants';
import { formatTemperature } from '../../common/helpers';

function TodayInfo({ forecast, isCelcius }) {
  if (!forecast) return null;

  const { timezone: timeZone } = forecast;

  const {
    temp: temperature,
    feels_like: feelsLike,
    humidity,
    wind_speed: windSpeed,
  } = forecast.current;

  const { icon, description } = forecast.current.weather[0];

  return (
    <>
      <TimeDateBlock timeZone={timeZone} />
      <DayFullWeather
        temperature={formatTemperature(isCelcius, Math.round(temperature))}
        feelsLike={formatTemperature(isCelcius, feelsLike)}
        humidity={humidity}
        windSpeed={windSpeed}
        description={description}
        icon={icon}
      />
    </>
  );
}

TodayInfo.propTypes = {
  forecast: propTypes.shape({
    current: propTypes.shape({
      temp: propTypes.number,
      feels_like: propTypes.number,
      humidity: propTypes.number,
      wind_speed: propTypes.number,
      weather: propTypes.arrayOf(
        propTypes.shape({
          icon: propTypes.string,
          description: propTypes.string,
        }),
      ),
    }),
    daily: propTypes.arrayOf(
      propTypes.shape({
        weather: propTypes.arrayOf(
          propTypes.shape({
            icon: propTypes.string,
          }),
        ),
        dt: propTypes.number,
      }),
    ),
    timezone: propTypes.string,
  }),
  isCelcius: propTypes.bool,
};

TodayInfo.defaultProps = {
  forecast: {
    timeZone: DEFAULT_TIMEZONE,
  },
  isCelcius: true,
};

export default TodayInfo;
