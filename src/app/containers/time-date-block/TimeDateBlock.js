import './TimeDateBlock.scss';

import React, { useContext } from 'react';
import propTypes from 'prop-types';

import FullDate from '../../components/full-date/FullDate';
import Clock from '../../components/clock/Clock';
import LanguageContext from '../../components/language-context/LanguageContext';

import { DEFAULT_TIMEZONE } from '../../common/constants';
import { getLocalDateObject } from '../../common/helpers';
import { VOCABULARY } from '../../common/vocabulary';

function TimeDateBlock({ timeZone }) {
  const { currentLanguage } = useContext(LanguageContext);

  const { day, month, weekDay } = getLocalDateObject(timeZone);
  const translatedMonth = VOCABULARY.month[currentLanguage][month];
  const translatedWeekDay = VOCABULARY.weekDay[currentLanguage][weekDay];

  return (
    <div className="TimeDateBlock">
      <FullDate day={day} month={translatedMonth} weekDay={translatedWeekDay} />
      <Clock timeZone={timeZone} />
    </div>
  );
}

TimeDateBlock.propTypes = {
  timeZone: propTypes.string,
};

TimeDateBlock.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default TimeDateBlock;
