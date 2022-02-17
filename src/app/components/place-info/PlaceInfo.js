import './PlaceInfo.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getPlaceInfoByGeoCoordinates, parseCountry, parsePlace } from '../../api/open-cage';

const updatePlaceAndCountry = async (coordinates, setPlace, setCountry) => {
  const locationResponse = await getPlaceInfoByGeoCoordinates(coordinates);
  const locationInfo = locationResponse.results[0].components;
  setPlace(parsePlace(locationInfo));
  setCountry(parseCountry(locationInfo));
};

function PlaceInfo({ coordinates }) {
  const { latitude, longitude } = coordinates;

  const [place, setPlace] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;
    updatePlaceAndCountry(coordinates, setPlace, setCountry);
    console.log('updatePlace');
  }, [latitude, longitude]);

  return (
    <p className="location-description">
      {place}, {country}
    </p>
  );
}

PlaceInfo.propTypes = {
  coordinates: propTypes.shape({
    latitude: propTypes.number,
    longitude: propTypes.number,
  }),
};

PlaceInfo.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
};

export default PlaceInfo;
