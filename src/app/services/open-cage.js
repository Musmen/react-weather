import { DEFAULT_LANGUAGE, LANGUAGE_TO_API_LANG_CODE } from '../common/constants';
import { fetchData } from '../common/helpers';

const API_KEY = process.env.OPEN_CAGE_KEY;

const URLS = {
  BASE: 'https://api.opencagedata.com/',
  GEOCODING: 'geocode/v1/json',
  KEY: `?key=${API_KEY}`,
  QUERY: `&q=`,
  LANGUAGE: '&language=',
  PRETTY: '&pretty=1',
};

const API_URL_REQUEST = `${URLS.BASE}${URLS.GEOCODING}${URLS.KEY}${URLS.PRETTY}${URLS.QUERY}`;

export const getPlaceInfoByGeoCoordinates = async ({
  latitude,
  longitude,
  language = DEFAULT_LANGUAGE,
}) => {
  const languageQuery = `${URLS.LANGUAGE}${LANGUAGE_TO_API_LANG_CODE[language]}`;
  const coordinatesQuery = `${latitude}+${longitude}`;
  const placeInfo = await fetchData(`${API_URL_REQUEST}${coordinatesQuery}${languageQuery}`);
  return placeInfo;
};

export const parsePlace = (locationInfo) => {
  const placeInfo = locationInfo.components;

  return (
    placeInfo.city ||
    placeInfo.town ||
    placeInfo.village ||
    placeInfo.county ||
    placeInfo.state ||
    locationInfo.formatted.split(',')[0] ||
    ''
  );
};

export const parseCountry = (locationInfo) =>
  locationInfo.components.country || locationInfo.formatted || '';

export const parseCoordinates = (placeInfo) => {
  const { lat, lng } = placeInfo.results[0].geometry;
  return { latitude: lat, longitude: lng };
};

export const getCoordinatesByPlaceName = async (placeName) => {
  const placeInfo = await fetchData(`${API_URL_REQUEST}${placeName}`);
  return placeInfo;
};
