import { fetchData } from '../common/helpers';

const API_KEY = process.env.OPEN_WEATHER_KEY;

const URLS = {
  BASE: 'https://api.openweathermap.org/',
  ONECALL: 'data/2.5/onecall?',
  KEY: `appid=${API_KEY}`,
  UNITS: '&units=metric',
};

const API_URL_REQUEST = `${URLS.BASE}${URLS.ONECALL}${URLS.KEY}${URLS.UNITS}`;

const getForecastByCoordinates = async ({ latitude, longitude }) => {
  const coordinatesQuery = `&lat=${latitude}&lon=${longitude}`;
  const forecast = await fetchData(`${API_URL_REQUEST}${coordinatesQuery}`);
  return forecast;
};

const updateForecast = async (coordinates, setForecast, changeLoadingState) => {
  const forecastResponse = await getForecastByCoordinates(coordinates);
  setForecast(forecastResponse);
  changeLoadingState(false);
  console.log(forecastResponse);
};

export default updateForecast;
