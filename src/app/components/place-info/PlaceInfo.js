import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPlaceInfoByGeoCoordinates, parsePlace } from '../../api/open-cage';

const updatePlace = async (coordinates, setPlace) => {
  const placeInfo = await getPlaceInfoByGeoCoordinates(coordinates);
  setPlace(parsePlace(placeInfo));
};

function PlaceInfo({ coordinates }) {
  const { latitude, longitude } = coordinates;

  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!latitude || !longitude) return;
    updatePlace(coordinates, setPlace);
    console.log('updatePlace');
  }, [latitude, longitude]);

  return <p>{place}</p>;
}

PlaceInfo.propTypes = {
  coordinates: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

PlaceInfo.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
};

export default PlaceInfo;
