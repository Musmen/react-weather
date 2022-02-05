import './scss/styles.scss';

import React, { useMemo, useState } from 'react';

import Header from './components/header/Header';
import ControlBlock from './containers/control-block/ControlBlock';
import LanguageContext from './components/language-context/LanguageContext';

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

  return (
    <LanguageContext.Provider value={languageState}>
      <>
        <p>{currentLanguage}</p>
        <ControlBlock />
        <Header />
      </>
    </LanguageContext.Provider>
  );
}

export default App;
