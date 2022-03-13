import './WeekForecast.scss';

import React from 'react';
import propTypes from 'prop-types';

import DayWeather from '../../components/day-weather/DayWeather';
import { formatTemperature } from '../../common/helpers';

function WeekForecast({ forecast, isCelcius }) {
  if (!forecast) return null;

  const daysWeather = forecast.daily.slice(1, 4).map((dayWeather) => ({
    key: dayWeather.dt,
    temperature: (dayWeather.temp.min + dayWeather.temp.max) / 2,
    icon: dayWeather.weather[0].icon,
  }));

  return (
    <div className="week-forecast-container">
      {daysWeather.map((dayWeather) => {
        const { key, temperature, icon } = dayWeather;
        return (
          <DayWeather
            key={key}
            temperature={formatTemperature(isCelcius, temperature)}
            icon={icon}
          />
        );
      })}
    </div>
  );
}

WeekForecast.propTypes = {
  forecast: propTypes.shape({
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
  }),
  isCelcius: propTypes.bool,
};

WeekForecast.defaultProps = {
  forecast: {},
  isCelcius: true,
};

export default WeekForecast;
