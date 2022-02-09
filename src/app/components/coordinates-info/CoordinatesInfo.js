import './CoordinatesInfo.scss';

import React from 'react';
import propTypes from 'prop-types';
import { getCoordinatesDegreesAndMinutesString } from '../../common/helpers';

function CoordinatesInfo({ coordinates }) {
  const { latitude, longitude } = getCoordinatesDegreesAndMinutesString(coordinates);
  return (
    <p className="coordinates__description">{`Latitude: ${latitude} Longitude: ${longitude}`}</p>
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
