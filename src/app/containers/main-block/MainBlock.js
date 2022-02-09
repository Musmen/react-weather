import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { getCoordinatesByPlaceName, parseCoordinates } from '../../api/open-cage';
import getForecastByCoordinates from '../../api/open-weather';
import PlaceInfo from '../../components/place-info/PlaceInfo';
import MapBlock from '../map-block/MapBlock';

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
    <>
      <h1>
        Hello from header! latitude: {`${latitude} `}
        longitude: {longitude}
      </h1>
      <PlaceInfo coordinates={coordinates} />
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
      <MapBlock coordinates={coordinates} />
    </>
  );
}

MainBlock.propTypes = {
  searchQuery: propTypes.string,
};

MainBlock.defaultProps = {
  searchQuery: '',
};

export default MainBlock;
