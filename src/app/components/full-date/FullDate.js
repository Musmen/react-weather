import './FullDate.scss';

import React from 'react';
import propTypes from 'prop-types';

import Date from '../date/Date';

function FullDate({ day, month, weekDay }) {
  return (
    <p className="full-date">
      <span className="week-day">{weekDay}</span>
      <Date day={day} month={month} />
    </p>
  );
}

FullDate.propTypes = {
  day: propTypes.string,
  month: propTypes.string,
  weekDay: propTypes.string,
};

FullDate.defaultProps = {
  day: '',
  month: '',
  weekDay: '',
};

export default FullDate;
