import React from 'react';
import propTypes from 'prop-types';

function Date({ day, month }) {
  return (
    <span className="date">
      {day} {month}
    </span>
  );
}

Date.propTypes = {
  day: propTypes.string,
  month: propTypes.string,
};

Date.defaultProps = {
  day: '',
  month: '',
};

export default Date;
