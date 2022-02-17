import React from 'react';
import propTypes from 'prop-types';

import { getLocalDateObject } from '../../common/helpers';
import { DEFAULT_TIMEZONE } from '../../common/constants';

function Date({ timeZone }) {
  const { day, month } = getLocalDateObject(timeZone);
  return (
    <span className="date">
      {day} {month}
    </span>
  );
}

Date.propTypes = {
  timeZone: propTypes.string,
};

Date.defaultProps = {
  timeZone: DEFAULT_TIMEZONE,
};

export default Date;
