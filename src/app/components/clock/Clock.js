import './Clock.scss';

import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';

import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE, ONE_SECOND_IN_MILLISECONDS } from '../../common/constants';

function Clock({ timeZone }) {
  const [time, setTime] = useState(null);

  const tick = useCallback(() => {
    const currentTime = getLocalDateObject(timeZone).time;
    setTime(currentTime);
  }, [timeZone]);

  useEffect(() => {
    tick();
    const clockTimer = setInterval(tick, ONE_SECOND_IN_MILLISECONDS);

    return () => {
      clearInterval(clockTimer);
    };
  }, [tick]);

  return <p className="clock">{time}</p>;
}

Clock.propTypes = {
  timeZone: propTypes.string,
};

Clock.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default Clock;
