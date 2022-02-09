import './MapBlock.scss';

import React from 'react';
import propTypes from 'prop-types';
import Map from '../../components/map/Map';
import CoordinatesInfo from '../../components/coordinates-info/CoordinatesInfo';

function MapBlock({ coordinates }) {
  return (
    <div className="map-container">
      <Map coordinates={coordinates} />
      <CoordinatesInfo coordinates={coordinates} />
    </div>
  );
}

MapBlock.propTypes = {
  coordinates: propTypes.shape({
    latitude: propTypes.number,
    longitude: propTypes.number,
  }),
};

MapBlock.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
};

export default MapBlock;
