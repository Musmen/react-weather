import { DEFAULT_TIMEZONE, MONTH_TO_SEASON } from './constants';

// Fetch
export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
// ***************************

// Coordinates convert to degrees and minutes
const MINUTES_PRECISION_INDEX = 2;
const MINUTES_IN_ONE_DEGREE = 60;

const getCoordinateDegreesAndMinutesString = (coordinate) => {
  const degrees = Math.trunc(coordinate);
  const minutes = Math.round(
    +Math.abs(coordinate - degrees).toFixed(MINUTES_PRECISION_INDEX) * MINUTES_IN_ONE_DEGREE,
  );
  return `${degrees}° ${minutes}'`;
};

export const getCoordinatesDegreesAndMinutesObject = (coordinates) => {
  const { latitude, longitude } = coordinates;

  return {
    latitude: getCoordinateDegreesAndMinutesString(latitude),
    longitude: getCoordinateDegreesAndMinutesString(longitude),
  };
};
// ***************************

// Date and time parsing
const dateTimeFormatOptions = {
  hour12: false,
  weekday: 'short',
  day: '2-digit',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const getLocalDateTimeString = (currentTimeZone) => {
  const timeZone = currentTimeZone || DEFAULT_TIMEZONE;
  return new Date().toLocaleString('en-US', { timeZone, ...dateTimeFormatOptions });
};

const getLocalDateTimeArray = (localDateTimeString) =>
  localDateTimeString.split(',').map((item) => item.trim());

export const getLocalDateObject = (timeZone) => {
  const localDateTimeString = getLocalDateTimeString(timeZone);
  const [weekDay, monthAndDay, time] = getLocalDateTimeArray(localDateTimeString);
  const [month, day] = monthAndDay.split(' ');
  const [hour] = time.split(':');

  return { weekDay, month, day, time, hour };
};

export const getDayTime = (timeZone) => {
  const hour = +getLocalDateObject(timeZone).hour;

  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'day';
  if (hour >= 18 && hour < 24) return 'evening';
  return 'night';
};

export const getSeason = (timeZone) => {
  const { month } = getLocalDateObject(timeZone);
  return MONTH_TO_SEASON[month];
};
// ***************************

export const formatTemperature = (isCelcius, temperatureInCelcius) => {
  if (isCelcius) return temperatureInCelcius;

  return Math.round((+temperatureInCelcius * 9) / 5 + 32);
};

export const getAverage = (...args) =>
  args.reduce((previusValue, currentValue) => previusValue + currentValue, 0) / args.length;
