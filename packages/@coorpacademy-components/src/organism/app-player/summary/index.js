import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const PopinEnd = props => {
  const {success} = props;

  return (
    <div className={style.wrapper}>
      <p>End</p>
      <p>success: {success}</p>
    </div>
  );
};

PopinEnd.propTypes = {
  success: PropTypes.bool
};

export default PopinEnd;
