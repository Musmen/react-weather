import './FullDate.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Date from '../date/Date';
import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function FullDate({ timeZone }) {
  const [currentWeekDay, setCurrentWeekDay] = useState('');

  useEffect(() => {
    const { weekDay } = getLocalDateObject(timeZone);
    setCurrentWeekDay(weekDay);
  }, [timeZone]);

  return (
    <p className="full-date">
      <span className="week-day">{currentWeekDay}</span>
      <Date timeZone={timeZone} />
    </p>
  );
}

FullDate.propTypes = {
  timeZone: propTypes.string,
};

FullDate.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default FullDate;
