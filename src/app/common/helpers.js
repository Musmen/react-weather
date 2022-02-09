export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const MINUTES_PRECISION_INDEX = 2;
const MINUTES_IN_ONE_DEGREE = 60;

const getCoordinateDegreesAndMinutesString = (coordinate) => {
  const degrees = Math.trunc(coordinate);
  const minutes = Math.round(
    +Math.abs(coordinate - degrees).toFixed(MINUTES_PRECISION_INDEX) * MINUTES_IN_ONE_DEGREE,
  );
  return `${degrees}° ${minutes}'`;
};

export const getCoordinatesDegreesAndMinutesString = (coordinates) => {
  const { latitude, longitude } = coordinates;

  return {
    latitude: getCoordinateDegreesAndMinutesString(latitude),
    longitude: getCoordinateDegreesAndMinutesString(longitude),
  };
};
