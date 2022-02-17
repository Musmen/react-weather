import './WeekForecast.scss';

import React from 'react';
import propTypes from 'prop-types';

import DayWeather from '../../components/day-weather/DayWeather';

function WeekForecast({ forecast }) {
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
        return <DayWeather key={key} temperature={temperature} icon={icon} />;
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
};

WeekForecast.defaultProps = {
  forecast: {},
};

export default WeekForecast;
