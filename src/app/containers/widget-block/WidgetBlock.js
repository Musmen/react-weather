import './WidgetBlock.scss';

import React from 'react';
import propTypes from 'prop-types';

import PlaceInfo from '../../components/place-info/PlaceInfo';
import MapBlock from '../map-block/MapBlock';
import TodayInfo from '../today-info/TodayInfo';
import WeekForecast from '../week-forecast/WeekForecast';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function WidgetBlock({ coordinates, place, country, forecast }) {
  console.log('Render WidgetBlock');
  return (
    <div className="main-container">
      <div className="left-container">
        <PlaceInfo place={place} country={country} />
        <TodayInfo forecast={forecast} />
        <WeekForecast forecast={forecast} />
      </div>
      <MapBlock coordinates={coordinates} />
    </div>
  );
}

WidgetBlock.propTypes = {
  coordinates: propTypes.shape({
    latitude: propTypes.number,
    longitude: propTypes.number,
  }),
  place: propTypes.string,
  country: propTypes.string,
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
};

WidgetBlock.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
  place: '',
  country: '',
  forecast: {
    timeZone: DEFAULT_TIMEZONE,
  },
};

export default WidgetBlock;
