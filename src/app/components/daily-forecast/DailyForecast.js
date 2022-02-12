import './DailyForecast.scss';

import React from 'react';
import propTypes from 'prop-types';
import Clock from '../clock/Clock';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function DailyForecast({ forecast }) {
  const timezone = forecast && forecast.timezone;

  return (
    <div className="container">
      {forecast && (
        <img
          src={`https://openweathermap.org/img/w/${forecast.current.weather[0].icon}.png`}
          alt="weather icon"
        />
      )}
      {forecast &&
        forecast.daily.map((dailyForecast) => (
          <img
            src={`https://openweathermap.org/img/w/${dailyForecast.weather[0].icon}.png`}
            key={dailyForecast.dt}
            alt="weather icon"
          />
        ))}
      <p>{JSON.stringify(forecast && forecast.current.weather[0])}</p>
      <Clock timeZone={timezone} />
    </div>
  );
}

DailyForecast.propTypes = {
  forecast: propTypes.shape({
    current: propTypes.shape({
      weather: propTypes.arrayOf(
        propTypes.shape({
          icon: propTypes.string,
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
};

DailyForecast.defaultProps = {
  forecast: {
    timeZone: DEFAULT_TIMEZONE,
  },
};

export default DailyForecast;
