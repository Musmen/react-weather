import './TimeDateBlock.scss';

import React from 'react';
import propTypes from 'prop-types';

import FullDate from '../../components/full-date/FullDate';
import Clock from '../../components/clock/Clock';

import { DEFAULT_TIMEZONE } from '../../common/constants';

function TimeDateBlock({ timeZone }) {
  return (
    <div className="TimeDateBlock">
      <FullDate timeZone={timeZone} />
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
