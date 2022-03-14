import './LanguageSelect.scss';

import React, { useContext } from 'react';
import { LANGUAGES } from '../../common/constants';
import LanguageContext from '../language-context/LanguageContext';

function LanguageSelect() {
  const { currentLanguage, changeLanguageHandler } = useContext(LanguageContext);

  return (
    <select
      className="language__selector"
      name="language"
      value={currentLanguage}
      onChange={changeLanguageHandler}
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
