import './MainBlock.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { getCoordinatesByPlaceName, parseCoordinates } from '../../api/open-cage';
import getForecastByCoordinates from '../../api/open-weather';

import PlaceInfo from '../../components/place-info/PlaceInfo';
import MapBlock from '../map-block/MapBlock';
import TodayInfo from '../today-info/TodayInfo';
import WeekForecast from '../week-forecast/WeekForecast';

const updateForecast = async (coordinates, setForecast) => {
  const forecastResponse = await getForecastByCoordinates(coordinates);
  console.log(forecastResponse);
  setForecast(forecastResponse);
};

const updateCoordinates = (setCoordinates) => {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    setCoordinates({ latitude, longitude });
  });
};

const updateCoordinatesByPlaceName = async (placeName, setCoordinates) => {
  const placeInfo = await getCoordinatesByPlaceName(placeName);
  const coordinates = parseCoordinates(placeInfo);
  setCoordinates(coordinates);

  console.log(placeInfo);
  console.log('updateCoordinatesBySearchQuery');
};

function MainBlock({ searchQuery }) {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  useEffect(() => {
    updateCoordinates(setCoordinates);
    console.log('updateCoordinates');
  }, []);
  useEffect(() => {
    if (searchQuery === '') return;
    updateCoordinatesByPlaceName(searchQuery, setCoordinates);
  }, [searchQuery]);
  const { latitude, longitude } = coordinates;

  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    if (!latitude || !longitude) return;
    updateForecast(coordinates, setForecast);
    console.log('updateForecast');
  }, [latitude, longitude]);

  return (
    <div className="main-container">
      <div className="left-container">
        <PlaceInfo coordinates={coordinates} />
        <TodayInfo forecast={forecast} />
        {/* // может стоить уменьшит вложенность, сократим компоненты... */}
        <WeekForecast forecast={forecast} />
      </div>
      <MapBlock coordinates={coordinates} />
      {/* // может стоить уменьшит вложенность, сократим компоненты... */}
    </div>
  );
}

MainBlock.propTypes = {
  searchQuery: propTypes.string,
};

MainBlock.defaultProps = {
  searchQuery: '',
};

export default MainBlock;
