import './FullDate.scss';

import React from 'react';
import propTypes from 'prop-types';

import Date from '../date/Date';

import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function FullDate({ timeZone }) {
  const { weekDay } = getLocalDateObject(timeZone);

  return (
    <p className="full-date">
      <span className="week-day">{weekDay}</span>
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
