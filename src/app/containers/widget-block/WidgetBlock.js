import './WidgetBlock.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import updateCoordinates from '../../api/geo-location';
import { updateCoordinatesByPlaceName } from '../../api/open-cage';
import updateForecast from '../../api/open-weather';

import PlaceInfo from '../../components/place-info/PlaceInfo';
import MapBlock from '../map-block/MapBlock';
import TodayInfo from '../today-info/TodayInfo';
import WeekForecast from '../week-forecast/WeekForecast';

function WidgetBlock({ searchQuery, changeLoadingState }) {
  // Geo-location auto-detect functionality
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    updateCoordinates(setCoordinates, changeLoadingState);
    console.log('updateCoordinates');
  }, []);
  // ***************************************

  // Location detect by search query (place name)
  useEffect(() => {
    if (searchQuery === '') return;
    updateCoordinatesByPlaceName(searchQuery, setCoordinates, changeLoadingState);
    console.log('updateCoordinatesByPlaceName');
  }, [searchQuery]);
  // ***************************************

  // Fetch forecast for each location change
  const { latitude, longitude } = coordinates;

  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;
    updateForecast(coordinates, setForecast, changeLoadingState);
    console.log('updateForecast');
  }, [coordinates]);
  // ***************************************

  console.log('Render WidgetBlock');
  return (
    <div className="main-container">
      <div className="left-container">
        <PlaceInfo coordinates={coordinates} />
        <TodayInfo forecast={forecast} />
        <WeekForecast forecast={forecast} />
      </div>
      <MapBlock coordinates={coordinates} />
    </div>
  );
}

WidgetBlock.propTypes = {
  searchQuery: propTypes.string,
  changeLoadingState: propTypes.func,
};

WidgetBlock.defaultProps = {
  searchQuery: '',
  changeLoadingState: () => {},
};

export default WidgetBlock;
