import './CoordinatesInfo.scss';

import React from 'react';
import propTypes from 'prop-types';

import { getCoordinatesDegreesAndMinutesObject } from '../../common/helpers';

function CoordinatesInfo({ coordinates }) {
  const { latitude, longitude } = getCoordinatesDegreesAndMinutesObject(coordinates);
  return (
    <p className="coordinates-description">
      Latitude: {latitude}, Longitude: {longitude}
    </p>
  );
}

CoordinatesInfo.propTypes = {
  coordinates: propTypes.shape({
    latitude: propTypes.number,
    longitude: propTypes.number,
  }),
};

CoordinatesInfo.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
};

export default CoordinatesInfo;
