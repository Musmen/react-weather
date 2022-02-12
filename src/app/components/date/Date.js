import './Date.scss';

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function Date({ timeZone }) {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const { day, month } = getLocalDateObject(timeZone);
    setDateString(`${day} ${month}`);
  }, [timeZone]);

  return <span className="date">{dateString}</span>;
}

Date.propTypes = {
  timeZone: propTypes.string,
};

Date.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default Date;
