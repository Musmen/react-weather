import './Clock.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function Clock({ timeZone }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const clockTimer = setInterval(() => {
      const currentTime = getLocalDateObject(timeZone).time;
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(clockTimer);
    };
  }, [timeZone]);

  return <p className="clock">{time}</p>;
}

Clock.propTypes = {
  timeZone: propTypes.string,
};

Clock.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default Clock;
