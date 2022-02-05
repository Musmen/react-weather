import React from 'react';
import { DEFAULT_LANGUAGE } from '../../common/constants';

const LanguageContext = React.createContext({
  currentLanguage: DEFAULT_LANGUAGE,
  changeLanguage: () => {},
});

export default LanguageContext;
