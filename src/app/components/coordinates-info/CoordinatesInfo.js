import './CoordinatesInfo.scss';

import React, { useContext } from 'react';
import propTypes from 'prop-types';
import LanguageContext from '../language-context/LanguageContext';

import { getCoordinatesDegreesAndMinutesObject } from '../../common/helpers';
import { VOCABULARY } from '../../common/vocabulary';

function CoordinatesInfo({ coordinates }) {
  const { currentLanguage } = useContext(LanguageContext);
  const latitudeLabel = VOCABULARY.latitude[currentLanguage];
  const longitudeLabel = VOCABULARY.longitude[currentLanguage];

  const { latitude, longitude } = getCoordinatesDegreesAndMinutesObject(coordinates);

  return (
    <p className="coordinates-description">
      {latitudeLabel}: {latitude}, {longitudeLabel}: {longitude}
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
