import fetchData from '../common/helpers';

const API_KEY = process.env.OPEN_CAGE_KEY;

const URLS = {
  BASE: 'https://api.opencagedata.com/',
  GEOCODING: 'geocode/v1/json',
  KEY: `?key=${API_KEY}`,
  QUERY: `&q=`,
  LANGUAGE: '&language=ru',
  PRETTY: '&pretty=1',
};

const API_URL_REQUEST = `${URLS.BASE}${URLS.GEOCODING}${URLS.KEY}${URLS.LANGUAGE}${URLS.PRETTY}${URLS.QUERY}`;

export const getPlaceInfoByGeoCoordinates = async ({ latitude, longitude }) => {
  const coordinatesQuery = `${latitude}+${longitude}`;
  const placeInfo = await fetchData(`${API_URL_REQUEST}${coordinatesQuery}`);
  return placeInfo;
};

export const parsePlace = (placeInfo) => placeInfo.results[0].components.city;

export const getCoordinatesByPlaceName = async (placeName) => {
  const placeInfo = await fetchData(`${API_URL_REQUEST}${placeName}`);
  return placeInfo;
};

export const parseCoordinates = (placeInfo) => {
  const { lat, lng } = placeInfo.results[0].geometry;
  return { latitude: lat, longitude: lng };
};
