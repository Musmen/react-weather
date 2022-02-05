import './language-select.styles.scss';

import React, { useContext } from 'react';
import { LANGUAGES } from '../../common/constants';
import LanguageContext from '../language-context/LanguageContext';

function LanguageSelect() {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  return (
    <select
      className="language__selector"
      name="language"
      value={currentLanguage}
      onChange={changeLanguage}
    >
      {LANGUAGES.map((language) => (
        <option value={language} key={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelect;
