import './Main.scss';

import React, { useCallback, useMemo, useState } from 'react';

import ControlBlock from '../control-block/ControlBlock';
import WidgetBlock from '../widget-block/WidgetBlock';
import LanguageContext from '../../components/language-context/LanguageContext';

import { DEFAULT_LANGUAGE } from '../../common/constants';

function Main() {
  // Language changing functionality
  const [currentLanguage, setLanguage] = useState(DEFAULT_LANGUAGE);

  const changeLanguage = useCallback(
    ({ target: { value } }) => {
      setLanguage(value);
    },
    [setLanguage],
  );

  const languageState = useMemo(
    () => ({ currentLanguage, changeLanguage }),
    [currentLanguage, changeLanguage],
  );
  // ***************************************

  // Temperature unit changing functionality
  const [isCelcius, setTemperatureUnit] = useState(true);

  const changeTemperatureUnit = useCallback(() => {
    setTemperatureUnit(!isCelcius);
  }, [isCelcius, setTemperatureUnit]);
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

  return (
    <LanguageContext.Provider value={languageState}>
      {isLoading && <p className="spinner">Is loading...</p>}
      <p>{`isCelcius ${isCelcius}`}</p>
      <ControlBlock
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
        isCelcius={isCelcius}
        changeTemperatureUnit={changeTemperatureUnit}
      />
      <WidgetBlock searchQuery={searchQuery} changeLoadingState={changeLoadingState} />
    </LanguageContext.Provider>
  );
}

export default Main;
