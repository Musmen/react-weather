import './PlaceInfo.scss';

import React from 'react';
import propTypes from 'prop-types';

function PlaceInfo({ place, country }) {
  return (
    <p className="location-description">
      {place}, {country}
    </p>
  );
}

PlaceInfo.propTypes = {
  place: propTypes.string,
  country: propTypes.string,
};

PlaceInfo.defaultProps = {
  place: '',
  country: '',
};

export default PlaceInfo;
