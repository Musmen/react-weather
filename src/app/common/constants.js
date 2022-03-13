export const LANGUAGES = ['eng', 'rus', 'bel'];
export const DEFAULT_LANGUAGE = LANGUAGES[0];

const MAP_ZOOM_DEFAULT = 7;
export const DEFAULT_MAP_CONFIG = {
  style: 'mapbox://styles/mapbox/outdoors-v11',
  zoom: MAP_ZOOM_DEFAULT,
};

export const DEFAULT_TIMEZONE = 'Europe/Minsk';

export const ONE_SECOND_IN_MILLISECONDS = 1000;

export const DAYS_IN_A_WEEK = 7;

export const SKYCONS_ICONS_OPTIONS = {
  monochrome: false,
  color: {
    rain: '#5590fe',
    dark_cloud: '#777777',
    cloud: '#5590fe',
    light_cloud: '#5590fe',
    moon: '#ffdc00',
  },
};

export const OPEN_WEATHER_ICON_TO_SKYCONS_ICON = {
  '01d': 'clear-day',
  '01n': 'clear-night',
  '02d': 'partly-cloudy-day',
  '02n': 'partly-cloudy-night',
  '03d': 'cloudy',
  '03n': 'cloudy',
  '04d': 'cloudy',
  '04n': 'cloudy',
  '09d': 'showers-day',
  '09n': 'showers-night',
  '10d': 'rain',
  '10n': 'rain',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'fog',
  '50n': 'fog',
  '11d': 'thunder',
  '11n': 'thunder',
};

export const MONTH_TO_SEASON = {
  January: 'winter',
  February: 'winter',
  March: 'spring',
  April: 'spring',
  May: 'spring',
  June: 'summer',
  July: 'summer',
  August: 'summer',
  September: 'autumn',
  October: 'autumn',
  November: 'autumn',
  December: 'winter',
};
