import './Map.scss';

import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import mapboxgl from 'mapbox-gl';
import { DEFAULT_MAP_CONFIG } from '../../common/constants';

mapboxgl.accessToken = process.env.MAPBOX_KEY;

function Map({ coordinates }) {
  const { latitude, longitude } = coordinates;

  const mapContainer = useRef(null);
  const marker = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      ...DEFAULT_MAP_CONFIG,
      container: mapContainer.current,
      center: [longitude, latitude],
    });

    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.flyTo({ center: [longitude, latitude] });
  }, [latitude, longitude]);

  useEffect(() => {
    if (!map.current || marker.current) return; // initialize marker only once
    marker.current = new mapboxgl.Marker();
    marker.current.setLngLat([longitude, latitude]).addTo(map.current);

    return () => marker.current.remove();
  }, []);

  useEffect(() => {
    if (!marker.current) return; // wait for marker to initialize
    marker.current.setLngLat([longitude, latitude]);
  }, [latitude, longitude]);

  console.log('render map!');
  return (
    <div className="main__map-container">
      <div ref={mapContainer} className="map" />
      <div className="map__description" />
    </div>
  );
}

Map.propTypes = {
  coordinates: propTypes.shape({
    latitude: propTypes.number,
    longitude: propTypes.number,
  }),
};

Map.defaultProps = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
};

export default Map;
