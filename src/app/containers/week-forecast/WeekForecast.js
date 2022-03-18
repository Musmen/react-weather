import './WeekForecast.scss';

import React, { useContext } from 'react';
import propTypes from 'prop-types';

import DayWeather from '../../components/day-weather/DayWeather';
import LanguageContext from '../../components/language-context/LanguageContext';

import { formatTemperature, getAverage } from '../../common/helpers';
import {
  DAYS_IN_A_WEEK,
  DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT,
  DEFAULT_TIMEZONE,
} from '../../common/constants';
import { ORDER_TO_WEEKDAY } from '../../common/vocabulary';

function WeekForecast({ forecast, isCelsius }) {
  if (!forecast) return null;

  const { currentLanguage } = useContext(LanguageContext);

  const { timezone: timeZone } = forecast;
  const todayWeekDayIndex = new Date(
    Date.parse(new Date().toLocaleString('en-US', { timeZone })),
  ).getDay();

  const daysWeather = forecast.daily.slice(1, 4).map((dayWeather, dayIndex) => ({
    key: dayWeather.dt,
    temperature: Math.round(getAverage(dayWeather.temp.min, dayWeather.temp.max)),
    icon: dayWeather.weather[0].icon,
    weekDayIndex: (todayWeekDayIndex + dayIndex) % DAYS_IN_A_WEEK,
  }));

  return (
    <ul className="week-forecast-list list">
      {daysWeather.map((dayWeather) => {
        const { key, temperature, icon, weekDayIndex } = dayWeather;
        const translatedWeekDayString = ORDER_TO_WEEKDAY[currentLanguage][weekDayIndex];

        return (
          <li className="week-forecast-item" key={key}>
            <span className="week-day">{translatedWeekDayString}</span>
            <DayWeather temperature={formatTemperature(isCelsius, temperature)} icon={icon} />
          </li>
        );
      })}
    </ul>
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
    timezone: propTypes.string,
  }),
  isCelsius: propTypes.bool,
};

WeekForecast.defaultProps = {
  forecast: {
    timeZone: DEFAULT_TIMEZONE,
  },
  isCelsius: DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT,
};

export default WeekForecast;
