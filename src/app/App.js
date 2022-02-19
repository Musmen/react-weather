import './App.scss';

import React, { useMemo, useState } from 'react';

import ControlBlock from './containers/control-block/ControlBlock';
import MainBlock from './containers/main-block/MainBlock';
import LanguageContext from './components/language-context/LanguageContext';
import Header from './components/header/Header';

import { DEFAULT_LANGUAGE } from './common/constants';

function App() {
  const [currentLanguage, setLanguage] = useState(DEFAULT_LANGUAGE);
  const changeLanguage = ({ target: { value } }) => {
    setLanguage(value);
  };

  const languageState = useMemo(
    () => ({ currentLanguage, changeLanguage }),
    [currentLanguage, changeLanguage],
  );

  const [searchQuery, setSearchQuery] = useState('');

  const changeSearchQuery = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <LanguageContext.Provider value={languageState}>
      <Header />
      <ControlBlock searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
      <MainBlock searchQuery={searchQuery} />
    </LanguageContext.Provider>
  );
}

export default App;
