export const STORAGE_KEYS = {
  LANGUAGE: 'react-weather-LS-key-language',
  TEMPERATURE_UNIT: 'react-weather-LS-key-temperature-unit',
};

export const setItemToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));
