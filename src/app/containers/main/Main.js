import React, { useCallback, useMemo, useState, useEffect } from 'react';

import ControlBlock from '../control-block/ControlBlock';
import WidgetBlock from '../widget-block/WidgetBlock';
import LanguageContext from '../../components/language-context/LanguageContext';
import Spinner from '../../components/spinner/Spinner';

import updateCoordinates from '../../services/geo-location';
import {
  getCoordinatesByPlaceName,
  getPlaceInfoByGeoCoordinates,
  parseCoordinates,
  parseCountry,
  parsePlace,
} from '../../services/open-cage';
import { getForecastByCoordinates } from '../../services/open-weather';
import { getItemFromStorage, setItemToStorage, STORAGE_KEYS } from '../../services/local-storage';

import {
  DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT,
  DEFAULT_LANGUAGE,
  DEFAULT_TIMEZONE,
} from '../../common/constants';
import { changeBgImageWithPreloadingByLocation } from '../../services/flickr';

function Main() {
  // Temperature unit changing functionality
  const temperatureUnitFromStorage = getItemFromStorage(STORAGE_KEYS.TEMPERATURE_UNIT);

  const [isCelsius, setTemperatureUnit] = useState(
    temperatureUnitFromStorage === null
      ? DEFAULT_IS_CELSIUS_TEMPERATURE_UNIT
      : Boolean(temperatureUnitFromStorage),
  );

  const changeTemperatureUnit = useCallback(() => {
    setTemperatureUnit(!isCelsius);
    setItemToStorage(STORAGE_KEYS.TEMPERATURE_UNIT, !isCelsius);
  }, [isCelsius, setTemperatureUnit]);
  // ***************************************

  // Search query changing functionality
  const [searchQuery, setSearchQuery] = useState('');

  const changeSearchQuery = useCallback(
    (newSearchQuery) => {
      setSearchQuery(newSearchQuery);
    },
    [setSearchQuery],
  );
  // ***************************************

  // Manage loading state
  const [isLoading, setIsLoading] = useState(true);

  const changeLoadingState = useCallback(
    (loadingState) => {
      setIsLoading(loadingState);
    },
    [setIsLoading],
  );
  // ***************************************

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [place, setPlace] = useState(null);
  const [country, setCountry] = useState(null);
  const [forecast, setForecast] = useState(null);

  const timeZone = forecast ? forecast.timezone : DEFAULT_TIMEZONE;

  const changeBgImageByLocationHandler = useCallback(() => {
    changeBgImageWithPreloadingByLocation(timeZone, country, place);
  }, [timeZone, place, country]);

  const onLocationChangeHandler = useCallback(
    async (locationCoordinates, language, needToChangeBgImage = true) => {
      setCoordinates(locationCoordinates);
      const locationResponse = await getPlaceInfoByGeoCoordinates({
        ...locationCoordinates,
        language,
      });
      const locationInfo = locationResponse.results[0];
      const currentPlace = parsePlace(locationInfo);
      const currentCountry = parseCountry(locationInfo);
      setPlace(currentPlace);
      setCountry(currentCountry);

      const forecastResponse = await getForecastByCoordinates({
        ...locationCoordinates,
        language,
      });
      setForecast(forecastResponse);

      if (needToChangeBgImage) {
        const currentTimeZone = forecastResponse ? forecastResponse.timezone : DEFAULT_TIMEZONE;
        await changeBgImageWithPreloadingByLocation(currentTimeZone, currentCountry, currentPlace);
      }

      changeLoadingState(false);
    },
    [],
  );

  // Language changing functionality
  const [currentLanguage, setLanguage] = useState(
    getItemFromStorage(STORAGE_KEYS.LANGUAGE) || DEFAULT_LANGUAGE,
  );

  const changeLanguageHandler = useCallback(
    ({ target: { value } }) => {
      setItemToStorage(STORAGE_KEYS.LANGUAGE, value);
      setLanguage(value);
      changeLoadingState(true);
      onLocationChangeHandler(coordinates, value, false);
    },
    [coordinates],
  );

  const languageState = useMemo(
    () => ({ currentLanguage, changeLanguageHandler }),
    [currentLanguage, changeLanguageHandler],
  );
  // ***************************************

  // Geo-location auto-detect functionality
  useEffect(() => {
    changeLoadingState(true);
    updateCoordinates(onLocationChangeHandler, currentLanguage);
    console.log('auto detect coordinates');
  }, []);
  // ***************************************

  // Change location by search query (place name)
  const onSearchQueryChangeHandler = useCallback(
    async (placeName) => {
      if (placeName === '') return;
      changeLoadingState(true);
      const placeInfo = await getCoordinatesByPlaceName(placeName);
      const locationCoordinates = parseCoordinates(placeInfo);
      onLocationChangeHandler(locationCoordinates, currentLanguage);
      console.log('update coordinates by search query (place name)');
    },
    [onLocationChangeHandler, currentLanguage],
  );

  useEffect(() => {
    onSearchQueryChangeHandler(searchQuery);
  }, [searchQuery]);
  // ***************************************

  return (
    <LanguageContext.Provider value={languageState}>
      {isLoading && <Spinner />}
      <ControlBlock
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
        isCelsius={isCelsius}
        changeTemperatureUnit={changeTemperatureUnit}
        changeBgImageByLocationHandler={changeBgImageByLocationHandler}
      />
      <WidgetBlock
        coordinates={coordinates}
        place={place}
        country={country}
        forecast={forecast}
        isCelsius={isCelsius}
      />
    </LanguageContext.Provider>
  );
}

export default Main;
