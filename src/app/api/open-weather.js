import { fetchData } from '../common/helpers';
import { DEFAULT_LANGUAGE, LANGUAGE_TO_API_LANG_CODE } from '../common/constants';

const API_KEY = process.env.OPEN_WEATHER_KEY;

const URLS = {
  BASE: 'https://api.openweathermap.org/',
  ONECALL: 'data/2.5/onecall?',
  KEY: `appid=${API_KEY}`,
  UNITS: '&units=metric',
  LANGUAGE: '&lang=',
};

const API_URL_REQUEST = `${URLS.BASE}${URLS.ONECALL}${URLS.KEY}${URLS.UNITS}`;

export const getForecastByCoordinates = async ({
  latitude,
  longitude,
  language = DEFAULT_LANGUAGE,
}) => {
  const languageQuery = `${URLS.LANGUAGE}${LANGUAGE_TO_API_LANG_CODE[language]}`;
  const coordinatesQuery = `&lat=${latitude}&lon=${longitude}`;
  const forecast = await fetchData(`${API_URL_REQUEST}${languageQuery}${coordinatesQuery}`);
  return forecast;
};
